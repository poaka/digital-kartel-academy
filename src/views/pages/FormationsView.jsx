// View (Page) : Page Services & Formations (/services et /formations)
// Optimisée SEO & Contenu (seo-contenu) :
// - Title et Meta Description uniques orientés bénéfices client
// - Structure Hn stricte (1 seul H1 -> H2 de section -> H3 par carte de service)
// - 1 carte par service de brief.md (Titre, Description courte, Bénéfice client)

import { Clock, Calendar, MapPin, CreditCard, ArrowRight } from 'lucide-react';
import {
  ACADEMY_IDENTITY,
  PAGE_SEO_CONFIG,
  TRAINING_MODULES,
  TRAINING_MODALITIES,
  INCLUDED_BONUSES,
} from '../../models/academyModel';
import { useSeoController } from '../../controllers/useSeoController';
import SectionHeader from '../components/SectionHeader';
import ModuleCard from '../components/ModuleCard';
import BonusCard from '../components/BonusCard';
import PricingCard from '../components/PricingCard';
import CTAButton from '../components/CTAButton';

export default function FormationsView() {
  useSeoController(PAGE_SEO_CONFIG.services);

  return (
    <main>
      {/* SECTION 1 : HERO PAGE SERVICES — Unique H1 de la page */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2E5C]/10 border border-[#0A2E5C]/20 text-xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                <span>Services &amp; Cursus Pratique • {TRAINING_MODALITIES.totalDuration}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2E5C] tracking-tight leading-[1.15]">
                Formations pratiques aux métiers du digital
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Chaque service de formation de{' '}
                <strong className="text-[#0F172A]">{ACADEMY_IDENTITY.name}</strong> combine{' '}
                <strong className="text-[#0F172A]">{TRAINING_MODALITIES.breakdown}</strong> pour vous
                permettre de maîtriser des compétences concrètes et directement applicables.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-medium text-[#0F172A]">
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <Clock className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Durée : {TRAINING_MODALITIES.totalDuration} (Stage inclus)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <Calendar className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>
                    {TRAINING_MODALITIES.pace} ({TRAINING_MODALITIES.sessionDuration})
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <MapPin className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Yaoundé (Total Ngousso) &amp; Douala (Tradex Borne 10)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <CreditCard className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>
                    {TRAINING_MODALITIES.tuitionFee} ({TRAINING_MODALITIES.paymentInstallments})
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <CTAButton to="/contact" variant="primary">
                  <span>S’inscrire à la formation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </CTAButton>
                <a
                  href="#grille-services"
                  className="ui-transition inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base bg-white hover:bg-[#F8FAFC] text-[#0A2E5C] border-2 border-[#0A2E5C]"
                >
                  Parcourir les services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-md space-y-3">
                <img
                  src={ACADEMY_IDENTITY.media.flyerMain}
                  alt="Affiche officielle présentant les modules, la durée de 3 mois et le tarif de 99 000 F CFA de Digital Kartel Academy"
                  width="540"
                  height="680"
                  className="w-full max-h-[420px] object-contain bg-[#0A2E5C] rounded-xl"
                />
                <div className="px-2 py-1 flex items-center justify-between text-xs font-semibold text-[#0A2E5C]">
                  <span>Programme Officiel DKA</span>
                  <span className="text-[#1273C4]">
                    Inscription : {TRAINING_MODALITIES.registrationFee}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : GRILLE DES SERVICES (H2 -> H3 par carte) */}
      <section id="grille-services" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Catalogue Officiel"
            title="Nos services de formation pratique"
            subtitle="Retrouvez l'intégralité des modules enseignés au sein de Digital Kartel Academy, avec pour chacun sa description et le bénéfice concret pour votre activité ou votre carrière."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAINING_MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : LES 4 AVANTAGES INCLUS (H2 -> H3) */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Avantages & Bonus Inclus"
            title="Ce qui est inclus dans votre inscription"
            subtitle="Chaque apprenant bénéficie de ces 4 avantages garantis pour mettre immédiatement en application ses nouvelles compétences."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED_BONUSES.map((bonus) => (
              <BonusCard key={bonus.id} bonus={bonus} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : TARIFS & MODALITÉS DE PAIEMENT (H2 -> H3) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Tarif & Souplesse de Règlement"
            title="Modalités d’accès et facilités de paiement"
            subtitle="Démarrez votre formation avec des conditions financières transparentes et échelonnées en 1, 2 ou 3 tranches."
          />
          <PricingCard showCTA={true} />
        </div>
      </section>
    </main>
  );
}
