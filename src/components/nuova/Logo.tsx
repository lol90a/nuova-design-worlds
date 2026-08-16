type Props = {
  className?: string;
  animated?: boolean;
  withWordmark?: boolean;
};

/**
 * NUOVA monogram — a geometric "N" drawn from repeated parallel strokes.
 * When `animated`, each stroke draws itself into position.
 */
export function LogoMark({ className, animated = false }: Props) {
  const verticals = [4, 11, 18];
  const rightVerticals = [42, 49, 56];
  const diagonals = [0, 7, 14];

  return (
    <svg
      viewBox="0 0 60 48"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="nuova-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7CB92" />
          <stop offset="38%" stopColor="#C99A4B" />
          <stop offset="62%" stopColor="#F0DDB0" />
          <stop offset="100%" stopColor="#A97835" />
        </linearGradient>
      </defs>
      <g stroke="url(#nuova-gold)" strokeWidth="2.2" strokeLinecap="square" pathLength={1}>
        {verticals.map((x, i) => (
          <line
            key={`l${x}`}
            x1={x}
            y1="2"
            x2={x}
            y2="46"
            className={animated ? "nuova-stroke" : undefined}
            style={animated ? { animationDelay: `${i * 0.07}s` } : undefined}
          />
        ))}
        {diagonals.map((d, i) => (
          <line
            key={`d${d}`}
            x1={4 + d}
            y1="2"
            x2={42 + d}
            y2="46"
            className={animated ? "nuova-stroke" : undefined}
            style={animated ? { animationDelay: `${0.28 + i * 0.09}s` } : undefined}
          />
        ))}
        {rightVerticals.map((x, i) => (
          <line
            key={`r${x}`}
            x1={x}
            y1="2"
            x2={x}
            y2="46"
            className={animated ? "nuova-stroke" : undefined}
            style={animated ? { animationDelay: `${0.62 + i * 0.07}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ className = "", withWordmark = true, animated }: Props) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-6 w-[30px]" animated={animated ?? false} />
      {withWordmark ? (
        <span
          className="text-[0.95rem] font-medium uppercase"
          style={{ letterSpacing: "0.42em", fontFamily: "var(--font-display)" }}
        >
          Nuova
        </span>
      ) : null}
    </span>
  );
}
