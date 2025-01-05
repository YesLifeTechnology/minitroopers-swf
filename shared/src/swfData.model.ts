import { Enum } from "./helperSerial/enum";

export class ClientMode extends Enum {
  static __construct__ = ["BATTLE", "BLOCKS"];

  static BATTLE(arg0: any, arg1: any) {
    return new this("BATTLE", 0, arg0, arg1);
  }

  static BLOCKS(arg0: any) {
    return new this("BLOCKS", 4, arg0);
  }
}
ClientMode.resolve();

export class TrooperType extends Enum {
  static __construct__ = ["HUMAN", "RAT"];
  static HUMAN = new this("HUMAN", 0);
  static RAT = new this("RAT", 2);
}
TrooperType.resolve();

export class MoveSystem extends Enum {
  static __construct__ = ["HUNTER", "STANDARD", "DEFENDER"];
  static HUNTER = new this("HUNTER", 0);
  static STANDARD = new this("STANDARD", 1);
  static DEFENDER = new this("DEFENDER", 2);
}
MoveSystem.resolve();

export class BodyLoc extends Enum {
  static __construct__ = [
    "HEAD",
    "TORSO_LEFT",
    "TORSO_RIGHT",
    "STOMACH",
    "ARM_LEFT",
    "ARM_RIGHT",
    "LEG_LEFT",
    "LEG_RIGHT",
  ];
  static HEAD = new this("HEAD", 0);
  static TORSO_LEFT = new this("TORSO_LEFT", 1);
  static TORSO_RIGHT = new this("TORSO_RIGHT", 2);
  static STOMACH = new this("STOMACH", 3);
  static ARM_LEFT = new this("ARM_LEFT", 4);
  static ARM_RIGHT = new this("ARM_RIGHT", 5);
  static LEG_LEFT = new this("LEG_LEFT", 6);
  static LEG_RIGHT = new this("LEG_RIGHT", 7);
}
BodyLoc.resolve();

export class TargetType extends Enum {
  static __construct__ = ["DEFAULT", "SPECIFIC_CLASS"];
  static DEFAULT = new this("DEFAULT", 0);

  static SPECIFIC_CLASS(arg0: number) {
    return new this("SPECIFIC_CLASS", 1, arg0);
  }
}
TargetType.resolve();

export class ReloadSystem extends Enum {
  static __construct__ = ["RISKY", "CAUTIOUS", "DEFAULT", "FULL"];
  static RISKY = new this("RISKY", 0);
  static CAUTIOUS = new this("CAUTIOUS", 1);
  static DEFAULT = new this("DEFAULT", 2);
  static FULL = new this("FULL", 3);
}
ReloadSystem.resolve();

export class TargetSystem extends Enum {
  static __construct__ = ["CLOSEST", "EASIEST", "WEAKEST", "STRONGEST"];
  static CLOSEST = new this("CLOSEST", 0);
  static EASIEST = new this("EASIEST", 1);
  static WEAKEST = new this("WEAKEST", 2);
  static STRONGEST = new this("STRONGEST", 3);
}
TargetSystem.resolve();

export class BackgroundType extends Enum {
  static __construct__ = [
    "BG_GARDEN",
    "BG_ATTIC",
    "BG_SEWER",
    "BG_ROAD",
    "BG_WOOD",
  ];
  static BG_GARDEN = new this("BG_GARDEN", 0);
  static BG_ATTIC = new this("BG_ATTIC", 1);
  static BG_SEWER = new this("BG_SEWER", 2);
  static BG_ROAD = new this("BG_ROAD", 3);
  static BG_WOOD = new this("BG_WOOD", 4);
}
BackgroundType.resolve();

