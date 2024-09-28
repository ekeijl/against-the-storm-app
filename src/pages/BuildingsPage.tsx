import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";
import {
  buildings as b_1_3,
  ingredientsPerBuilding as i_1_3,
} from "../data/buildings";
import {
  buildings as b_1_4,
  ingredientsPerBuilding as i_1_4,
} from "../data/buildings_1_4";
import { Filters, FiltersType } from "./BuildingsPage/Filters";
import { BuildingsList } from "./BuildingsPage/BuildingsList";
import { GoodsSummary } from "./BuildingsPage/GoodsSummary";
import { Page } from "../components/Page";

const BuildingsPage = ({ version }: { version: string }): JSX.Element => {
  const form = useForm<Partial<FiltersType>>({
    defaultValues: {
      goodsType: "produces",
    },
  });

  const buildings = version === "1.4" ? b_1_4 : b_1_3;
  const ingredientsPerBuilding = version === "1.4" ? i_1_4 : i_1_3;

  const { watch, setFocus } = form;

  const filters = watch();

  const [selectedIds, setSelectedIds] = useLocalStorage<string[]>(
    "selectedBuildingIds",
    []
  );

  const filteredBuildings = useMemo(() => {
    const filterEntries = Object.entries(filters);
    if (filterEntries.length === 0) return buildings;

    const { name, stars, goods, goodsType, specialization, onlySelected } =
      filters;

    return buildings.filter(
      ({ id, recipes = [], specialization: buildingSpec }) =>
        (!name || id.includes(name)) &&
        (!stars || recipes.some((r) => r.stars === stars)) &&
        (!specialization || buildingSpec.includes(specialization)) &&
        (!goods?.length ||
          (goodsType === "produces" &&
            recipes.some((r) => goods.includes(r.product.id))) ||
          (goodsType === "ingredient" &&
            goods.every((g) => ingredientsPerBuilding.get(id)?.has(g)))) &&
        (!onlySelected || selectedIds.includes(id))
    );
  }, [filters, selectedIds]);

  const selectProduct = (id: string) => {
    form.reset(
      {
        goodsType: "produces",
        goods: [id],
      },
      { keepDefaultValues: true }
    );
  };

  useEffect(() => {
    setFocus("name", { shouldSelect: true });
  }, [setFocus]);

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

export default BuildingsPage;
