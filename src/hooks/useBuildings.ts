import { useVersionContext } from "../VersionContext";

import {
  buildings as b_1_3,
  productsPerBuilding as p_1_3,
} from "../data/1.3/buildings";
import {
  buildings as b_1_5,
  productsPerBuilding as p_1_5,
} from "../data/1.5/buildings";

export function useBuildings() {
  const version = useVersionContext();

  switch (version) {
    case "1.3":
      return b_1_3;
    case "1.5":
    default:
      return b_1_5;
  }
}

export function useProductsPerBuildings() {
  const version = useVersionContext();

  switch (version) {
    case "1.3":
      return p_1_3;
    case "1.5":
    default:
      return p_1_5;
  }
}
