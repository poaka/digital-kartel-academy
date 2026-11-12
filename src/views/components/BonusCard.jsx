// View (Component) : Carte d'un avantage inclus dans la formation

import { Award, CreditCard, Shirt, Briefcase } from 'lucide-react';

const BONUS_ICONS = {
  Award,
  CreditCard,
  Shirt,
  Briefcase,
};

export default function BonusCard({ bonus }) {
  const IconComponent = BONUS_ICONS[bonus.iconName] || Award;

  return (
    <article className="ui-transition bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#1273C4]/50 shadow-xs flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#D9232E]/10 text-[#D9232E] flex items-center justify-center">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="inline-block bg-[#D9232E]/10 text-[#D9232E] text-xs font-bold px-3 py-1 rounded-full">
            Inclus
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] leading-snug">{bonus.title}</h3>

        <p className="text-sm text-[#475569] leading-relaxed">{bonus.description}</p>
      </div>

      <div className="pt-4 mt-5 border-t border-[#E2E8F0] text-xs font-semibold text-[#0A2E5C]">
        Garanti pour chaque apprenant inscrit
      </div>
    </article>
  );
}

