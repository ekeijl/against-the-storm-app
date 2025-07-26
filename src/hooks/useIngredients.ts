import { ingredientsPerBuilding as i_1_3 } from "../data/1.3/buildings";
import { ingredientsPerBuilding as i_1_5 } from "../data/1.5/buildings";
import { useVersionContext } from "../VersionContext";

export function useIngredients() {
  const version = useVersionContext();
  switch (version) {
    case "1.3":
      return i_1_3;
    case "1.5":
    default:
      return i_1_5;
  }
}
