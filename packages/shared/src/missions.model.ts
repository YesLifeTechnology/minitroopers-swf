import { Mission } from "@minitroopers/prisma";
import { ButtonState } from "./fights.model";

export const BuyingMissionCost = 5;

export const getMissionState = (
  missionHistories: Pick<Mission, "ts" | "result">[],
) => {
  const states: ButtonState[] = ["pending", "pending", "pending"];

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  const now = new Date();
  missionHistories
    .filter((previousFight) => isSameDay(now, new Date(previousFight.ts)))
    .reverse()
    .forEach((previousFight, i) => {
      states[i] = previousFight.result as ButtonState;
    });

  return states;
};
