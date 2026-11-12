// Controller : Gestion de l'état, de la validation et de l'envoi combiné (E-mail + WhatsApp)

import { useState, useCallback } from 'react';
import {
  INITIAL_CONTACT_FORM,
  validateContactField,
  validateContactForm,
  buildWhatsAppRegistrationUrl,
  sendRegistrationEmail,
} from '../models/contactModel';

export function useContactController() {
  const [formData, setFormData] = useState(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (touched[name]) {
        const fieldError = validateContactField(name, value);
        setErrors((prev) => ({ ...prev, [name]: fieldError }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateContactField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const validation = validateContactForm(formData);
      setTouched({
        fullName: true,
        phone: true,
        city: true,
        module: true,
        message: true,
      });

      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      setErrors({});
      setIsSubmitting(true);

      const whatsappUrl = buildWhatsAppRegistrationUrl(formData);

      // 1. Ouverture automatique de WhatsApp avec les données du candidat pré-remplies
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // 2. Envoi automatique de l'e-mail en arrière-plan vers beaudelairekmg@gmail.com
      const emailSent = await sendRegistrationEmail(formData);

      setIsSubmitting(false);
      setSubmittedData({
        ...formData,
        whatsappUrl,
        emailSent,
      });
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(INITIAL_CONTACT_FORM);
    setErrors({});
    setTouched({});
    setSubmittedData(null);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submittedData,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
