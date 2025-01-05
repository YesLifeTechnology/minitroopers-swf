import { Fight, HistoryUser, Trooper, User } from "@minitroopers/prisma";

export interface UserExtended extends User {
  troopers: Trooper[];
  history: HistoryUser[];
  fights: Fight[];
  ipAddressUser: { ip: string }[];
}

export type PartialUserExtended = Omit<
  UserExtended,
  | "id"
  | "lang"
  | "name"
  | "invitedFrom"
  | "createdAt"
  | "lastConnexion"
  | "admin"
  | "connexionToken"
  | "referralGold"
  | "sponsoredById"
  | "ipAddressUser"
>;

export const getReferralPrice = (recruit: number): number => {
  if (recruit >= 35) return 0;
  if (recruit >= 15) return 5;
  if (recruit >= 5) return 10;
  if (recruit >= 1) return 50;
  return 100;
};

// export interface FightHistory extends HistoryUser {
//   options: {
//     result: FightResult;
//     fightId: string;
//     opponent: string;
//     clickable: true;
//   };
// }

export const parseToPartialUser = (user: UserExtended): PartialUserExtended => {
  return {
    armyName: user.armyName,
    armyUrl: user.armyUrl,
    color: user.color,
    gold: user.gold,
    power: user.power,
    prefix: user.prefix,
    history: [],
    fights: [],
    troopers: user.troopers ?? [],
  };
};
