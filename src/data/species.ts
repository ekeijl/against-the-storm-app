import { Species } from "../types/Species";

export const human: Species = {
  id: "human",
  specialization: "farming",
  resolve: "brewing",
  needs: ["porridge", "biscuits", "pie", "coats"],
  services: ["leisure", "religion"],
  color: "#089b3c", // green
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
  needs: ["jerky", "skewers", "pie", "pickledGoods", "skewers"],
  services: ["brawling", "religion"],
  color: "#e67700", // orange
};

export const fox: Species = {
  id: "fox",
  specialization: "scouting",
  resolve: "rainwater",
  needs: ["porridge", "skewers", "pickledGoods"],
  services: ["brawling", "luxury", "treatment"],
  color: "#c92a2a", // red
};

export const harpy: Species = {
  id: "harpy",
  specialization: "alchemy",
  resolve: "cloth",
  needs: ["jerky", "biscuits", "pie", "coats"],
  services: ["education", "treatment"],
  color: "#c03aec", // purple
};
