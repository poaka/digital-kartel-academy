// View (Component) : Carte d'un service / module de formation pratique (Titre, Description courte, Bénéfice client)

import {
  Megaphone,
  Users,
  ShoppingCart,
  PenTool,
  Film,
  Palette,
  TrendingUp,
  Search,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP = {
  Megaphone,
  Users,
  ShoppingCart,
  PenTool,
  Film,
  Palette,
  TrendingUp,
  Search,
};

export default function ModuleCard({ module }) {
  const IconComponent = ICON_MAP[module.iconName] || TrendingUp;

  return (
    <article className="ui-transition bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] hover:border-[#1273C4] shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* En-tête de la carte : Icône + Numéro */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#0A2E5C]/5 border border-[#1273C4]/20 flex items-center justify-center text-[#1273C4]">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="text-xs font-extrabold tracking-wider text-[#1273C4] bg-[#1273C4]/10 px-3 py-1 rounded-full">
            SERVICE {module.number}
          </span>
        </div>

        {/* 1. Titre du service (strictement issu de brief.md) */}
        <h3 className="text-lg md:text-xl font-bold text-[#0A2E5C] leading-snug">
          {module.title}
        </h3>

        {/* 2. Description courte */}
        <p className="text-sm md:text-base text-[#475569] leading-relaxed">
          {module.shortDesc}
        </p>
      </div>

      {/* 3. Bénéfice client mis en valeur */}
      <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
        <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-[#E2E8F0] flex items-start gap-2.5">
          <CheckCircle2
            className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold text-[#0A2E5C]">Bénéfice client : </span>
            <span className="text-[#0F172A]">{module.clientBenefit}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
