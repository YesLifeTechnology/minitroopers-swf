import { MissionType } from "@minitroopers/prisma";
import { ButtonState } from "./fights.model";
import { UserExtended } from "./user.model";

export const BuyingMissionCost = 5;

export const getMissionState = (
  missionHistories: UserExtended["missions"],
  missionType: MissionType,
) => {
  const states: ButtonState[] = ["pending", "pending", "pending"];

  missionHistories
    .filter((mission) => mission.type === missionType)
    .reverse()
    .forEach((previousFight, i) => {
      states[i] = previousFight.result as ButtonState;
    });

  return states;
};
