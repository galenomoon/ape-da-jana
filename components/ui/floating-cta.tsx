"use client";

import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppHref, BUSINESS_NAME } from "@/lib/constants";

export function FloatingCta() {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com ${BUSINESS_NAME} no WhatsApp`}
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl pulse-cta transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
}
