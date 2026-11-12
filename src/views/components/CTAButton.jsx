// View (Component) : Bouton d'appel à l'action réutilisable avec tous ses états interactifs

import { Link } from 'react-router-dom';

export default function CTAButton({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}) {
  const baseStyles =
    'ui-transition inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:bg-[#E2E8F0] disabled:text-[#64748B] disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-[#D9232E] hover:bg-[#B81B24] text-white shadow-sm hover:shadow-md focus-visible:outline-[#D9232E]',
    secondary:
      'bg-[#0A2E5C] hover:bg-[#1273C4] text-white shadow-xs focus-visible:outline-[#1273C4]',
    outline:
      'bg-white hover:bg-[#F8FAFC] text-[#0A2E5C] border-2 border-[#0A2E5C] focus-visible:outline-[#0A2E5C]',
    outlineLight:
      'bg-transparent hover:bg-white/10 text-white border-2 border-white/70 focus-visible:outline-white',
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

