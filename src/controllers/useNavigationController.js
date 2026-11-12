// Controller : Gestion de la navigation, du menu mobile (burger) et du retour en haut de page

import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavigationController() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Fermer le menu mobile et remonter en haut lors d'un changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Fermer avec la touche Escape et bloquer le défilement arrière-plan lorsque le menu est ouvert
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return {
    currentPath: location.pathname,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
