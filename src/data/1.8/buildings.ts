import { SpeciesName } from "../../types/Species";
import { Specialization } from "../../types/Specialization";
import { Service } from "../../types/Service";
import * as r from "./recipes";

export interface Recipe {
  ingredients: Amount[][];
  product: Amount;
  stars: number;
}

export interface Amount {
  id: string;
  amount: number;
}

export interface Building {
  id: string;
  cost: Amount[];
  recipes?: Recipe[];
  services?: Service[];
  specialization: Specialization[];
  speciesRequired?: SpeciesName;
  workers?: number;
}

export const buildings: Building[] = [
  {
    id: "academy",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    services: ["brawling", "education"],
    speciesRequired: "bat",
    workers: 3,
  },
  {
    id: "advancedRainCollector",
    specialization: ["rainwater"],
    cost: [
      { id: "pipes", amount: 5 },
      { id: "parts", amount: 3 },
      { id: "planks", amount: 5 },
    ],
    recipes: [],
    workers: 3,
  },
  {
    id: "alchemistsHut",
    specialization: ["alchemy", "brewing"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "brick", amount: 2 },
    ],
    recipes: [r.crystal2, r.tea2, r.wine2],
    workers: 2,
  },
  {
    id: "ancientHearth",
    specialization: ["warmth"],
    cost: [],
    recipes: [],
    workers: 1,
  },

  {
    id: "apothecary",
    specialization: ["alchemy", "rainwater"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea2, r.dye2, r.jerky2],
    speciesRequired: "harpy",
    workers: 2,
  },

  {
    id: "artisan",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.barrels2, r.coats2, r.scrolls2],
    speciesRequired: "harpy",
    workers: 3,
  },

  {
    id: "bakery",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.biscuits2, r.pie2, r.pottery2],
    workers: 2,
  },

  {
    id: "bathHouse",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    services: ["treatment"],
    speciesRequired: "harpy",
    workers: 3,
  },

  {
    id: "beanery",
    specialization: ["warmth", "rainwater"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.porridge3, r.pickledGoods1, r.crystal1],
    speciesRequired: "fox",
    workers: 3,
  },

  {
    id: "beaverHouse",
    specialization: [],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [],
    speciesRequired: "beaver",
  },
  {
    id: "blightPost",
    specialization: ["alchemy", "warmth"],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 3 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
    workers: 3,
  },

  {
    id: "brewery",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3, r.porridge2, r.packOfCrops1],
    speciesRequired: "human",
    workers: 2,
  },

  {
    id: "brickOven",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 5 }],
    recipes: [r.biscuits3, r.incense2, r.coal1],
    speciesRequired: "human",
    workers: 3,
  },

  {
    id: "brickyard",
    specialization: ["masonry"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.bricks3, r.pottery2, r.crystal1],
    workers: 2,
  },

  {
    id: "butcher",
    specialization: ["meat"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers2, r.jerky2, r.oil2],
    speciesRequired: "lizard",
    workers: 3,
  },

  {
    id: "cannery",
    specialization: [],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.paste3, r.wine2, r.biscuits1],
    speciesRequired: "frog",
    workers: 2,
  },

  {
    id: "carpenter",
    specialization: ["woodworking"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks2, r.simpleTools2, r.packOfLuxuryGoods2],
    workers: 3,
  },

  {
    id: "cellar",
    specialization: ["brewing"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.wine3, r.pickledGoods2, r.packOfProvisions1],
    speciesRequired: "beaver",
    workers: 2,
  },
  {
    id: "clanHall",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
    services: ["brawling"],
    speciesRequired: "lizard",
    workers: 3,
  },
  {
    id: "clayPit",
    specialization: ["masonry"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.clay, r.reedA2, r.resin2],
    workers: 3,
  },

  {
    id: "clothier",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.coats3, r.packOfBuildingMaterials2, r.waterskins1],
    workers: 2,
  },

  {
    id: "cobbler",
    specialization: ["tailoring"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.boots3, r.packOfBuildingMaterials2, r.dye1],
    workers: 2,
  },

  {
    id: "cookhouse",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.skewers2, r.biscuits2, r.porridge2],
    workers: 4,
  },

  {
    id: "cooperage",
    specialization: ["woodworking"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.barrels3, r.coats2, r.packOfLuxuryGoods1],
    workers: 2,
  },

  {
    id: "crudeWorkstation",
    specialization: [],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.planks0, r.fabric0, r.bricks0, r.pipes0],
    workers: 2,
  },

  {
    id: "distillery",
    specialization: ["brewing", "rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
      { id: "cloth", amount: 2 },
    ],
    recipes: [r.ale2, r.incense2, r.pickledGoods2],
    workers: 2,
  },

  {
    id: "druidsHut",
    specialization: ["alchemy"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.oil3, r.tea2, r.coats1],
    workers: 3,
  },

  {
    id: "feastHall",
    specialization: [],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    workers: 3,
  },
  {
    id: "fieldKitchen",
    specialization: [],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers0, r.paste0, r.biscuits0, r.pickledGoods0],
    workers: 2,
  },

  {
    id: "finesmith",
    specialization: ["alchemy"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 10 },
    ],
    recipes: [r.amber3, r.simpleTools3],
    workers: 3,
  },
  {
    id: "flawlessBrewery",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3f, r.porridge3, r.packOfCrops3f],
    workers: 2,
  },
  {
    id: "flawlessCellar",
    specialization: ["brewing"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.wine3, r.pickledGoods3, r.packOfProvisions3],
    workers: 2,
  },
  {
    id: "flawlessCooperage",
    specialization: ["woodworking"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.barrels3, r.coats3, r.packOfLuxuryGoods3],
    workers: 2,
  },

  {
    id: "flawlessDruidsHut",
    specialization: ["alchemy"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.oil3, r.tea3, r.coats3],
    workers: 3,
  },
  {
    id: "flawlessLeatherworker",
    specialization: ["tailoring", "meat"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.waterskins3, r.boots3, r.trainingGear3],
    workers: 2,
  },
  {
    id: "flawlessRainMill",
    specialization: ["engineering", "farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls3, r.paste3],
    workers: 3,
  },
  {
    id: "flawlessSmelter",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.copperBars3, r.trainingGear3, r.pie3],
    workers: 3,
  },

  {
    id: "foragersCamp",
    specialization: ["farming"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "forestersHut",
    specialization: ["woodworking"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 4,
  },
  {
    id: "forum",
    specialization: [],
    cost: [
      { id: "fabric", amount: 4 },
      { id: "bricks", amount: 16 },
    ],
    recipes: [],
    services: ["brawling", "luxury"],
    speciesRequired: "frog",
    workers: 3,
  },
  {
    id: "foxHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "crystalizedDew", amount: 2 },
    ],
    recipes: [],
    speciesRequired: "fox",
  },
  {
    id: "frogHouse",
    specialization: [],
    cost: [{ id: "bricks", amount: 6 }],
    recipes: [],
    speciesRequired: "frog",
  },
  {
    id: "furnace",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.pie2, r.skewers2, r.copperBars2],
    workers: 3,
  },
  {
    id: "geyserPump",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 6 },
      { id: "pipes", amount: 4 },
    ],
    workers: 2,
  },
  {
    id: "granary",
    specialization: ["farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.pickledGoods2, r.fabric2, r.packOfCrops2],
    workers: 3,
  },
  {
    id: "greenhouse",
    specialization: ["farming"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.mushrooms2, r.herbs2],
    workers: 3,
  },
  {
    id: "grill",
    specialization: ["meat", "warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers3, r.paste2, r.copperBars1],
    speciesRequired: "bat",
    workers: 3,
  },

  {
    id: "guildHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 40 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
    services: ["luxury", "education"],
    speciesRequired: "beaver",
    workers: 3,
  },
  {
    id: "hallowedHerbGarden",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 3,
  },
  {
    id: "hallowedSmallFarm",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 3,
  },
  {
    id: "harpyHouse",
    specialization: [],
    cost: [{ id: "fabric", amount: 4 }],
    recipes: [],
    speciesRequired: "harpy",
  },
  {
    id: "harvestersCamp",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "herbGarden",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 2,
  },
  {
    id: "herbalistsCamp",
    specialization: ["alchemy"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "humanHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [],
    speciesRequired: "human",
  },
  {
    id: "holyGuildHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 40 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
    services: ["luxury", "education"],
    workers: 3,
  },
  {
    id: "holyMarket",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "fabric", amount: 12 },
    ],
    recipes: [],
    services: ["leisure", "treatment"],
    workers: 2,
  },
  {
    id: "holyTemple",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    services: ["religion", "education"],
    workers: 3,
  },
  {
    id: "homestead",
    specialization: ["farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [],
    workers: 4,
  },
  {
    id: "hydrant",
    specialization: [],
    cost: [
      { id: "planks", amount: 3 },
      { id: "bricks", amount: 1 },
    ],
    recipes: [],
  },
  {
    id: "kiln",
    specialization: ["warmth", "masonry"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.coal3, r.bricks1, r.jerky1],
    workers: 3,
  },
  {
    id: "leatherworker",
    specialization: ["tailoring", "meat"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.waterskins3, r.boots2, r.trainingGear1],
    speciesRequired: "lizard",
    workers: 2,
  },
  {
    id: "lizardHouse",
    specialization: [],
    cost: [
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [],
    speciesRequired: "lizard",
  },
  {
    id: "lumbermill",
    specialization: ["woodworking"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks3, r.scrolls1, r.packOfTradeGoods1],
    workers: 2,
  },
  {
    id: "mainWarehouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
    workers: 3,
  },
  {
    id: "makeshiftPost",
    specialization: [],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.packOfCrops0, r.packOfProvisions0, r.packOfBuildingMaterials0],
    workers: 2,
  },
  {
    id: "manufactory",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.fabric2, r.barrels2, r.dye2],
    workers: 3,
  },
  {
    id: "market",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "fabric", amount: 12 },
    ],
    recipes: [],
    services: ["leisure", "treatment"],
    workers: 2,
  },
  {
    id: "mine",
    specialization: ["engineering", "metallurgy"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 4 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
    workers: 4,
  },
  {
    id: "monastery",
    specialization: ["warmth", "brewing"],
    cost: [{ id: "bricks", amount: 20 }],
    recipes: [],
    services: ["religion", "leisure"],
    speciesRequired: "human",
    workers: 3,
  },
  {
    id: "pantry",
    specialization: ["farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.porridge2, r.pie2, r.packOfLuxuryGoods2],
    speciesRequired: "frog",
    workers: 3,
  },
  {
    id: "plantation",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 2,
  },
  {
    id: "press",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.oil3, r.flour1, r.paste1],
    workers: 3,
  },
  {
    id: "provisioner",
    specialization: [],
    cost: [
      { id: "planks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.flour2, r.barrels2, r.packOfProvisions2],
    workers: 2,
  },
  {
    id: "rainCollector",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "rainMill",
    specialization: ["engineering", "farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls1, r.paste1],
    workers: 3,
  },
  {
    id: "rainpunkFoundry",
    specialization: ["engineering", "warmth"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.parts3, r.wildfireEssence3],
    workers: 3,
  },
  {
    id: "ranch",
    specialization: ["meat"],
    cost: [{ id: "planks", amount: 5 }],
    recipes: [r.meat1, r.leather1, r.eggs1],
    workers: 2,
  },
  {
    id: "scribe",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.scrolls3, r.packOfTradeGoods2, r.ale1],
    speciesRequired: "beaver",
    workers: 3,
  },
  {
    id: "shelter",
    specialization: [],
    cost: [{ id: "wood", amount: 10 }],
    recipes: [],
  },
  {
    id: "smallFarm",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
    workers: 2,
  },
  {
    id: "smallFishingHut",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 3,
  },
  {
    id: "smallForagersCamp",
    specialization: ["farming"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "smallHearth",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 5 },
      { id: "wildfireEssence", amount: 2 },
    ],
    recipes: [],
    workers: 1,
  },
  {
    id: "smallHerbalistsCamp",
    specialization: ["alchemy"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "smallTrappersCamp",
    specialization: ["meat"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "smallWarehouse",
    specialization: [],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "parts", amount: 1 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "smelter",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.copperBars3, r.trainingGear2, r.pie1],
    workers: 3,
  },
  {
    id: "smithy",
    specialization: ["engineering", "metallurgy", "warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.pipes2, r.packOfTradeGoods2],
    workers: 2,
  },
  {
    id: "smokehouse",
    specialization: ["warmth", "meat"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.jerky3, r.pottery1, r.incense1],
    workers: 3,
  },
  {
    id: "stampingMill",
    specialization: ["engineering", "masonry"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.bricks2, r.flour2, r.copperBars2],
    workers: 2,
  },
  {
    id: "stonecuttersCamp",
    specialization: ["masonry"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "supplier",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.flour2, r.planks2, r.waterskins2],
    workers: 2,
  },
  {
    id: "tavern",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    services: ["leisure", "luxury"],
    workers: 3,
  },
  {
    id: "teaDoctor",
    specialization: [],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "cloth", amount: 8 },
    ],
    recipes: [],
    services: ["religion", "treatment"],
    speciesRequired: "fox",
    workers: 3,
  },
  {
    id: "teahouse",
    specialization: ["alchemy", "rainwater"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea3, r.incense2, r.waterskins1],
    speciesRequired: "fox",
    workers: 2,
  },
  {
    id: "temple",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    services: ["religion", "education"],
    workers: 3,
  },
  {
    id: "tinctury",
    specialization: ["brewing", "alchemy"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.dye3, r.ale2, r.wine1],
    workers: 2,
  },
  {
    id: "tinkerer",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.trainingGear2, r.pottery2],
    workers: 3,
  },
  {
    id: "toolshop",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.simpleTools3, r.pipes2, r.boots2],
    workers: 2,
  },
  {
    id: "tradingPost",
    specialization: [],
    cost: [{ id: "wood", amount: 10 }],
    recipes: [],
  },
  {
    id: "trappersCamp",
    specialization: ["meat"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
    workers: 2,
  },
  {
    id: "weaver",
    specialization: ["tailoring"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.fabric3, r.boots1, r.trainingGear1],
    workers: 2,
  },
  {
    id: "woodcuttersCamp",
    specialization: ["woodworking"],
    cost: [{ id: "parts", amount: 2 }],
    recipes: [],
    workers: 3,
  },
  {
    id: "workshop",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.planks2, r.fabric2, r.bricks2, r.pipes0],
    workers: 2,
  },
];

// [id, Set(...ingredients)]]
const ingredientTuples: [string, Set<string>][] = buildings.map((b) => {
  const ingredients =
    b.recipes?.map((r) => {
      return r.ingredients.map((i) => {
        return i.map((p) => p.id);
      });
    }) ?? [];

  return [b.id, new Set<string>(ingredients.flat(2))];
});

// Pre-calculate a mapping of [building id => Set of ingredients (unique)]
// Iterating over every building -> recipes -> ingredients -> id would cause performance issues
export const ingredientsPerBuilding = new Map<string, Set<string>>(
  ingredientTuples
);

const productTuples: [string, Set<string>][] = buildings.map((b) => {
  const products = b.recipes?.map((r) => r.product.id) ?? [];

  return [b.id, new Set<string>(products)];
});

// Map [buildingId => Set of products (unique)]
export const productsPerBuilding = new Map<string, Set<string>>(productTuples);
