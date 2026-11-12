// View (Component) : Bouton WhatsApp flottant discret pointant vers le lien officiel https://wa.me/message/BIWE4C4AECH6L1

import { MessageCircle } from 'lucide-react';
import { CAMPUSES_AND_CONTACTS } from '../../models/academyModel';

export default function WhatsAppButton() {
  const primaryPhone = CAMPUSES_AND_CONTACTS.phones[0];

  return (
    <a
      href={CAMPUSES_AND_CONTACTS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contacter Digital Kartel Academy sur WhatsApp (${primaryPhone.display})`}
      className="ui-transition fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 min-h-[48px] px-4 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp • {primaryPhone.display}</span>
    </a>
  );
}
