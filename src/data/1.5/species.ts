import { Species } from "../../types/Species";

export const human: Species = {
  id: "human",
  specialization: "farming",
  resolve: "brewing",
  needs: ["porridge", "biscuits", "pie", "coats"],
  services: ["leisure", "religion"],
  color: "#ffd800", // yellow
};

export const beaver: Species = {
  id: "beaver",
  specialization: "woodworking",
  resolve: "engineering",
  needs: ["biscuits", "pickledGoods", "coats"],
  services: ["education", "leisure", "luxury"],
  color: "#02a3ce", // blue
};

export const lizard: Species = {
  id: "lizard",
  specialization: "meat",
  resolve: "warmth",
  needs: ["jerky", "skewers", "pie", "pickledGoods", "skewers", "boots"],
  services: ["brawling"],
  color: "#e67700", // orange
};

export const fox: Species = {
  id: "fox",
  specialization: "scouting",
  resolve: "blightrot",
  needs: ["porridge", "skewers", "pickledGoods", "boots"],
  services: ["religion", "treatment"],
  color: "#c92a2a", // red
};

export const harpy: Species = {
  id: "harpy",
  specialization: "alchemy",
  resolve: "cloth",
  needs: ["jerky", "paste", "boots", "coats"],
  services: ["education", "treatment"],
  color: "#c03aec", // purple
};

export const frog: Species = {
  id: "frog",
  specialization: "masonry",
  resolve: "rainwater",
  needs: ["porridge", "paste", "pie", "boots"],
  services: ["brawling", "religion", "luxury"],
  color: "#089b3c", // green
};
