import { useCallback } from "react";
import type { Building as BuildingType } from "../../data/1.5/buildings";
import { Building } from "../../components/Building";
import type { SpeciesName } from "../../types/Species";
import "./BuildingsList.css";

type BuildingListProps = {
  buildings: BuildingType[];
  selectedIds: string[];
  stars?: number;
  species?: SpeciesName[];
  highlightProduct?: string | false;
  highlightIngredient?: string | false;
  onSelect: (ids: string[]) => void;
};

export const BuildingsList = ({
  buildings,
  selectedIds,
  stars,
  onSelect,
  highlightProduct,
  highlightIngredient,
}: BuildingListProps): JSX.Element => {
  const handleSelect = useCallback(
    (id: string) => {
      let ids;
      if (selectedIds.includes(id)) {
        ids = selectedIds.filter((selectedId) => selectedId !== id);
      } else {
        ids = [...selectedIds, id];
      }

      onSelect(ids);
    },
    [selectedIds, onSelect]
  );

  return (
    <div className="buildings-list">
      {buildings.length ? (
        buildings.map((b) => (
          <div className="buildings-list-item" key={b.id}>
            <input
              className="select-building"
              type="checkbox"
              checked={selectedIds.includes(b.id)}
              onChange={() => handleSelect(b.id)}
            />
            <Building
              building={b}
              stars={stars}
              highlightProduct={highlightProduct}
              highlightIngredient={highlightIngredient}
            />
          </div>
        ))
      ) : (
        <div>no results</div>
      )}
    </div>
  );
};
