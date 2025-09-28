import { FightResult } from "@minitroopers/prisma/client";
import { spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const SWFPATH =
  "C:/Users/fanba/Documents/minitroopers-swf/apps/client/src/assets/swf/client_fr_edit.swf";
const MAX_CONCURRENT = 20;
const TIMEOUT = 35000;

export class Ruffle {
  runningProcesses = 0;
  queue: Array<(value: boolean) => void> = [];

  constructor() {}

  async waitForSlot() {
    return new Promise((resolve) => {
      if (this.runningProcesses < MAX_CONCURRENT) {
        this.runningProcesses++;
        resolve(true);
      } else {
        this.queue.push(resolve);
      }
    });
  }

  releaseSlot() {
    if (this.runningProcesses <= 0) {
      this.runningProcesses = 0;
      return;
    }

    this.runningProcesses--;

    if (this.queue.length > 0) {
      const next = this.queue.shift() as (value: boolean) => void;
      this.runningProcesses++;
      next(true);
    }
  }

  async runBattle(flashvars: string): Promise<{
    result: FightResult;
    graveyard: number[];
  }> {
    await this.waitForSlot();

    return new Promise((resolve, reject) => {
      let graveyard: number[] = [];
      let battleResult: number | null = null;
      let timeoutId: NodeJS.Timeout | undefined = undefined;
      let slotReleased = false;

      const safeReleaseSlot = () => {
        if (!slotReleased) {
          slotReleased = true;
          this.releaseSlot();
        }
      };

      const checkResults = () => {
        if (battleResult !== null && graveyard !== null) {
          clearTimeout(timeoutId);
          child.kill();
          safeReleaseSlot();
          const result = battleResult ? FightResult.lose : FightResult.win;
          resolve({
            graveyard: graveyard,
            result: result,
          });
        }
      };

      const args = [
        SWFPATH,
        "-P",
        decodeURIComponent(flashvars),
        // "-g dx12",
        // "--no-gui",
        // "--no-avm2-optimizer",
        "--dummy-external-interface",
      ];

      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);

      const rufflePath = join(
        __dirname,
        "..",
        "bin",
        process.platform === "win32" ? "ruffle_desktop.exe" : "ruffle_desktop",
      );

      // Spawn the Ruffle process
      const child = spawn(rufflePath, args);

      // Set timeout
      timeoutId = setTimeout(() => {
        child.kill();
        safeReleaseSlot();
        reject(new Error("Battle simulation timed"));
      }, TIMEOUT);

      child.stdout.on("data", (data) => {
        const output = data.toString();
        const lines = output.split("\n");

        for (const line of lines) {
          console.log(line);
          // Look for battle result lines
          if (line.includes("battleResult")) {
            const listMatch = line.match(/List\(\[(.*?)\]\)/);
            if (listMatch) {
              const content = listMatch[1]; // "Number(5.0), Number(6.0)"

              const numMatches = content.match(/Number\(([\d.]+)\)/g);
              if (!numMatches) {
                graveyard = [];
              } else {
                graveyard = numMatches.map((n: string) =>
                  parseFloat(n.match(/[\d.]+/)![0]),
                );
              }

              checkResults();
            } else {
              const number = line.match(/Number\(([\d.]+)\)/);
              if (number) {
                battleResult = parseInt(number[1]);
                checkResults();
              }
            }
          }
        }
      });

      child.stderr.on("data", (data) => {
        const output = data.toString();
        if (
          output.includes("ERROR") ||
          output.includes("Error") ||
          output.includes("error")
        ) {
          console.error("Ruffle error: " + output);
        }
      });

      child.on("error", (err) => {
        clearTimeout(timeoutId);
        child.kill();
        safeReleaseSlot();
        reject(new Error(`Failed to start Ruffle process: ${err.message}`));
      });

      child.on("exit", (code) => {
        clearTimeout(timeoutId);
        if (code !== 0 && battleResult === null) {
          safeReleaseSlot();
          reject(new Error(`Ruffle process exited with code ${code}`));
        }
      });

      process.on("exit", () => {
        child.kill();
        safeReleaseSlot();
      });
    });
  }
}
