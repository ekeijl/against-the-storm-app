import classnames from "classnames";
import "./GoodsImage.css";

type GoodsImageProps = {
  id: string;
  type?: "square" | "round";
  size?: "small" | "medium";
  nr?: number;
  [_: string]: any;
};

export const GoodsImage = ({
  id,
  type = "round",
  size = "medium",
  nr,
  ...props
}: GoodsImageProps) => (
  <div className="goods-img-container">
    <img
      src={`img/goods/${id}.webp`}
      alt={id}
      title={id}
      className={classnames("goods-img", type, size)}
      {...props}
    />

    {nr ? <span className="goods-image-nr">{nr}</span> : null}
  </div>
);
