import { useCallback } from "react";
import { Building as BuildingType } from "../../data/buildings";
import { Building } from "../../components/Building";

import "./BuildingsList.css";

type BuildingListProps = {
    buildings: BuildingType[];
    selectedIds: string[];
    stars: number;
    onSelect: (ids: string[]) => void;
};

export const BuildingsList = ({
    buildings,
    selectedIds,
    stars,
    onSelect
}: BuildingListProps) => {
    const handleSelect = useCallback(
        (id) => {
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
                        <Building building={b} stars={stars} />
                    </div>
                ))
            ) : (
                <div>no results</div>
            )}
        </div>
    );
};
