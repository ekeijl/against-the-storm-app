import { useAsync } from "react-async-hook";
import { VersionContextType } from "../VersionContext";

const V = "1.4";
const path = (version: VersionContextType) => (version === "1.4" ? "_1_4" : "");

export const getSpecies = async (version: VersionContextType = V) => {
  return await import(`../data/species${path(version)}.ts`).then((module) => {
    return Object.values(module);
  });
};

export const useSpecies = (version: VersionContextType) => {
  return useAsync(getSpecies, [version]);
};
