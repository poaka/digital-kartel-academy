// View (Component) : En-tête de section standardisé (Badge + H2 + Sous-titre)

export default function SectionHeader({ badge, title, subtitle, align = 'center', light = false }) {
  const alignmentClasses =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto max-w-3xl';

  return (
    <div className={`flex flex-col gap-3 ${alignmentClasses}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            light
              ? 'bg-[#1273C4]/30 text-white border border-[#1273C4]'
              : 'bg-[#1273C4]/10 text-[#1273C4] border border-[#1273C4]/20'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#0A2E5C]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-slate-200' : 'text-[#475569]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

