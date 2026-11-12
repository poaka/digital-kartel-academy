// View (Component) : Pied de page complet avec centres, contacts, réseaux sociaux officiels et mentions légales

import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import {
  ACADEMY_IDENTITY,
  CAMPUSES_AND_CONTACTS,
  NAVIGATION_LINKS,
  TRAINING_MODALITIES,
} from '../../models/academyModel';

export default function Footer() {
  return (
    <footer className="bg-[#0A2E5C] text-white border-t border-[#1273C4]/30 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Colonne 1 : Identité & Réseaux sociaux officiels */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ACADEMY_IDENTITY.media.logo}
                alt="Logo Digital Kartel Academy"
                width="52"
                height="52"
                loading="lazy"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <div className="font-heading font-extrabold text-lg text-white leading-none">
                  DIGITAL KARTEL ACADEMY
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {ACADEMY_IDENTITY.subtitle}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              {ACADEMY_IDENTITY.description}
            </p>

            {/* Liens directs vers WhatsApp, Facebook et Instagram */}
            <div className="pt-1 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Nos Réseaux Officiels
              </div>
              <div className="flex flex-wrap gap-2">
                {CAMPUSES_AND_CONTACTS.socialNetworks.links.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-transition inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-[#1273C4] text-white border border-white/15"
                  >
                    <span>{social.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation & Cursus */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation du site
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="ui-transition text-slate-200 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/mentions-legales"
                  className="ui-transition text-slate-200 hover:text-white hover:underline"
                >
                  Mentions légales &amp; Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Nos Centres */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Nos Centres &amp; Contacts Officiels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {CAMPUSES_AND_CONTACTS.mainCampuses.map((campus) => (
                <div
                  key={campus.city}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-white">
                    <MapPin className="w-4 h-4 text-[#1273C4] shrink-0" aria-hidden="true" />
                    <span>{campus.city}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed pl-6">{campus.address}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-slate-300">
              Également présent à :{' '}
              <strong className="text-white">
                {CAMPUSES_AND_CONTACTS.otherCities.join(', ')}
              </strong>
              .
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-sm">
              {CAMPUSES_AND_CONTACTS.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:+${phone.raw}`}
                  className="inline-flex items-center gap-2 font-bold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#1273C4]" aria-hidden="true" />
                  <span>{phone.display}</span>
                </a>
              ))}
              <div className="inline-flex items-center gap-2 text-xs text-slate-200">
                <Clock className="w-4 h-4 text-[#1273C4]" aria-hidden="true" />
                <span>
                  Cursus {TRAINING_MODALITIES.totalDuration} • {TRAINING_MODALITIES.tuitionFee}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Digital Kartel Academy. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-5">
            {CAMPUSES_AND_CONTACTS.socialNetworks.links.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                {social.platform}
              </a>
            ))}
            <Link to="/mentions-legales" className="hover:text-white underline">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
