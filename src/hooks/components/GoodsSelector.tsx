import Select from "react-select";
import { grouped } from "../data/goods";
import { GoodsImage } from "./GoodsImage";
import "./GoodsSelector.css";

const renderLabel = (value, label) => {
	return (
		<div className="goods-option">
			<GoodsImage id={value} size="small" />
			{label ? <span>{label}</span> : null}
		</div>
	);
};

const toOption = (v: string) => ({ label: v, value: v });

export const GoodsSelector = ({ onChange, value, isMulti, ...props }) => {
	return (
		<Select
			className="goods-selector"
			isMulti={isMulti}
			options={grouped}
			formatOptionLabel={({ value, label }, { context }) =>
				renderLabel(
					value,
					!isMulti || context === "menu" ? label : null
				)
			}
			onChange={(options) =>
				onChange(
					isMulti ? options.map(({ value }) => value) : options.value
				)
			}
			value={isMulti ? value.map(toOption) : toOption(value)}
			placeholder="Select goods..."
			{...props}
		/>
	);
};
