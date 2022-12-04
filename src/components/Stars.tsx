const stars = (length = 0) => Array.from({ length }, () => "⭐");

export const Stars = ({ nr }: { nr?: number }): JSX.Element => (
  <span role="img" title={`${nr} stars`}>
    {stars(nr)}
  </span>
);
