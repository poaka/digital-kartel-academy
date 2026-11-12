// View (Page) : Page À Propos & Communauté (/a-propos)
// Optimisée SEO & Contenu (seo-contenu)

import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  ACADEMY_IDENTITY,
  PAGE_SEO_CONFIG,
  CAMPUSES_AND_CONTACTS,
  TRAINING_MODALITIES,
} from '../../models/academyModel';
import { useSeoController } from '../../controllers/useSeoController';
import SectionHeader from '../components/SectionHeader';
import VideoShowcase from '../components/VideoShowcase';
import CTAButton from '../components/CTAButton';

export default function AboutView() {
  useSeoController(PAGE_SEO_CONFIG.about);

  const pillars = [
    {
      step: '01',
      title: 'Apprendre',
      description:
        'Acquérir des bases solides et structurées sur les métiers du digital : marketing, community management, e-commerce, création de contenus, montage vidéo, graphisme, entrepreneuriat web et SEO.',
    },
    {
      step: '02',
      title: 'Appliquer',
      description:
        'Passer immédiatement à la pratique sur ordinateur lors de séances de 2h30 à 3h, suivies d’un mois complet de stage garanti et d’accompagnement projet.',
    },
    {
      step: '03',
      title: 'Réussir ensemble',
      description:
        'Intégrer une communauté active de web entrepreneurs et disposer des outils concrets (attestation, carte VISA prépayée, t-shirt officiel) pour développer son activité en ligne.',
    },
  ];

  return (
    <main>
      {/* HERO À PROPOS — Unique H1 de la page */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block bg-[#1273C4]/10 text-[#1273C4] border border-[#1273C4]/20 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                {ACADEMY_IDENTITY.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2E5C] tracking-tight leading-tight">
                Former et accompagner la nouvelle génération de web entrepreneurs
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                {ACADEMY_IDENTITY.description}
              </p>
              <blockquote className="border-l-4 border-[#1273C4] pl-4 py-1 text-base font-semibold text-[#0F172A]">
                « {ACADEMY_IDENTITY.slogans.opportunity} »
              </blockquote>
              <div className="pt-2">
                <CTAButton to="/contact" variant="primary">
                  <span>Rejoindre Digital Kartel Academy</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={ACADEMY_IDENTITY.media.photoStudio2}
                alt="Portrait officiel Digital Kartel Academy — Rêvez, Apprenez, Entreprenez"
                width="600"
                height="720"
                className="w-full max-h-[460px] object-cover rounded-2xl border border-[#E2E8F0] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LES 3 PILIERS : APPRENDRE, APPLIQUER, RÉUSSIR (H2 -> H3) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge={ACADEMY_IDENTITY.slogans.method}
            title="Une pédagogie tournée vers l’action concrète"
            subtitle="Chez Digital Kartel Academy, chaque séance vise la maîtrise de compétences réelles directement mobilisables pour une entreprise ou un projet personnel."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.step}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] space-y-4"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A2E5C] text-white font-extrabold text-sm">
                  {pillar.step}
                </span>
                <h3 className="text-xl font-bold text-[#0A2E5C]">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSION VIDÉO & PHOTOS (H2 -> H3) */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="En Immersion"
            title="La vie au sein de Digital Kartel Academy"
            subtitle="Découvrez en vidéo et en images nos salles de formation équipées et nos apprenants en pleine séance de travail."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <VideoShowcase caption="Présentation officielle des formations et de l'environnement de travail Digital Kartel Academy." />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <img
                src={ACADEMY_IDENTITY.media.photoStudio1}
                alt="Séance de travail pratique sur ordinateur portable à Digital Kartel Academy"
                loading="lazy"
                width="540"
                height="360"
                className="w-full h-64 object-cover rounded-2xl border border-[#E2E8F0] shadow-xs"
              />
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-3">
                <h3 className="text-lg font-bold text-[#0A2E5C]">
                  Pourquoi choisir notre parcours de {TRAINING_MODALITIES.totalDuration} ?
                </h3>
                <ul className="space-y-2 text-sm text-[#0F172A]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>Encadrement de proximité en présentiel</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>Remise d’une carte VISA prépayée et du t-shirt officiel</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>Stage garanti d’un mois pour consolider vos acquis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLANTATION & VILLES DE PRÉSENCE (H2 -> H3) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Nos Implantations"
            title="Où suivre nos formations au Cameroun ?"
            subtitle="Retrouvez nos centres principaux à Yaoundé et Douala ainsi que notre présence dans plusieurs grandes villes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAMPUSES_AND_CONTACTS.mainCampuses.map((campus) => (
              <div
                key={campus.city}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A2E5C] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1273C4]">
                    {campus.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2E5C]">{campus.city}</h3>
                  <p className="text-sm sm:text-base text-[#0F172A] font-medium">
                    {campus.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0A2E5C] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold">
                Également présent à {CAMPUSES_AND_CONTACTS.otherCities.join(', ')}
              </h3>
              <p className="text-sm text-slate-200">
                Contactez notre équipe au {CAMPUSES_AND_CONTACTS.phones[0].display} ou au{' '}
                {CAMPUSES_AND_CONTACTS.phones[1].display} pour connaître le calendrier de votre
                ville.
              </p>
            </div>
            <CTAButton to="/contact" variant="primary" className="shrink-0">
              Prendre contact maintenant
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
