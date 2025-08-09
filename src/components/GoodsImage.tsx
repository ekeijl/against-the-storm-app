import classnames from "classnames";
import "./GoodsImage.css";
import { t } from "./T";

type GoodsImageProps = {
  id: string;
  type?: "square" | "round";
  size?: "small" | "medium";
  nr?: number;
  highlightState: false | "on" | "off";
} & React.HTMLAttributes<HTMLImageElement>;

export const GoodsImage = ({
  id,
  type = "round",
  size = "medium",
  nr,
  highlightState,
  ...props
}: GoodsImageProps): JSX.Element => (
  <div className="goods-img-container">
    <img
      src={`img/goods/${id}.webp`}
      alt={t(id)}
      title={t(id)}
      className={classnames("goods-img", highlightState, type, size)}
      {...props}
    />

    {nr ? <span className="goods-image-nr">{nr}</span> : null}
  </div>
);
