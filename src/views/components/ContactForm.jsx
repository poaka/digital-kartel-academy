// View (Component) : Formulaire de contact avec validation et envoi combiné (E-mail + WhatsApp)

import { CheckCircle2, AlertCircle, MessageSquare, RotateCcw } from 'lucide-react';
import { AVAILABLE_CITIES, AVAILABLE_MODULE_CHOICES } from '../../models/contactModel';
import { CAMPUSES_AND_CONTACTS } from '../../models/academyModel';
import { useContactController } from '../../controllers/useContactController';
import CTAButton from './CTAButton';

export default function ContactForm({ headingLevel = 'h2' }) {
  const {
    formData,
    errors,
    isSubmitting,
    submittedData,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useContactController();

  const HeadingTag = headingLevel === 'h3' ? 'h3' : 'h2';

  if (submittedData) {
    return (
      <div
        id="contact-confirmation"
        role="status"
        aria-live="polite"
        className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-[#15803D] shadow-sm space-y-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#15803D]/10 text-[#15803D] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
              Demande envoyée par E-mail &amp; WhatsApp
            </span>
            <HeadingTag className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Merci {submittedData.fullName}, votre demande d’inscription est bien transmise.
            </HeadingTag>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Vos informations ont été envoyées à notre équipe (
              <strong className="text-[#0F172A]">{CAMPUSES_AND_CONTACTS.recipientEmail}</strong>) et
              votre message pré-rempli s’est ouvert sur WhatsApp. Nous vous recontacterons très
              rapidement au <strong className="text-[#0F172A]">{submittedData.phone}</strong>.
            </p>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] text-sm space-y-1.5">
          <div className="font-bold text-[#0A2E5C]">Récapitulatif transmis :</div>
          <div>
            <span className="text-[#475569]">Nom complet :</span>{' '}
            <strong className="text-[#0F172A]">{submittedData.fullName}</strong>
          </div>
          <div>
            <span className="text-[#475569]">Téléphone :</span>{' '}
            <strong className="text-[#0F172A]">{submittedData.phone}</strong>
          </div>
          <div>
            <span className="text-[#475569]">Centre souhaité :</span>{' '}
            <strong className="text-[#0F172A]">{submittedData.city}</strong>
          </div>
          <div>
            <span className="text-[#475569]">Formation :</span>{' '}
            <strong className="text-[#0F172A]">{submittedData.module}</strong>
          </div>
          <div>
            <span className="text-[#475569]">Message :</span>{' '}
            <strong className="text-[#0F172A]">{submittedData.message}</strong>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={submittedData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-transition inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#15803D] hover:bg-[#166534] text-white shadow-xs"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Rouvrir le message sur WhatsApp (654 98 90 61)
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="ui-transition inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl font-semibold text-sm text-[#0A2E5C] bg-[#F8FAFC] hover:bg-[#E2E8F0]/60 border border-[#E2E8F0] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-5"
    >
      <div className="border-b border-[#E2E8F0] pb-4">
        <HeadingTag className="text-xl sm:text-2xl font-bold text-[#0A2E5C]">
          Formulaire de contact &amp; d’inscription
        </HeadingTag>
        <p className="text-sm text-[#475569] mt-1">
          Complétez les champs ci-dessous pour réserver votre place ou poser votre question. Les
          champs marqués d’un astérisque (*) sont obligatoires.
        </p>
      </div>

      {/* 1. Nom complet (obligatoire) */}
      <div className="space-y-1.5">
        <label htmlFor="fullName" className="block text-sm font-semibold text-[#0F172A]">
          Nom complet <span className="text-[#D9232E]">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex : Jean Kamga"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={`ui-transition w-full min-h-[48px] px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 ${
            errors.fullName
              ? 'border-[#D9232E] focus:ring-[#D9232E]/30'
              : 'border-[#E2E8F0] focus:border-[#1273C4] focus:ring-[#1273C4]/20'
          }`}
        />
        {errors.fullName && (
          <p
            id="fullName-error"
            role="alert"
            className="flex items-center gap-1.5 text-xs font-medium text-[#D9232E]"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* 2. Téléphone / WhatsApp (obligatoire) */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A]">
          Numéro de téléphone / WhatsApp <span className="text-[#D9232E]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex : 654 98 90 61"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`ui-transition w-full min-h-[48px] px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 ${
            errors.phone
              ? 'border-[#D9232E] focus:ring-[#D9232E]/30'
              : 'border-[#E2E8F0] focus:border-[#1273C4] focus:ring-[#1273C4]/20'
          }`}
        />
        {errors.phone && (
          <p
            id="phone-error"
            role="alert"
            className="flex items-center gap-1.5 text-xs font-medium text-[#D9232E]"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Ville / Centre & Formation souhaitée */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="city" className="block text-sm font-semibold text-[#0F172A]">
            Centre souhaité <span className="text-[#D9232E]">*</span>
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="ui-transition w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1273C4] focus:ring-2 focus:ring-[#1273C4]/20"
          >
            {AVAILABLE_CITIES.map((cityOption) => (
              <option key={cityOption} value={cityOption}>
                {cityOption}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="module" className="block text-sm font-semibold text-[#0F172A]">
            Formation d’intérêt <span className="text-[#D9232E]">*</span>
          </label>
          <select
            id="module"
            name="module"
            value={formData.module}
            onChange={handleChange}
            onBlur={handleBlur}
            className="ui-transition w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1273C4] focus:ring-2 focus:ring-[#1273C4]/20"
          >
            {AVAILABLE_MODULE_CHOICES.map((moduleOption) => (
              <option key={moduleOption} value={moduleOption}>
                {moduleOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Message (obligatoire) */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A]">
          Votre message <span className="text-[#D9232E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Précisez vos disponibilités ou votre demande concernant la formation de 3 mois..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`ui-transition w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-[#D9232E] focus:ring-[#D9232E]/30'
              : 'border-[#E2E8F0] focus:border-[#1273C4] focus:ring-[#1273C4]/20'
          }`}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="flex items-center gap-1.5 text-xs font-medium text-[#D9232E]"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2">
        <CTAButton type="submit" variant="primary" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande d’inscription'}
        </CTAButton>
      </div>
    </form>
  );
}
