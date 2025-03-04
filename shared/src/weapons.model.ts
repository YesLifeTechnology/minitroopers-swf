export const Weapons = [
  {
    aim: 2,
    ammo: 0,
    crit: 1,
    damageType: ["MELEE", 6],
    dmax: 2,
    dmin: 1,
    fr: 6,
    habilities: [],
    handling: 5,
    hitmin: 0,
    hit: 75,
    id: ["WEAPON_FISTS", 0],
    name: "Fists",
    pfr: 1,
    recovery: 60,
    reload: 0,
    rmax: 1,
    rmin: null,
    rounds: 0,
    score: 0,
    shots: 1,
    skin: "McSoldat",
    taunt: 4,
    type: ["WT_MELEE", 5],
  },
  {
    aim: 7,
    ammo: 4,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 0,
    habilities: [],
    handling: 30,
    hitmin: 25,
    hit: 90,
    id: ["WEAPON_PISTOL", 1],
    name: "Pistol",
    pfr: 0,
    recovery: 100,
    reload: 18,
    rmax: 7,
    rmin: null,
    rounds: 3,
    score: 50,
    shots: 1,
    skin: "McGunMan",
    taunt: 1,
    type: ["WT_PISTOL", 0],
  },
  {
    aim: 7,
    ammo: 12,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 6,
    dmin: 4,
    fr: 0,
    habilities: [
      ["KNOCKOUT", 1],
      ["READY", 8],
    ],
    handling: 30,
    hitmin: 25,
    hit: 75,
    id: ["WEAPON_REVOLVER", 2],
    name: "Revolver",
    pfr: 1,
    recovery: 120,
    reload: 36,
    rmax: 9,
    rmin: null,
    rounds: 6,
    score: 100,
    shots: 1,
    skin: "McGunMan",
    taunt: 1,
    type: ["WT_PISTOL", 0],
  },
  {
    aim: 8,
    ammo: 8,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 4,
    fr: 0,
    habilities: [["PIERCE", 0]],
    handling: 30,
    hitmin: 50,
    hit: 100,
    id: ["WEAPON_DESERT_EAGLE", 3],
    name: "Desert Eagle",
    pfr: 5,
    recovery: 100,
    reload: 18,
    rmax: 10,
    rmin: null,
    rounds: 4,
    score: 100,
    shots: 1,
    skin: "McGunMan",
    taunt: 1,
    type: ["WT_PISTOL", 0],
  },
  {
    aim: 7,
    ammo: 8,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 0,
    habilities: [],
    handling: 20,
    hitmin: 25,
    hit: 90,
    id: ["WEAPON_BERETTA", 4],
    name: "Beretta",
    pfr: 2,
    recovery: 50,
    reload: 18,
    rmax: 8,
    rmin: null,
    rounds: 4,
    score: 100,
    shots: 1,
    skin: "McGunMan",
    taunt: 1,
    type: ["WT_PISTOL", 0],
  },
  {
    aim: 9,
    ammo: 16,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 0,
    habilities: [["DOUBLE", 10]],
    handling: 30,
    hitmin: 25,
    hit: 80,
    id: ["WEAPON_DUAL_PISTOLS", 5],
    name: "Dual pistols",
    pfr: 0,
    recovery: 100,
    reload: 18,
    rmax: 8,
    rmin: null,
    rounds: 8,
    score: 100,
    shots: 1,
    skin: "McDualGunMan",
    taunt: 1,
    type: ["WT_PISTOL", 0],
  },
  {
    aim: 5,
    ammo: 4,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 8,
    dmin: 5,
    fr: 2,
    habilities: [
      ["KNOCKOUT", 1],
      ["ZONE", 6],
    ],
    handling: 50,
    hitmin: 100,
    hit: 150,
    id: ["WEAPON_SHOTGUN", 6],
    name: "Shotgun",
    pfr: 1,
    recovery: 150,
    reload: 32,
    rmax: 4,
    rmin: null,
    rounds: 1,
    score: 50,
    shots: 1,
    skin: "McShotgun",
    taunt: 1,
    type: ["WT_SHOTGUN", 1],
  },
  {
    aim: 5,
    ammo: 8,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 10,
    dmin: 5,
    fr: 2,
    habilities: [
      ["KNOCKOUT", 1],
      ["ZONE", 6],
    ],
    handling: 50,
    hitmin: 100,
    hit: 150,
    id: ["WEAPON_SEMI_AUTO_SHOTGUN", 7],
    name: "Semi-auto Shotgun",
    pfr: 0,
    recovery: 70,
    reload: 32,
    rmax: 4,
    rmin: null,
    rounds: 4,
    score: 100,
    shots: 1,
    skin: "McShotgun",
    taunt: 1,
    type: ["WT_SHOTGUN", 1],
  },
  {
    aim: 5,
    ammo: 6,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 10,
    dmin: 5,
    fr: 2,
    habilities: [
      ["KNOCKOUT", 1],
      ["ZONE", 6],
      ["DOUBLE", 10],
    ],
    handling: 50,
    hitmin: 50,
    hit: 150,
    id: ["WEAPON_DOUBLE_BARREL_SHOTGUN", 8],
    name: "Double-barrelled Shotgun",
    pfr: 3,
    recovery: 150,
    reload: 32,
    rmax: 5,
    rmin: null,
    rounds: 2,
    score: 100,
    shots: 1,
    skin: "McShotgun",
    taunt: 1,
    type: ["WT_SHOTGUN", 1],
  },
  {
    aim: 5,
    ammo: 6,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 10,
    dmin: 5,
    fr: 2,
    habilities: [
      ["AUTO_RELOAD", 5],
      ["KNOCKOUT", 1],
      ["ZONE", 6],
    ],
    handling: 50,
    hitmin: 100,
    hit: 150,
    id: ["WEAPON_PUMP_ACTION_SHOTGUN", 9],
    name: "Pump Action Shotgun",
    pfr: 2,
    recovery: 90,
    reload: 32,
    rmax: 4,
    rmin: null,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McShotgun",
    taunt: 1,
    type: ["WT_SHOTGUN", 1],
  },
  {
    aim: 3,
    ammo: 6,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 12,
    dmin: 4,
    fr: 2,
    habilities: [
      ["KNOCKOUT", 1],
      ["EXTENDED_ZONE", 7],
    ],
    handling: 30,
    hitmin: 100,
    hit: 150,
    id: ["WEAPON_SCATTERGUN", 10],
    name: "Scattergun",
    pfr: 4,
    recovery: 100,
    reload: 16,
    rmax: 4,
    rmin: null,
    rounds: 1,
    score: 50,
    shots: 1,
    skin: "McShotgun",
    taunt: 1,
    type: ["WT_SHOTGUN", 1],
  },
  {
    aim: 9,
    ammo: 18,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 1,
    habilities: [],
    handling: 100,
    hitmin: 5,
    hit: 80,
    id: ["WEAPON_ASSAULT_RIFLE", 11],
    name: "Assault Rifle",
    pfr: 5,
    recovery: 100,
    reload: 10,
    rmax: 6,
    rmin: 2,
    rounds: 9,
    score: 50,
    shots: 3,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 6,
    ammo: 18,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 1,
    habilities: [],
    handling: 60,
    hitmin: 5,
    hit: 80,
    id: ["WEAPON_M16", 12],
    name: "M16",
    pfr: 1,
    recovery: 80,
    reload: 10,
    rmax: 6,
    rmin: 2,
    rounds: 12,
    score: 100,
    shots: 3,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 5,
    ammo: 16,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 1,
    habilities: [],
    handling: 60,
    hitmin: 20,
    hit: 100,
    id: ["WEAPON_AK47", 13],
    name: "AK47",
    pfr: 0,
    recovery: 100,
    reload: 10,
    rmax: 7,
    rmin: 2,
    rounds: 12,
    score: 100,
    shots: 4,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 8,
    ammo: 18,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 1,
    habilities: [],
    handling: 60,
    hitmin: 10,
    hit: 90,
    id: ["WEAPON_FAMAS", 14],
    name: "FAMAS",
    pfr: 4,
    recovery: 50,
    reload: 10,
    rmax: 5,
    rmin: null,
    rounds: 9,
    score: 100,
    shots: 3,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 10,
    ammo: 18,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 7,
    dmin: 3,
    fr: 1,
    habilities: [["PIERCE", 0]],
    handling: 100,
    hitmin: 10,
    hit: 80,
    id: ["WEAPON_THOMPSON", 15],
    name: "Thompson",
    pfr: 2,
    recovery: 80,
    reload: 10,
    rmax: 6,
    rmin: 2,
    rounds: 9,
    score: 100,
    shots: 3,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 13,
    ammo: 18,
    crit: 20,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 1,
    habilities: [],
    handling: 40,
    hitmin: 4,
    hit: 100,
    id: ["WEAPON_UMP", 16],
    name: "UMP",
    pfr: 3,
    recovery: 80,
    reload: 6,
    rmax: 6,
    rmin: 2,
    rounds: 9,
    score: 100,
    shots: 3,
    skin: "McMachineGun",
    taunt: 1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 14,
    ammo: 2,
    crit: 1,
    damageType: ["EXPLOSION", 1],
    dmax: 15,
    dmin: 8,
    fr: 4,
    habilities: [
      ["HEAVY", 4],
      ["SECURE", 9],
    ],
    handling: 140,
    hitmin: 40,
    hit: 100,
    id: ["WEAPON_BAZOOKA_M1", 17],
    name: "Bazooka M1",
    pfr: 0,
    recovery: 100,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McSoldatBazooka",
    taunt: 0,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 18,
    ammo: 3,
    crit: 1,
    damageType: ["EXPLOSION", 1],
    dmax: 15,
    dmin: 8,
    fr: 4,
    habilities: [["SECURE", 9]],
    handling: 100,
    hitmin: 40,
    hit: 80,
    id: ["WEAPON_ROCKET_LAUNCHER", 18],
    name: "Rocket Launcher",
    pfr: 1,
    recovery: 120,
    reload: 40,
    rmax: null,
    rmin: 3,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McSoldatBazooka",
    taunt: 0,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 18,
    ammo: 6,
    crit: 1,
    damageType: ["EXPLOSION", 1],
    dmax: 12,
    dmin: 6,
    fr: 4,
    habilities: [
      ["HEAVY", 4],
      ["SECURE", 9],
    ],
    handling: 150,
    hitmin: 40,
    hit: 80,
    id: ["WEAPON_BAZOOKA_M25", 19],
    name: "Bazooka M25",
    pfr: 2,
    recovery: 120,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 3,
    score: 100,
    shots: 1,
    skin: "McSoldatBazooka",
    taunt: 0,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 18,
    ammo: 1,
    crit: 1,
    damageType: ["EXPLOSION", 1],
    dmax: 28,
    dmin: 14,
    fr: 4,
    habilities: [
      ["HEAVY", 4],
      ["SECURE", 9],
    ],
    handling: 150,
    hitmin: 40,
    hit: 95,
    id: ["WEAPON_INFERNAL_TUBE", 20],
    name: "Infernal Tube",
    pfr: 3,
    recovery: 150,
    reload: 100,
    rmax: null,
    rmin: 3,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McSoldatBazooka",
    taunt: 0,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 5,
    ammo: 36,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 5,
    habilities: [["HEAVY", 4]],
    handling: 80,
    hitmin: 10,
    hit: 90,
    id: ["WEAPON_COMANCHE_AUTO", 21],
    name: "Comanche Auto",
    pfr: 0,
    recovery: 60,
    reload: 6,
    rmax: 6,
    rmin: null,
    rounds: 18,
    score: 100,
    shots: 6,
    skin: "McHeavy",
    taunt: 0,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 5,
    ammo: 44,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 5,
    habilities: [
      ["HEAVY", 4],
      ["READY", 8],
    ],
    handling: 100,
    hitmin: 6,
    hit: 70,
    id: ["WEAPON_HEAVY_MACHINE_GUN", 22],
    name: "Heavy Machine Gun",
    pfr: 1,
    recovery: 150,
    reload: 6,
    rmax: 6,
    rmin: null,
    rounds: 22,
    score: 100,
    shots: 8,
    skin: "McHeavy",
    taunt: 0,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 5,
    ammo: 40,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 6,
    dmin: 3,
    fr: 5,
    habilities: [["HEAVY", 4]],
    handling: 120,
    hitmin: 6,
    hit: 70,
    id: ["WEAPON_GATLING_GUN", 23],
    name: "Gatling Gun",
    pfr: 2,
    recovery: 110,
    reload: 8,
    rmax: 7,
    rmin: null,
    rounds: 20,
    score: 100,
    shots: 5,
    skin: "McHeavy",
    taunt: 0,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 5,
    ammo: 44,
    crit: 5,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 5,
    habilities: [["HEAVY", 4]],
    handling: 100,
    hitmin: 6,
    hit: 100,
    id: ["WEAPON_MINIGUN", 24],
    name: "Minigun",
    pfr: 3,
    recovery: 80,
    reload: 6,
    rmax: 6,
    rmin: null,
    rounds: 22,
    score: 100,
    shots: 6,
    skin: "McHeavy",
    taunt: 0,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 12,
    ammo: 2,
    crit: 15,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 4,
    fr: 3,
    habilities: [
      ["ACCURATE", 3],
      ["SECURE", 9],
    ],
    handling: 120,
    hitmin: 75,
    hit: 150,
    id: ["WEAPON_SNIPER", 25],
    name: "Sniper",
    pfr: 0,
    recovery: 100,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McSniper",
    taunt: 0,
    type: ["WT_SNIPER", 6],
  },
  {
    aim: 10,
    ammo: 6,
    crit: 25,
    damageType: ["BULLET", 0],
    dmax: 7,
    dmin: 6,
    fr: 3,
    habilities: [
      ["HEAVY", 4],
      ["ACCURATE", 3],
      ["SECURE", 9],
    ],
    handling: 180,
    hitmin: 75,
    hit: 150,
    id: ["WEAPON_MOS_TECK", 26],
    name: "MOS-TECK",
    pfr: 1,
    recovery: 120,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 3,
    score: 100,
    shots: 1,
    skin: "McSniper",
    taunt: 0,
    type: ["WT_SNIPER", 6],
  },
  {
    aim: 6,
    ammo: 4,
    crit: 20,
    damageType: ["BULLET", 0],
    dmax: 5,
    dmin: 5,
    fr: 3,
    habilities: [
      ["HEAVY", 4],
      ["ACCURATE", 3],
      ["SECURE", 9],
    ],
    handling: 80,
    hitmin: 75,
    hit: 120,
    id: ["WEAPON_LIZARO_JUNGLE", 27],
    name: "Lizaro Jungle",
    pfr: 2,
    recovery: 100,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 2,
    score: 100,
    shots: 1,
    skin: "McSniper",
    taunt: 0,
    type: ["WT_SNIPER", 6],
  },
  {
    aim: 8,
    ammo: 4,
    crit: 50,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 3,
    fr: 3,
    habilities: [
      ["HEAVY", 4],
      ["ACCURATE", 3],
      ["SECURE", 9],
    ],
    handling: 120,
    hitmin: 75,
    hit: 300,
    id: ["WEAPON_SPARROW_HAWK", 28],
    name: "Sparrowhawk",
    pfr: 3,
    recovery: 100,
    reload: 80,
    rmax: null,
    rmin: 3,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McSniper",
    taunt: 0,
    type: ["WT_SNIPER", 6],
  },
  {
    aim: 10,
    ammo: 12,
    crit: 25,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 3,
    fr: 3,
    habilities: [
      ["HEAVY", 4],
      ["ACCURATE", 3],
      ["SECURE", 9],
    ],
    handling: 80,
    hitmin: 30,
    hit: 150,
    id: ["WEAPON_CK_MAGELLAN", 29],
    name: "CK-Magellan",
    pfr: 4,
    recovery: 65,
    reload: 40,
    rmax: null,
    rmin: 2,
    rounds: 6,
    score: 100,
    shots: 1,
    skin: "McSniper",
    taunt: 0,
    type: ["WT_SNIPER", 6],
  },
  {
    aim: 5,
    ammo: 0,
    crit: 10,
    damageType: ["BLADE", 3],
    dmax: 4,
    dmin: 2,
    fr: 6,
    habilities: [],
    handling: 10,
    hitmin: 0,
    hit: 120,
    id: ["WEAPON_KNIFE", 30],
    name: "Knife",
    pfr: 0,
    recovery: 40,
    reload: 0,
    rmax: 1,
    rmin: null,
    rounds: 0,
    score: 100,
    shots: 1,
    skin: "McSoldat",
    taunt: 4,
    type: ["WT_MELEE", 5],
  },
  {
    aim: 10,
    ammo: 2,
    crit: 10,
    damageType: ["EXPLOSION", 1],
    dmax: 16,
    dmin: 8,
    fr: 7,
    habilities: [],
    handling: 60,
    hitmin: 0,
    hit: 100,
    id: ["WEAPON_CANNON", 31],
    name: "Cannon",
    pfr: 1,
    recovery: 100,
    reload: 100,
    rmax: null,
    rmin: null,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McTankCanon",
    taunt: -1,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 5,
    ammo: 46,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 7,
    habilities: [],
    handling: 60,
    hitmin: 5,
    hit: 80,
    id: ["WEAPON_FIXED_MACHINE_GUN", 32],
    name: "Fixed Machine Gun",
    pfr: 0,
    recovery: 100,
    reload: 6,
    rmax: 6,
    rmin: null,
    rounds: 23,
    score: 100,
    shots: 6,
    skin: "McTankGun",
    taunt: -1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 10,
    ammo: 2,
    crit: 10,
    damageType: ["EXPLOSION", 1],
    dmax: 32,
    dmin: 16,
    fr: 7,
    habilities: [],
    handling: 60,
    hitmin: 0,
    hit: 100,
    id: ["WEAPON_CANNON_V2", 33],
    name: "Cannon v.2",
    pfr: 1,
    recovery: 100,
    reload: 100,
    rmax: null,
    rmin: null,
    rounds: 1,
    score: 100,
    shots: 1,
    skin: "McBigTank",
    taunt: -1,
    type: ["WT_LAUNCHER", 3],
  },
  {
    aim: 5,
    ammo: 46,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 4,
    dmin: 3,
    fr: 7,
    habilities: [],
    handling: 60,
    hitmin: 5,
    hit: 80,
    id: ["WEAPON_FIXED_MACHINE_GUN_V2", 34],
    name: "Fixed Machine Gun v2",
    pfr: 0,
    recovery: 100,
    reload: 6,
    rmax: 6,
    rmin: null,
    rounds: 23,
    score: 100,
    shots: 6,
    skin: "McBigTankGun",
    taunt: -1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 5,
    ammo: 46,
    crit: 10,
    damageType: ["BULLET", 0],
    dmax: 3,
    dmin: 2,
    fr: 7,
    habilities: [["DOUBLE", 10]],
    handling: 60,
    hitmin: 5,
    hit: 80,
    id: ["WEAPON_APPACHE_CANNON", 35],
    name: "Apache Cannon",
    pfr: 0,
    recovery: 100,
    reload: 6,
    rmax: 5,
    rmin: null,
    rounds: 23,
    score: 100,
    shots: 4,
    skin: "McHelico",
    taunt: -1,
    type: ["WT_AUTO", 2],
  },
  {
    aim: 2,
    ammo: 0,
    crit: 2,
    damageType: ["MELEE", 6],
    dmax: 3,
    dmin: 1,
    fr: 6,
    habilities: [],
    handling: 5,
    hitmin: 0,
    hit: 90,
    id: ["WEAPON_RAT_TOOTH", 36],
    name: "Rat Tooth",
    pfr: 1,
    recovery: 60,
    reload: 0,
    rmax: 1,
    rmin: null,
    rounds: 0,
    score: 0,
    shots: 1,
    skin: "McRat",
    taunt: -1,
    type: ["WT_MELEE", 5],
  },
  {
    aim: 2,
    ammo: 0,
    crit: 1,
    damageType: ["MELEE", 6],
    dmax: 2,
    dmin: 1,
    fr: 6,
    habilities: [],
    handling: 5,
    hitmin: 0,
    hit: 75,
    id: ["WEAPON_CLOWN", 37],
    name: "Clown",
    pfr: 1,
    recovery: 60,
    reload: 0,
    rmax: 1,
    rmin: null,
    rounds: 0,
    score: 0,
    shots: 1,
    skin: "McClown",
    taunt: -1,
    type: ["WT_MELEE", 5],
  },
];

export type WeaponContent = (typeof Weapons)[number];
