// View (Component) : Barre de navigation responsive avec menu burger mobile accessible

import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import {
  ACADEMY_IDENTITY,
  NAVIGATION_LINKS,
  CAMPUSES_AND_CONTACTS,
} from '../../models/academyModel';
import { useNavigationController } from '../../controllers/useNavigationController';

export default function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigationController();
  const primaryPhone = CAMPUSES_AND_CONTACTS.phones[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo officiel sans déformation */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2E5C] rounded-lg"
        >
          <img
            src={ACADEMY_IDENTITY.media.logo}
            alt="Logo officiel Digital Kartel Academy"
            width="56"
            height="56"
            className="h-12 w-auto object-contain shrink-0 rounded-md"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg text-[#0A2E5C] tracking-tight leading-none">
              DIGITAL KARTEL
            </span>
            <span className="text-xs font-bold text-[#1273C4] tracking-widest mt-0.5">
              ACADEMY
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
          {NAVIGATION_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `ui-transition px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'bg-[#0A2E5C]/10 text-[#0A2E5C]'
                    : 'text-[#475569] hover:text-[#0A2E5C] hover:bg-[#F8FAFC]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+${primaryPhone.raw}`}
            className="ui-transition inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0A2E5C] hover:bg-[#F8FAFC]"
          >
            <Phone className="w-4 h-4 text-[#1273C4]" aria-hidden="true" />
            <span>{primaryPhone.display}</span>
          </a>
          <Link
            to="/contact"
            className="ui-transition inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-[#D9232E] hover:bg-[#B81B24] text-white text-sm font-semibold shadow-xs"
          >
            S’inscrire
          </Link>
        </div>

        {/* Bouton Menu Burger Mobile (Cible tactile >= 48px) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isMobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          className="lg:hidden ui-transition inline-flex items-center justify-center w-12 h-12 rounded-xl text-[#0A2E5C] hover:bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Navigation mobile"
          className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-4 shadow-lg"
        >
          <ul className="space-y-1.5">
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `ui-transition flex items-center min-h-[48px] px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive
                        ? 'bg-[#0A2E5C] text-white'
                        : 'text-[#0F172A] hover:bg-[#F8FAFC]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={`tel:+${primaryPhone.raw}`}
              className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm font-bold text-[#0A2E5C]"
            >
              <Phone className="w-4 h-4 text-[#1273C4]" aria-hidden="true" />
              <span>Appeler le {primaryPhone.display}</span>
            </a>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center min-h-[48px] px-5 py-3.5 rounded-xl bg-[#D9232E] hover:bg-[#B81B24] text-white text-base font-semibold shadow-sm"
            >
              S’inscrire à la formation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
