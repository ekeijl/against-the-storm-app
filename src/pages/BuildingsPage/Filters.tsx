import { useCallback } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { StarSelector } from "../../components/StarSelector";
import { GoodsSelector } from "../../components/GoodsSelector";
import { Select } from "../../components/Select";
import { Toggle } from "../../components/Toggle";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Specialization } from "../../components/Specialization";
import { useVersionContext } from "../../VersionContext";
import { useSpecies } from "../../hooks/useSpecies";
import type { Option, OptionContext } from "../../types/Option";

import "./Filters.css";
import type { Species, SpeciesName } from "../../types/Species";
import { SpeciesImage } from "../../components/SpeciesImage";

export type FiltersType = {
  name: string;
  stars: number;
  goodsType: "produces" | "ingredient";
  goods: string[];
  specialization: string;
  species: string[];
  onlySelected: boolean;
};

type FiltersProps = {
  form: UseFormReturn<Partial<FiltersType>>;
  selectedIds: string[];
};

const renderSpecOption = (value: string, label: string) => {
  return value ? (
    <div className="specialization-option">
      <Specialization>{value}</Specialization> {label}
    </div>
  ) : (
    ""
  );
};

const specOptions_1_3 = [
  "alchemy",
  "brewing",
  "cloth",
  "engineering",
  "farming",
  "meat",
  "rainwater",
  "scouting",
  "warmth",
  "woodworking",
].map((o) => ({ label: o, value: o }));

const specOptions_1_5 = [
  "alchemy",
  "blightrot",
  "brewing",
  "cloth",
  "engineering",
  "farming",
  "masonry",
  "meat",
  "rainwater",
  "scouting",
  "warmth",
  "woodworking",
].map((o) => ({ label: o, value: o }));

export const Filters = ({ form, selectedIds }: FiltersProps) => {
  const version = useVersionContext();
  const { register, control, reset, setFocus } = form;

  const species = useSpecies();
  const allSpecies = Object.values(species);

  const focusSelect = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      setFocus("name", { shouldSelect: true });
    },
    [setFocus]
  );

  useKeyPress(focusSelect, ["Slash"]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="filters">
      <div className="filter-section">
        <input
          className="filter-text"
          type="text"
          placeholder="Building"
          {...register("name")}
        />
      </div>

      <div className="filter-section filter-goods">
        <span className="filter-goods-type">
          <label>
            <input type="radio" value="produces" {...register("goodsType")} />{" "}
            <span>Produces</span>
          </label>
          <label>
            <input type="radio" value="ingredient" {...register("goodsType")} />{" "}
            <span>Uses</span>
          </label>
        </span>

        <Controller
          control={control}
          name="goods"
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <GoodsSelector isMulti onChange={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name="specialization"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              className="specialization-selector"
              placeholder="Specialization"
              isClearable
              onChange={onChange}
              value={value}
              options={version === "1.8" ? specOptions_1_5 : specOptions_1_3}
              formatOptionLabel={({ value, label }: Option) =>
                renderSpecOption(value, label)
              }
            />
          )}
        />
      </div>
      <div className="filter-section">
        <Controller
          control={control}
          name="species"
          render={({ field }) => (
            <Select
              className="species-selector"
              placeholder="Species"
              {...field}
              isMulti
              isClearable={false}
              options={allSpecies}
              getOptionLabel={(species: Species) => species.id}
              getOptionValue={(species: Species) => species.id}
              formatOptionLabel={(
                data: Species,
                { context }: { context: OptionContext }
              ) => {
                return (
                  <div className="specialization-option">
                    <SpeciesImage
                      species={data.id}
                      size="small"
                      color={data.color}
                    />
                    {context === "menu" ? data.id : ""}
                  </div>
                );
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="stars"
          defaultValue={undefined}
          render={({ field: { onChange, value } }) => (
            <StarSelector name="stars" onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="filter-section">
        <Controller
          control={control}
          name="onlySelected"
          render={({ field: { value, onChange } }) => (
            <label className="filter-selected">
              <Toggle
                type="checkbox"
                icons={false}
                checked={value}
                onChange={onChange}
              />
              <span>
                Only selected{" "}
                {selectedIds.length > 0 ? `(${selectedIds.length})` : ""}
              </span>
            </label>
          )}
        />

        <button onClick={() => reset()}>Reset</button>
      </div>
    </form>
  );
};
