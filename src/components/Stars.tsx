const stars = (length: number = 0) => Array.from({ length }, (_) => "⭐");

export const Stars = ({ nr }: { nr?: number }) => (
  <span role="img" title={`${nr} stars`}>
    {stars(nr)}
  </span>
);
