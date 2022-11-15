import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { buildings, ingredientsPerBuilding } from "../data/buildings";
import { Filters, FiltersType } from "./BuildingsPage/Filters";
import { BuildingsList } from "./BuildingsPage/BuildingsList";
import { GoodsSummary } from "./BuildingsPage/GoodsSummary";
import { Page } from "../components/Page";

export const BuildingsPage = () => {
    const form = useForm<FiltersType>({
        defaultValues: {
            goodsType: "produces"
        }
    });

    const filters = form.watch();

    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const filteredBuildings = useMemo(() => {
        const filterEntries = Object.entries(filters);
        if (filterEntries.length === 0) return buildings;

        const { name, stars, goods, goodsType, onlySelected } = filters;

        return buildings.filter(
            (b) =>
                (!name || b.id.includes(name)) &&
                (!stars || b.recipes.some((r) => r.stars === stars)) &&
                (!goods?.length ||
                    (goodsType === "produces" &&
                        b.recipes.some((r) => goods.includes(r.product.id))) ||
                    (goodsType === "ingredient" &&
                        goods.every((g) =>
                            ingredientsPerBuilding.get(b.id)?.has(g)
                        ))) &&
                (!onlySelected || selectedIds.includes(b.id))
        );
    }, [filters, selectedIds]);

    const selectProduct = (id: string) => {
        form.reset(
            {
                goodsType: "produces",
                goods: [id]
            },
            { keepDefaultValues: true }
        );
    };

    return (
        <Page>
            <Filters form={form} selectedIds={selectedIds} />

            <BuildingsList
                buildings={filteredBuildings}
                selectedIds={selectedIds}
                onSelect={setSelectedIds}
                stars={filters.stars}
            />

            <GoodsSummary buildingIds={selectedIds} onSelect={selectProduct} />
        </Page>
    );
};
