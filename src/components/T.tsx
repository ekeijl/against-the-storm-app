type TProps = {
  children: string;
  className?: string;
};

/**
 * Splits a camelCasedWord into separate spaced words.
 * @example t("packOfTradeGoods"); // "Pack Of Trade Goods"
 */
export const t = (key: string): string =>
  key.charAt(0).toUpperCase() +
  key.slice(1).replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2");

export const T = ({ children = "", className = "" }: TProps): JSX.Element => (
  <span className={"t " + className}>{t(children)}</span>
);
