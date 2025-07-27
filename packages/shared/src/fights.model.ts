import { Fight } from "@minitroopers/prisma";

export type ButtonState = "pending" | "lose" | "win" | "unlock";

export const PowerDiff: number = 10;

export const getFightState = (
  fightHistories: Pick<Fight, "ts" | "result">[],
) => {
  const states: ButtonState[] = [
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
  ];

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  const now = new Date();
  fightHistories
    .filter((previousFight) => isSameDay(now, new Date(previousFight.ts)))
    .reverse()
    .forEach((previousFight, i) => {
      states[i] = previousFight.result as ButtonState;
    });

  return states;
};

export type FightDetail = {
  left: {
    armyName: string;
    prefix: number;
  };
  right: {
    armyName: string;
    prefix: number;
  };
  data: string;
};
