import { useCallback } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { StarSelector } from "../../components/StarSelector";
import { GoodsSelector } from "../../components/GoodsSelector";
import { Toggle } from "../../components/Toggle";
import "./Filters.css";
import { useKeyPress } from "../../hooks/useKeyPress";

export type FiltersType = {
  name?: string;
  stars?: number;
  goodsType: "produces" | "ingredient";
  goods?: string[];
  onlySelected?: boolean;
};

type FiltersProps = {
  form: UseFormReturn<FiltersType>;
  selectedIds: string[];
};

export const Filters = ({ form, selectedIds }: FiltersProps): JSX.Element => {
  const { register, control, reset, setFocus } = form;

  const focusSelect = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      setFocus("name");
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
          placeholder="Building name (type /)"
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
            <span>Uses ingredient</span>
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
      </div>
      <div className="filter-section">
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
