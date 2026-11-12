// View (Page) : Mentions Légales & Politique de Confidentialité (/mentions-legales)
// Optimisée SEO & Contenu (seo-contenu)

import {
  ACADEMY_IDENTITY,
  PAGE_SEO_CONFIG,
  CAMPUSES_AND_CONTACTS,
} from '../../models/academyModel';
import { useSeoController } from '../../controllers/useSeoController';

export default function LegalView() {
  useSeoController(PAGE_SEO_CONFIG.legal);

  return (
    <main className="bg-white py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#E2E8F0] pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1273C4]">
            Informations Réglementaires
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E5C]">
            Mentions Légales &amp; Politique de Confidentialité
          </h1>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0A2E5C]">1. Éditeur du site</h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Le présent site web est édité par{' '}
            <strong className="text-[#0F172A]">{ACADEMY_IDENTITY.name}</strong> (
            {ACADEMY_IDENTITY.subtitle}), organisme de formation pratique aux métiers du digital.
          </p>
          <ul className="text-sm text-[#0F172A] space-y-1.5 pl-4 list-disc">
            <li>
              <strong>Centre de Yaoundé :</strong> Total Ngousso (En face de la boulangerie MONIKA)
            </li>
            <li>
              <strong>Centre de Douala :</strong> Tradex Borne 10
            </li>
            <li>
              <strong>Téléphones officiels :</strong> {CAMPUSES_AND_CONTACTS.phones[0].display} /{' '}
              {CAMPUSES_AND_CONTACTS.phones[1].display}
            </li>
            <li>
              <strong>Réseaux sociaux officiels :</strong>{' '}
              {CAMPUSES_AND_CONTACTS.socialNetworks.links.map((social, idx) => (
                <span key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1273C4] font-semibold hover:underline"
                  >
                    {social.platform}
                  </a>
                  {idx < CAMPUSES_AND_CONTACTS.socialNetworks.links.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0A2E5C]">2. Propriété intellectuelle</h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            L’ensemble des éléments figurant sur ce site (logo officiel Digital Kartel Academy,
            textes, supports visuels, photographies et vidéos de présentation) est protégé par le
            droit de la propriété intellectuelle. Toute reproduction, modification ou utilisation
            sans autorisation préalable est strictement interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0A2E5C]">
            3. Protection des données personnelles (Formulaire de contact)
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Les informations recueillies via le formulaire d’inscription et de contact (nom complet,
            numéro de téléphone, ville, formation souhaitée et message) sont exclusivement destinées
            à l’équipe pédagogique de <strong>Digital Kartel Academy</strong> afin de traiter votre
            demande de renseignements ou d’inscription. Aucune donnée personnelle n’est cédée ni
            vendue à des tiers.
          </p>
        </section>
      </div>
    </main>
  );
}
