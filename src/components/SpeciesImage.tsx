import { SpeciesName } from "../types/Species";
import classnames from "classnames";
import "./SpeciesImage.css";

type SpeciesImageProps = {
  species: SpeciesName;
  color?: string;
  title?: string;
  size?: "small" | "medium" | "large";
};

export const SpeciesImage = ({
  species,
  color = "transparent",
  title = species,
  size = "medium",
}: SpeciesImageProps) => (
  <img
    src={`img/species/${species}.png`}
    alt={title}
    title={title}
    style={{ border: `2px solid ${color}` }}
    className={classnames("species-image", `species-image-${size}`)}
  />
);
