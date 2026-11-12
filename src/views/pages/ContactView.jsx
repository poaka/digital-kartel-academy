// View (Page) : Page Contact & Inscription (/contact)
// Optimisée SEO & Contenu (seo-contenu)

import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import {
  PAGE_SEO_CONFIG,
  CAMPUSES_AND_CONTACTS,
  TRAINING_MODALITIES,
} from '../../models/academyModel';
import { useSeoController } from '../../controllers/useSeoController';
import ContactForm from '../components/ContactForm';

export default function ContactView() {
  useSeoController(PAGE_SEO_CONFIG.contact);

  return (
    <main className="bg-[#F8FAFC] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* EN-TÊTE — Unique H1 de la page */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-block bg-[#1273C4]/10 text-[#1273C4] border border-[#1273C4]/20 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Inscriptions Ouvertes
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2E5C] tracking-tight leading-tight">
            Inscrivez-vous ou contactez nos centres
          </h1>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Remplissez le formulaire ci-dessous pour réserver votre place ou contactez-nous
            directement par téléphone, WhatsApp, Facebook ou Instagram.
          </p>
        </div>

        {/* GRILLE FORMULAIRE (H2) + COORDONNÉES (H2 -> H3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm headingLevel="h2" />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-5">
              <h2 className="text-lg font-bold text-[#0A2E5C]">
                Assistance Téléphonique &amp; WhatsApp
              </h2>

              <div className="space-y-3">
                {CAMPUSES_AND_CONTACTS.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:+${phone.raw}`}
                    className="ui-transition flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#0A2E5C]/5 border border-[#E2E8F0]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0A2E5C] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#475569]">{phone.label}</div>
                      <div className="text-base font-extrabold text-[#0A2E5C]">{phone.display}</div>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={CAMPUSES_AND_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-transition flex items-center justify-center gap-2 w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold shadow-xs"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Écrire directement sur WhatsApp</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#0A2E5C]">Nos Réseaux Sociaux Officiels</h2>
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

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-5">
              <h2 className="text-lg font-bold text-[#0A2E5C]">Adresses de nos Centres</h2>

              <div className="space-y-4">
                {CAMPUSES_AND_CONTACTS.mainCampuses.map((campus) => (
                  <div
                    key={campus.city}
                    className="flex items-start gap-3.5 pb-4 border-b border-[#F1F5F9] last:border-b-0 last:pb-0"
                  >
                    <MapPin
                      className="w-5 h-5 text-[#1273C4] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">{campus.city}</h3>
                      <p className="text-sm text-[#475569] mt-0.5">{campus.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
                <div className="font-bold text-[#0F172A]">Autres villes couvertes :</div>
                <p>{CAMPUSES_AND_CONTACTS.otherCities.join(' • ')}</p>
              </div>
            </div>

            <div className="bg-[#0A2E5C] text-white rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1273C4] bg-white/10 inline-flex px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Rappel des modalités</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                Tarif : <strong className="text-white">{TRAINING_MODALITIES.tuitionFee}</strong> (+{' '}
                <strong className="text-white">{TRAINING_MODALITIES.registrationFee}</strong>{' '}
                d’inscription). {TRAINING_MODALITIES.paymentInstallments} —{' '}
                {TRAINING_MODALITIES.paymentNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
