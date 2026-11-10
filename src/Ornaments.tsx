export function OrthodoxCross({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill={color} aria-hidden>
      <rect x="26" y="0" width="8" height="100" />
      <rect x="16" y="14" width="28" height="6" />
      <rect x="4" y="32" width="52" height="8" />
      <rect x="14" y="70" width="32" height="6" transform="rotate(-20 30 73)" />
    </svg>
  );
}

export function Divider({ light = false }: { light?: boolean }) {
  const c = light ? "#e2c172" : "#7a1414";
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <span className="h-px w-20 sm:w-32" style={{ background: `linear-gradient(90deg, transparent, ${c})` }} />
      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 0 L16 8 L8 16 L0 8Z" fill={c} /></svg>
      <OrthodoxCross className="h-8 w-5" color={c} />
      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 0 L16 8 L8 16 L0 8Z" fill={c} /></svg>
      <span className="h-px w-20 sm:w-32" style={{ background: `linear-gradient(270deg, transparent, ${c})` }} />
    </div>
  );
}

export function SectionTitle({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="text-center mb-10">
      <p className={`font-cinzel tracking-[.35em] text-sm uppercase ${light ? "text-gold-light" : "text-crimson"}`}>{kicker}</p>
      <h2 className={`font-deco text-3xl sm:text-5xl mt-2 ${light ? "gold-text" : "text-ink"}`}>{title}</h2>
      <Divider light={light} />
    </div>
  );
}

export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`absolute w-12 h-12 text-gold ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 58 V2 H58" />
      <path d="M8 58 V8 H58" strokeWidth="1" />
      <circle cx="14" cy="14" r="4" fill="currentColor" />
      <path d="M20 14 Q30 4 40 14 M14 20 Q4 30 14 40" />
    </svg>
  );
}
