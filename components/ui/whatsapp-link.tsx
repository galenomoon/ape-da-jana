import { buildWhatsAppHref } from "@/lib/constants";

interface WhatsAppLinkProps {
  children: React.ReactNode;
  message?: string;
  className?: string;
  ariaLabel?: string;
}

export function WhatsAppLink({
  children,
  message,
  className,
  ariaLabel = "Falar no WhatsApp",
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
