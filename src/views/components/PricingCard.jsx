// View (Component) : Carte tarifaire officielle et modalités de paiement (issue de brief.md)

import { CheckCircle2, Clock, Calendar, MapPin, CreditCard } from 'lucide-react';
import { TRAINING_MODALITIES, CAMPUSES_AND_CONTACTS } from '../../models/academyModel';
import CTAButton from './CTAButton';

export default function PricingCard({ showCTA = true }) {
  return (
    <div className="bg-[#0A2E5C] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#1273C4]/40 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Détails pédagogiques & modalités */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-block bg-[#1273C4] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Fonctionnement &amp; Modalités Officielles
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Un cursus complet de {TRAINING_MODALITIES.totalDuration} orienté pratique
            </h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              {TRAINING_MODALITIES.breakdown}. Vous progressez avec des formateurs praticiens sur des projets réels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Durée du parcours
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  2 mois cours + 1 mois stage
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Rythme hebdomadaire
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {TRAINING_MODALITIES.pace} ({TRAINING_MODALITIES.sessionDuration})
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Centres présentiels
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Yaoundé (Total Ngousso) &amp; Douala (Tradex Borne 10)
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Souplesse de règlement
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {TRAINING_MODALITIES.paymentInstallments}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc Tarif */}
        <div className="lg:col-span-5 bg-white text-[#0F172A] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="border-b border-[#E2E8F0] pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1273C4]">
              Tarif Officiel Tout Inclus
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2E5C]">
                {TRAINING_MODALITIES.tuitionFee}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#475569] mt-1">
              Frais d’inscription :{' '}
              <span className="text-[#0F172A]">{TRAINING_MODALITIES.registrationFee}</span>
            </p>
          </div>

          <ul className="space-y-3 text-sm text-[#0F172A]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>{TRAINING_MODALITIES.paymentInstallments}</strong> ({TRAINING_MODALITIES.paymentNote})
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Accès aux 7 modules pratiques du cursus</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Carte VISA prépayée + T-shirt officiel offerts</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
              <span>1 mois de stage garanti + Attestation de fin de formation</span>
            </li>
          </ul>

          {showCTA && (
            <div className="pt-2 space-y-3">
              <CTAButton to="/contact" variant="primary" className="w-full">
                S’inscrire à la prochaine session
              </CTAButton>
              <p className="text-center text-xs text-[#475569]">
                Renseignements directs :{' '}
                <a
                  href={`tel:+${CAMPUSES_AND_CONTACTS.phones[0].raw}`}
                  className="font-bold text-[#0A2E5C] hover:underline"
                >
                  {CAMPUSES_AND_CONTACTS.phones[0].display}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

