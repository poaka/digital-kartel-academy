// Model : Source unique de vérité issue strictement de brief.md et des supports officiels (assets/)

import logoImage from '@assets/logo/logo.jpeg';
import flyerMain from '@assets/flyer/falayer 1.jpeg';
import flyerBlue from '@assets/flyer/flayer bleu.jpeg';
import photoStudio1 from '@assets/photos/girl image1.jpeg';
import photoStudio2 from '@assets/photos/girl image2.jpeg';
import promoVideo from '@assets/videos/video1.mp4';

export const ACADEMY_IDENTITY = {
  name: 'Digital Kartel Academy',
  shortName: 'DKA',
  subtitle: 'Communauté de Web Entrepreneurs',
  slogans: {
    primary: 'Boostez votre carrière digitale',
    trilogy: 'Se former • Se lancer • Réussir ensemble',
    method: 'Apprendre • Appliquer • Réussir',
    vision: 'Rêvez, Apprenez, Entreprenez',
    opportunity: "La meilleure opportunité pour réussir, c'est celle que vous créez en ligne.",
  },
  description:
    "Digital Kartel Academy vous forme de manière concrète aux métiers du web en 3 mois (2 mois de théorie et pratique suivis d'un mois de stage garanti) pour transformer vos compétences numériques en opportunités professionnelles.",
  media: {
    logo: logoImage,
    flyerMain,
    flyerBlue,
    photoStudio1,
    photoStudio2,
    promoVideo,
  },
};

// Balises SEO uniques (<title> et <meta name="description">) orientées bénéfices client pour chaque page
export const PAGE_SEO_CONFIG = {
  home: {
    title: 'Digital Kartel Academy | Formation Pratique aux Métiers du Digital (3 Mois)',
    description:
      'Boostez votre carrière digitale en 3 mois avec Digital Kartel Academy à Yaoundé et Douala : 2 mois de pratique + 1 mois de stage garanti, carte VISA prépayée et t-shirt offerts.',
    canonicalPath: '/',
  },
  services: {
    title: 'Nos 8 Modules de Formation Pratique & Tarifs | Digital Kartel Academy',
    description:
      'Formez-vous en Marketing Digital, Community Management, E-Commerce, Création de Contenus, Montage Vidéo, Graphisme, Entrepreneuriat Web et SEO. Cursus de 3 mois à 99 000 F CFA.',
    canonicalPath: '/services',
  },
  about: {
    title: 'À Propos de Digital Kartel Academy | Communauté de Web Entrepreneurs',
    description:
      'Rejoignez la communauté de web entrepreneurs Digital Kartel Academy à Yaoundé, Douala, Ngaoundéré, Maroua et Bafoussam. Notre méthode : Apprendre, Appliquer, Réussir.',
    canonicalPath: '/a-propos',
  },
  contact: {
    title: 'Inscription & Contact Yaoundé et Douala | Digital Kartel Academy',
    description:
      'Inscrivez-vous à la prochaine session de Digital Kartel Academy à Yaoundé (Total Ngousso) ou Douala (Tradex Borne 10). Paiement en 1 à 3 tranches. Tél/WhatsApp : 654 98 90 61.',
    canonicalPath: '/contact',
  },
  legal: {
    title: 'Mentions Légales & Politique de Confidentialité | Digital Kartel Academy',
    description:
      'Consultez les mentions légales, les adresses des centres de Yaoundé et Douala et la politique de confidentialité du formulaire de Digital Kartel Academy.',
    canonicalPath: '/mentions-legales',
  },
};

