import classnames from "classnames";
import "./GoodsImage.css";
import { t } from "./T";

type GoodsImageProps = {
  id: string;
  type?: "square" | "round";
  size?: "small" | "medium";
  nr?: number;
} & React.HTMLAttributes<HTMLImageElement>;

export const GoodsImage = ({
  id,
  type = "round",
  size = "medium",
  nr,
  ...props
}: GoodsImageProps): JSX.Element => (
  <div className="goods-img-container">
    <img
      src={`img/goods/${id}.webp`}
      alt={t(id)}
      title={t(id)}
      className={classnames("goods-img", type, size)}
      {...props}
    />

    {nr ? <span className="goods-image-nr">{nr}</span> : null}
  </div>
);
