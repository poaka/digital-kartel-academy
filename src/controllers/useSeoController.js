// Controller : Gestion dynamique des balises SEO (<title>, <meta name="description"> et JSON-LD LocalBusiness)

import { useEffect } from 'react';
import { LOCAL_BUSINESS_SCHEMA } from '../models/academyModel';

export function useSeoController({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Assurer la présence du balisage Schema.org LocalBusiness
    let schemaScript = document.querySelector('script[data-schema="local-business"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'local-business');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
  }, [title, description]);
}