export class WeaponEnum extends Enum {
  static __construct__ = [
    "WEAPON_00",
    "WEAPON_01",
    "WEAPON_02",
    "WEAPON_03",
    "WEAPON_04",
    "WEAPON_05",
    "WEAPON_06",
    "WEAPON_07",
    "WEAPON_08",
    "WEAPON_09",
    "WEAPON_10",
    "WEAPON_11",
    "WEAPON_12",
    "WEAPON_13",
    "WEAPON_14",
    "WEAPON_15",
    "WEAPON_16",
    "WEAPON_17",
    "WEAPON_18",
    "WEAPON_19",
    "WEAPON_20",
    "WEAPON_21",
    "WEAPON_22",
    "WEAPON_23",
    "WEAPON_24",
    "WEAPON_25",
    "WEAPON_26",
    "WEAPON_27",
    "WEAPON_28",
    "WEAPON_29",
    "WEAPON_30",
    "WEAPON_31",
    "WEAPON_32",
    "WEAPON_33",
    "WEAPON_34",
    "WEAPON_35",
    "WEAPON_36",
    "WEAPON_37",
  ];
  static WEAPON_00 = new this("WEAPON_00", 0);
  static WEAPON_01 = new this("WEAPON_01", 1);
  static WEAPON_02 = new this("WEAPON_02", 2);
  static WEAPON_03 = new this("WEAPON_03", 3);
  static WEAPON_04 = new this("WEAPON_04", 4);
  static WEAPON_05 = new this("WEAPON_05", 5);
  static WEAPON_06 = new this("WEAPON_06", 6);
  static WEAPON_07 = new this("WEAPON_07", 7);
  static WEAPON_08 = new this("WEAPON_08", 8);
  static WEAPON_09 = new this("WEAPON_09", 9);
  static WEAPON_10 = new this("WEAPON_10", 10);
  static WEAPON_11 = new this("WEAPON_11", 11);
  static WEAPON_12 = new this("WEAPON_12", 12);
  static WEAPON_13 = new this("WEAPON_13", 13);
  static WEAPON_14 = new this("WEAPON_14", 14);
  static WEAPON_15 = new this("WEAPON_15", 15);
  static WEAPON_16 = new this("WEAPON_16", 16);
  static WEAPON_17 = new this("WEAPON_17", 17);
  static WEAPON_18 = new this("WEAPON_18", 18);
  static WEAPON_19 = new this("WEAPON_19", 19);
  static WEAPON_20 = new this("WEAPON_20", 20);
  static WEAPON_21 = new this("WEAPON_21", 21);
  static WEAPON_22 = new this("WEAPON_22", 22);
  static WEAPON_23 = new this("WEAPON_23", 23);
  static WEAPON_24 = new this("WEAPON_24", 24);
  static WEAPON_25 = new this("WEAPON_25", 25);
  static WEAPON_26 = new this("WEAPON_26", 26);
  static WEAPON_27 = new this("WEAPON_27", 27);
  static WEAPON_28 = new this("WEAPON_28", 28);
  static WEAPON_29 = new this("WEAPON_29", 29);
  static WEAPON_30 = new this("WEAPON_30", 30);
  static WEAPON_31 = new this("WEAPON_31", 31);
  static WEAPON_32 = new this("WEAPON_32", 32);
  static WEAPON_33 = new this("WEAPON_33", 33);
  static WEAPON_34 = new this("WEAPON_34", 34);
  static WEAPON_35 = new this("WEAPON_35", 35);
  static WEAPON_36 = new this("WEAPON_36", 36);
  static WEAPON_37 = new this("WEAPON_37", 37);
}
WeaponEnum.resolve();

const OBFU_DICTIONARY = {
  "V\x1bE|": "pref",
  "\fA2c": "seed",
  "$PS\x01": "gfx",
  ";\x01\fZ": "mode",
  "An%6": "type",
  "}&\x16Y\x01": "force",
  "\x032\x1A4": "name",
  "7X\x01": "id",
  "\x0bR\x10\x1b\x02": "__CWeapon",
  "\x11!\x0ea\x01": "reloadSystem",
  "\x15S\x17?\x03": "targetType",
  "\x1a)\x13=\x01": "__CBody",
  "\x1dlQK\x03": "moveSystem",
  ")0\x19i\x03": "leftOver",
  ";uXE": "targetSystem",
  ";\x1F\x0FJ": "army",
  "\x05(\x0Bm\x02": "action",
  Vif0: "ymax",
  "hW+a": "xmax",
  "\x17\x06\t\x01": "fac",
  "\x10Gv\x01": "add",
  "\ng\x12;\x01": "space",
  "\nz\nv": "choices",
  "*M\x01": "bg",
  "a]e\x1B\x02": "armies",
  "`1\x1f*\x02": "troopers",
  "OPz\x16\x03": "faction",
  "K)\x16\n\x02": "__UP2",
};

const OBFU_REVERSE_DICTIONARY = Object.fromEntries(
  Object.entries(OBFU_DICTIONARY).map(([key, value]) => [value, key]),
);

export const objectObfuscator = (obj: any) => {
  if (!obj) return obj;

  // If obj is an Enum instance (array with specific properties)
  if (Array.isArray(obj) && obj.constructor.name !== "Array") {
    // Keep the enum structure but obfuscate its contents
    const enumCopy = obj.slice(); // Create a copy of the array
    // Obfuscate any object properties within the enum
    for (let i = 0; i < enumCopy.length; i++) {
      if (typeof enumCopy[i] === "object" && enumCopy[i] !== null) {
        enumCopy[i] = objectObfuscator(enumCopy[i]);
      }
    }
    // Preserve the constructor
    Object.setPrototypeOf(enumCopy, Object.getPrototypeOf(obj));
    return enumCopy;
  }

  // Handle regular objects
  if (typeof obj === "object") {
    const newObj: any = Array.isArray(obj) ? [] : {};

    for (let [k, v] of Object.entries(obj)) {
      // Recursively handle nested objects/arrays
      const newValue = objectObfuscator(v);

      // Check if key should be obfuscated
      const newKey = OBFU_REVERSE_DICTIONARY[k] || k;
      newObj[newKey] = newValue;
    }
    return newObj;
  }

  return obj;
};
