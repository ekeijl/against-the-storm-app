import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";

import { Filters, FiltersType } from "./BuildingsPage/Filters";
import { BuildingsList } from "./BuildingsPage/BuildingsList";
import { GoodsSummary } from "./BuildingsPage/GoodsSummary";
import { Page } from "../components/Page";
import { useBuildings } from "../hooks/useBuildings";
import { useIngredients } from "../hooks/useIngredients";

const BuildingsPage = (): JSX.Element => {
  const [species, setSpecies] = useLocalStorage<string[]>("species", []);
  const form = useForm<Partial<FiltersType>>({
    defaultValues: {
      goodsType: "produces",
      species,
    },
  });

  const buildings = useBuildings();
  const ingredientsPerBuilding = useIngredients();

  const { watch, setFocus } = form;

  const filters = watch();

  // Set in local storage, so it updates for the species page as well
  useEffect(() => {
    if (filters.species) {
      setSpecies(filters.species);
    }
  }, [filters.species]);

  const [selectedIds, setSelectedIds] = useLocalStorage<string[]>(
    "selectedBuildingIds",
    []
  );

  const filteredBuildings = useMemo(() => {
    const filterEntries = Object.entries(filters);
    if (filterEntries.length === 0) return buildings;

    const { name, stars, goods, goodsType, specialization, onlySelected } =
      filters;

    let result = buildings;

    // Only show buildings that match the species filter, based on building.speciesRequired
    if (filters.species) {
      const speciesSet = new Set(filters.species);
      result = result.filter(({ speciesRequired }) => {
        return (
          !speciesRequired ||
          !speciesSet.size ||
          speciesSet.has(speciesRequired)
        );
      });
    }
    return result.filter(
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