// Liste stricte des 8 modules figurant dans la section Services de brief.md
export const TRAINING_MODULES = [
  {
    id: 'marketing-digital',
    number: '01',
    title: 'Marketing Digital (et Publicité en ligne)',
    iconName: 'Megaphone',
    shortDesc:
      "Maîtrisez les stratégies d'acquisition digitale et le pilotage de campagnes publicitaires ciblées sur internet.",
    clientBenefit:
      'Attirer régulièrement de nouveaux clients qualifiés et rentabiliser vos budgets publicitaires.',
  },
  {
    id: 'community-management',
    number: '02',
    title: 'Community Management',
    iconName: 'Users',
    shortDesc:
      'Créez, planifiez et animez professionnellement des pages sur les réseaux sociaux pour les entreprises et les marques.',
    clientBenefit:
      'Bâtir une communauté active et fidèle capable de transformer vos abonnés en clients.',
  },
  {
    id: 'e-commerce',
    number: '03',
    title: 'E-Commerce',
    iconName: 'ShoppingCart',
    shortDesc:
      'Mettez en place et gérez une activité de vente en ligne complète, de la présentation des produits au suivi des commandes.',
    clientBenefit:
      'Vendre vos produits ou services sur internet avec un parcours client clair et rassurant.',
  },
  {
    id: 'creation-contenus',
    number: '04',
    title: 'Création de Contenus',
    iconName: 'PenTool',
    shortDesc:
      'Concevez des publications écrites, visuelles et multimédias adaptées aux attentes de votre audience cible.',
    clientBenefit:
      'Capter immédiatement l’attention en ligne et valoriser votre savoir-faire.',
  },
  {
    id: 'montage-video',
    number: '05',
    title: 'Montage Vidéo',
    iconName: 'Film',
    shortDesc:
      'Réalisez et montez sur ordinateur des vidéos promotionnelles dynamiques destinées aux réseaux sociaux et campagnes web.',
    clientBenefit:
      'Produire en toute autonomie des vidéos professionnelles qui renforcent votre visibilité.',
  },
  {
    id: 'graphisme',
    number: '06',
    title: 'Graphisme',
    iconName: 'Palette',
    shortDesc:
      'Réalisez des supports visuels professionnels : affiches promotionnelles, visuels réseaux sociaux et identités graphiques.',
    clientBenefit:
      'Valoriser l’image de votre activité grâce à des supports graphiques soignés prêts pour le web et l’impression.',
  },
  {
    id: 'entrepreneuriat-web',
    number: '07',
    title: 'Entrepreneuriat Web',
    iconName: 'TrendingUp',
    shortDesc:
      'Structurez votre projet numérique, positionnez votre offre de services et développez des revenus grâce au digital.',
    clientBenefit:
      'Lancer votre activité en ligne avec un accompagnement de projet concret pendant votre mois de stage.',
  },
  {
    id: 'referencement-naturel-seo',
    number: '08',
    title: 'Référencement Naturel (SEO)',
    iconName: 'Search',
    shortDesc:
      'Optimisez la structure et les contenus d’un site web pour améliorer son positionnement sur les moteurs de recherche.',
    clientBenefit:
      'Générer une visibilité durable sur les moteurs de recherche pour attirer des visiteurs qualifiés.',
  },
];

export const TRAINING_MODALITIES = {
  totalDuration: '3 mois',
  breakdown: '2 mois de théorie et pratique + 1 mois de stage / accompagnement projet',
  pace: '2 à 3 séances par semaine',
  sessionDuration: '2h30 à 3h par séance',
  format: 'Présentiel en salle équipée avec accompagnement pratique',
  tuitionFee: '99 000 F CFA',
  registrationFee: '10 000 F CFA',
  paymentInstallments: 'Paiement en 1, 2 ou 3 tranches',
  paymentNote: 'Possibilité de débuter la formation avant de tout solder.',
};

