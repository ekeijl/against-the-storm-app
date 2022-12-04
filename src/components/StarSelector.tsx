import { Stars } from "./Stars";
import "./StarSelector.css";

const StarButton = ({
  active,
  nr,
  onClick,
}: {
  active: boolean;
  nr: number;
  onClick: (nr: number) => void;
}) => (
  <button
    onClick={() => onClick(nr)}
    className={"star-button " + (active ? "active" : "")}
  >
    <Stars nr={nr} />
  </button>
);

type StarSelectorProps = {
  value?: number;
  name: string;
  onChange: (stars?: number) => void;
};

export const StarSelector = ({
  value = 0,
  name,
  onChange,
}: StarSelectorProps): JSX.Element => {
  return (
    <fieldset name={name} className="stars-selector">
      <StarButton
        nr={1}
        onClick={() => onChange(value === 1 ? undefined : 1)}
        active={value === 1}
      />
      <StarButton
        nr={2}
        onClick={() => onChange(value === 2 ? undefined : 2)}
        active={value === 2}
      />
      <StarButton
        nr={3}
        onClick={() => onChange(value === 3 ? undefined : 3)}
        active={value === 3}
      />
    </fieldset>
  );
};
