const stars = (length: number) => Array.from({ length }, (_) => "⭐");

export const Stars = ({ nr }: { nr: number }) => (
    <span role="img" title={`${nr} stars`}>
        {stars(nr)}
    </span>
);
