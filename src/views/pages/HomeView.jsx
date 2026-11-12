// View (Page) : Page d'Accueil (/)
// Optimisée SEO & Contenu (seo-contenu) :
// - Title et Meta Description uniques orientés bénéfices client
// - Structure Hn stricte (1 seul H1 -> H2 de section -> H3 de sous-blocs)
// - Attributs alt descriptifs et lazy loading sous la ligne de flottaison
// - Contenus strictement issus de brief.md

import {
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Calendar,
  ArrowRight,
  CreditCard,
  ExternalLink,
} from 'lucide-react';
import {
  ACADEMY_IDENTITY,
  PAGE_SEO_CONFIG,
  TRAINING_MODULES,
  TRAINING_MODALITIES,
  INCLUDED_BONUSES,
  CAMPUSES_AND_CONTACTS,
} from '../../models/academyModel';
import { useSeoController } from '../../controllers/useSeoController';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import ModuleCard from '../components/ModuleCard';
import BonusCard from '../components/BonusCard';
import VideoShowcase from '../components/VideoShowcase';
import ContactForm from '../components/ContactForm';

export default function HomeView() {
  useSeoController(PAGE_SEO_CONFIG.home);

  return (
    <main>
      {/* =====================================================================
          SECTION 1 : BANDEAU PRINCIPAL (HERO) — Unique H1 de la page
         ===================================================================== */}
      <section id="hero" className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2E5C]/10 border border-[#0A2E5C]/20 text-xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                <span>{ACADEMY_IDENTITY.subtitle}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2E5C] tracking-tight leading-[1.15]">
                Boostez votre carrière digitale grâce à nos formations pratiques en 3 mois
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Développez des compétences directement rentables sur le web avec{' '}
                <strong className="text-[#0F172A]">{TRAINING_MODALITIES.breakdown}</strong> au sein de
                nos centres de <strong className="text-[#0F172A]">Yaoundé</strong> et{' '}
                <strong className="text-[#0F172A]">Douala</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-medium text-[#0F172A]">
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <Clock className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Durée : {TRAINING_MODALITIES.totalDuration} (Stage garanti)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <Calendar className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Rythme : {TRAINING_MODALITIES.pace}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <CreditCard className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Tarif : {TRAINING_MODALITIES.tuitionFee} (1 à 3 tranches)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                  <span>Carte VISA prépayée &amp; T-shirt offerts</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact-accueil"
                  className="ui-transition inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-xl font-semibold text-sm md:text-base bg-[#D9232E] hover:bg-[#B81B24] text-white shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9232E]"
                >
                  <span>Inscrivez-vous dès maintenant</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <CTAButton to="/services" variant="outline">
                  Voir nos services &amp; modalités
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-md space-y-3">
                <img
                  src={ACADEMY_IDENTITY.media.photoStudio2}
                  alt="Apprenante Digital Kartel Academy devant son ordinateur portable — Apprendre, Appliquer, Réussir"
                  width="600"
                  height="720"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                />
                <div className="px-2 py-1 flex items-center justify-between text-xs font-semibold text-[#0A2E5C]">
                  <span>{ACADEMY_IDENTITY.slogans.method}</span>
                  <span className="text-[#1273C4]">
                    Inscription : {TRAINING_MODALITIES.registrationFee}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2 : APERÇU DES SERVICES (H2 -> H3 dans chaque ModuleCard)
         ===================================================================== */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Nos Services & Formations"
            title="Maîtrisez les métiers du digital qui génèrent des résultats"
            subtitle="Chaque module vous apporte un savoir-faire pratique directement applicable pour développer votre activité ou accompagner des entreprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAINING_MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>

          <div className="bg-[#0A2E5C] text-white rounded-2xl p-6 sm:p-8 border border-[#1273C4]/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block bg-[#1273C4] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Fonctionnement &amp; Tarif Officiel
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Cursus complet à {TRAINING_MODALITIES.tuitionFee} (+{' '}
                {TRAINING_MODALITIES.registrationFee} d’inscription)
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {TRAINING_MODALITIES.paymentInstallments} ({TRAINING_MODALITIES.paymentNote}) •{' '}
                {TRAINING_MODALITIES.pace} ({TRAINING_MODALITIES.sessionDuration}).
              </p>
            </div>
            <CTAButton to="/services" variant="outlineLight" className="shrink-0">
              Détail des services et tarifs
            </CTAButton>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3 : VIDÉO DE PRÉSENTATION (H2)
         ===================================================================== */}
      <section id="video-presentation" className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <SectionHeader
                align="left"
                badge="Immersion Vidéo"
                title="Découvrez Digital Kartel Academy en action"
                subtitle="Observez nos apprenants en séance pratique sur ordinateur et voyez comment notre accompagnement vous prépare aux réalités du marché digital."
              />

              <ul className="space-y-3 text-sm text-[#0F172A] pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1273C4] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Pratique directe sur poste informatique en salle équipée</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1273C4] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Remise effective de votre carte VISA prépayée et du t-shirt officiel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1273C4] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Intégration au sein d’une communauté de web entrepreneurs ambitieux</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <VideoShowcase caption="Vidéo officielle Digital Kartel Academy — Se former, Se lancer, Réussir ensemble." />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4 : PREUVES DE CRÉDIBILITÉ (H2 -> H3)
         ===================================================================== */}
      <section id="preuves-credibilite" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            badge="Preuves de Crédibilité & Engagements"
            title="Des avantages garantis pour sécuriser votre réussite"
            subtitle="Votre inscription inclut 4 avantages concrets pour vous permettre de lancer vos projets sans blocage technique ni financier."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED_BONUSES.map((bonus) => (
              <BonusCard key={bonus.id} bonus={bonus} />
            ))}
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <img
                src={ACADEMY_IDENTITY.media.photoStudio1}
                alt="Apprenante de Digital Kartel Academy travaillant sur son projet digital en salle"
                loading="lazy"
                width="540"
                height="420"
                className="w-full h-72 sm:h-80 object-cover rounded-xl border border-[#E2E8F0] shadow-xs"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block bg-[#0A2E5C]/10 text-[#0A2E5C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Réseau &amp; Centres Physiques
              </span>
              <h3 className="text-2xl font-bold text-[#0A2E5C]">
                Une présence de proximité dans 5 villes du Cameroun
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Suivez vos cours près de chez vous dans nos centres principaux de{' '}
                <strong className="text-[#0F172A]">Yaoundé</strong> et{' '}
                <strong className="text-[#0F172A]">Douala</strong>, ainsi qu’à{' '}
                <strong className="text-[#0F172A]">
                  {CAMPUSES_AND_CONTACTS.otherCities.join(', ')}
                </strong>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {CAMPUSES_AND_CONTACTS.mainCampuses.map((campus) => (
                  <div
                    key={campus.city}
                    className="bg-white rounded-xl p-4 border border-[#E2E8F0] space-y-1"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0A2E5C]">
                      <MapPin className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                      <span>Campus de {campus.city}</span>
                    </div>
                    <p className="text-xs text-[#475569] pl-6">{campus.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5 : CONTACT & INSCRIPTION (H2 -> H3)
         ===================================================================== */}
      <section id="contact-accueil" className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Contact & Inscription"
            title="Réservez votre place pour la prochaine session"
            subtitle="Complétez le formulaire ci-dessous ou contactez directement notre équipe par téléphone, WhatsApp, Facebook et Instagram."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm headingLevel="h3" />
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-[#0A2E5C]">
                  Nos Numéros Officiels (Téléphone &amp; WhatsApp)
                </h3>

                <div className="space-y-3">
                  {CAMPUSES_AND_CONTACTS.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:+${phone.raw}`}
                      className="ui-transition flex items-center gap-3.5 p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#0A2E5C]/5 border border-[#E2E8F0]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0A2E5C] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#475569]">{phone.label}</div>
                        <div className="text-base font-extrabold text-[#0A2E5C]">
                          {phone.display}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-[#0A2E5C]">Nos Réseaux Sociaux Officiels</h3>
                <div className="space-y-2.5">
                  {CAMPUSES_AND_CONTACTS.socialNetworks.links.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-transition flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#0A2E5C] hover:text-white border border-[#E2E8F0] group"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#0A2E5C] group-hover:text-white">
                          {social.platform}
                        </div>
                        <div className="text-xs text-[#475569] group-hover:text-slate-200">
                          {social.handle}
                        </div>
                      </div>
                      <ExternalLink
                        className="w-4 h-4 text-[#1273C4] group-hover:text-white shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-[#0A2E5C]">Nos Adresses Présentielles</h3>
                <div className="space-y-4">
                  {CAMPUSES_AND_CONTACTS.mainCampuses.map((campus) => (
                    <div
                      key={campus.city}
                      className="flex items-start gap-3 pb-3 border-b border-[#F1F5F9] last:border-b-0 last:pb-0"
                    >
                      <MapPin
                        className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-sm font-bold text-[#0F172A]">{campus.city}</div>
                        <div className="text-xs sm:text-sm text-[#475569] mt-0.5">
                          {campus.address}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#475569] pt-1">
                  Autres villes :{' '}
                  <strong className="text-[#0F172A]">
                    {CAMPUSES_AND_CONTACTS.otherCities.join(' • ')}
                  </strong>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