export const INCLUDED_BONUSES = [
  {
    id: 'attestation',
    title: 'Attestation de fin de formation',
    description:
      'Obtenez une attestation officielle valorisant les compétences pratiques acquises durant vos 3 mois à l’Academy.',
    iconName: 'Award',
  },
  {
    id: 'carte-visa',
    title: 'Carte VISA prépayée offerte',
    description:
      'Recevez une carte VISA prépayée prête à l’emploi pour régler vos outils en ligne et financer vos campagnes sponsorisées.',
    iconName: 'CreditCard',
  },
  {
    id: 'tshirt-officiel',
    title: "T-shirt officiel de l'Academy",
    description:
      'Intégrez pleinement la communauté de web entrepreneurs Digital Kartel Academy avec le t-shirt officiel offert.',
    iconName: 'Shirt',
  },
  {
    id: 'stage-garanti',
    title: '1 mois de stage garanti',
    description:
      'Bénéficiez d’un mois de mise en pratique encadrée et d’accompagnement sur votre projet après vos 2 mois de cours.',
    iconName: 'Briefcase',
  },
];

export const CAMPUSES_AND_CONTACTS = {
  recipientEmail: 'beaudelairekmg@gmail.com',
  whatsappUrl: 'https://wa.me/message/BIWE4C4AECH6L1',
  phones: [
    {
      raw: '237654989061',
      display: '654 98 90 61',
      label: 'Téléphone & WhatsApp Principal',
      isPrimaryWhatsApp: true,
    },
    {
      raw: '237693932941',
      display: '693 93 29 41',
      label: 'Téléphone & WhatsApp Secondaire',
      isPrimaryWhatsApp: false,
    },
  ],
  mainCampuses: [
    {
      city: 'Yaoundé',
      address: 'Total Ngousso (En face de la boulangerie MONIKA)',
      type: 'Campus Présentiel Principal',
    },
    {
      city: 'Douala',
      address: 'Tradex Borne 10',
      type: 'Campus Présentiel Principal',
    },
  ],
  otherCities: ['Ngaoundéré', 'Maroua', 'Bafoussam'],
  socialNetworks: {
    name: 'Digital Kartel Academy',
    links: [
      {
        id: 'whatsapp',
        platform: 'WhatsApp',
        handle: 'Digital Kartel Academy (654 98 90 61)',
        url: 'https://wa.me/message/BIWE4C4AECH6L1',
      },
      {
        id: 'facebook',
        platform: 'Facebook',
        handle: 'Digital Kartel Academy',
        url: 'https://www.facebook.com/share/1C5eos8Ukn/',
      },
      {
        id: 'instagram',
        platform: 'Instagram',
        handle: '@digital_kartel_academy',
        url: 'https://www.instagram.com/digital_kartel_academy?mdxt=bGtlaW53bjVmZGRq',
      },
    ],
  },
};

// Données structurées Schema.org LocalBusiness basées strictement sur brief.md
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Digital Kartel Academy',
  alternateName: 'DKA — Communauté de Web Entrepreneurs',
  description:
    'Formations pratiques en 3 mois aux métiers du digital : Marketing Digital, Community Management, E-Commerce, Création de Contenus, Montage Vidéo, Graphisme, Entrepreneuriat Web et Référencement Naturel (SEO).',
  telephone: '+237 654 98 90 61',
  email: 'beaudelairekmg@gmail.com',
  priceRange: '99 000 F CFA',
  sameAs: [
    'https://wa.me/message/BIWE4C4AECH6L1',
    'https://www.facebook.com/share/1C5eos8Ukn/',
    'https://www.instagram.com/digital_kartel_academy?mdxt=bGtlaW53bjVmZGRq',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Total Ngousso (En face de la boulangerie MONIKA)',
      addressLocality: 'Yaoundé',
      addressCountry: 'CM',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Tradex Borne 10',
      addressLocality: 'Douala',
      addressCountry: 'CM',
    },
  ],
  areaServed: ['Yaoundé', 'Douala', 'Ngaoundéré', 'Maroua', 'Bafoussam'],
};

export const NAVIGATION_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services & Formations' },
  { path: '/a-propos', label: 'À Propos & Communauté' },
  { path: '/contact', label: 'Contact & Inscription' },
];
