// Model : Schéma des champs, validation et envoi combiné (E-mail vers beaudelairekmg@gmail.com + WhatsApp)

import { TRAINING_MODULES, CAMPUSES_AND_CONTACTS } from './academyModel';

export const INITIAL_CONTACT_FORM = {
  fullName: '',
  phone: '',
  city: 'Yaoundé — Total Ngousso (En face boulangerie MONIKA)',
  module: 'Cursus Complet (Tous les modules — 99 000 F CFA)',
  message: '',
};

export const AVAILABLE_CITIES = [
  'Yaoundé — Total Ngousso (En face boulangerie MONIKA)',
  'Douala — Tradex Borne 10',
  'Ngaoundéré',
  'Maroua',
  'Bafoussam',
];

export const AVAILABLE_MODULE_CHOICES = [
  'Cursus Complet (Tous les modules — 99 000 F CFA)',
  ...TRAINING_MODULES.map((m) => m.title),
];

/**
 * Valide un champ individuel du formulaire de contact (nom, téléphone, message)
 * @param {string} name - Nom du champ
 * @param {string} value - Valeur saisie
 * @returns {string} Message d'erreur (chaîne vide si valide)
 */
export function validateContactField(name, value) {
  const trimmed = String(value || '').trim();

  switch (name) {
    case 'fullName':
      if (!trimmed) {
        return 'Veuillez renseigner votre nom complet.';
      }
      if (trimmed.length < 2) {
        return 'Le nom doit contenir au moins 2 caractères.';
      }
      return '';

    case 'phone': {
      if (!trimmed) {
        return 'Veuillez renseigner votre numéro de téléphone ou WhatsApp.';
      }
      const digitsOnly = trimmed.replace(/[\s.\-+()]/g, '');
      if (!/^\d{8,15}$/.test(digitsOnly)) {
        return 'Veuillez entrer un numéro valide (ex : 654 98 90 61).';
      }
      return '';
    }

    case 'message':
      if (!trimmed) {
        return 'Veuillez saisir votre message ou préciser votre demande.';
      }
      if (trimmed.length < 5) {
        return 'Votre message doit contenir au moins 5 caractères.';
      }
      return '';

    case 'city':
      if (!trimmed) {
        return 'Veuillez sélectionner la ville souhaitée.';
      }
      return '';

    case 'module':
      if (!trimmed) {
        return 'Veuillez sélectionner une formation.';
      }
      return '';

    default:
      return '';
  }
}

/**
 * Valide l'ensemble du formulaire (nom, téléphone, message, ville, module)
 * @param {object} formData
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(formData) {
  const errors = {};
  for (const field of ['fullName', 'phone', 'city', 'module', 'message']) {
    const error = validateContactField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Génère le lien WhatsApp pré-rempli avec toutes les réponses saisies par le client
 * @param {object} formData
 * @returns {string} URL wa.me avec texte pré-rempli
 */
export function buildWhatsAppRegistrationUrl(formData) {
  const primaryPhone = CAMPUSES_AND_CONTACTS.phones[0].raw;
  const lines = [
    'Bonjour Digital Kartel Academy,',
    "Nouvelle demande d'inscription depuis le site web :",
    `- Nom complet : ${formData.fullName.trim()}`,
    `- Téléphone : ${formData.phone.trim()}`,
    `- Centre souhaité : ${formData.city}`,
    `- Formation : ${formData.module}`,
    `- Message : ${formData.message.trim()}`,
  ];
  return `https://wa.me/${primaryPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * Envoie les données du formulaire par e-mail à beaudelairekmg@gmail.com via FormSubmit AJAX
 * @param {object} formData
 * @returns {Promise<boolean>} true si l'envoi a abouti
 */
export async function sendRegistrationEmail(formData) {
  const endpoint = `https://formsubmit.co/ajax/${CAMPUSES_AND_CONTACTS.recipientEmail}`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Nouvelle inscription Digital Kartel Academy — ${formData.fullName.trim()}`,
        _template: 'table',
        'Nom complet': formData.fullName.trim(),
        'Téléphone / WhatsApp': formData.phone.trim(),
        'Centre souhaité': formData.city,
        'Formation choisie': formData.module,
        Message: formData.message.trim(),
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
