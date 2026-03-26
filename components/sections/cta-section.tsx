import { Star } from "lucide-react";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { CTA_SECTION, BOOKING_URL, AIRBNB_URL, BOOKING_RATING, BOOKING_REVIEWS_COUNT } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, var(--ocean-900) 0%, var(--ocean-800) 50%, var(--ocean-700) 100%)",
      }}
    >
      {/* Padrão de pontos decorativo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Orbs de luz decorativos */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252,112,53,0.15) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,122,158,0.25) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge de avaliações */}
        <div className="flex justify-center mb-7">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
              fontFamily: "var(--font-body)",
            }}
          >
            <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" aria-hidden="true" />
            {BOOKING_REVIEWS_COUNT} avaliações &bull; Nota {BOOKING_RATING} no Booking
          </span>
        </div>

        {/* Título */}
        <h2
          className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {CTA_SECTION.title}
        </h2>

        {/* Subtítulo */}
        <p
          className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.78)", fontFamily: "var(--font-body)" }}
        >
          {CTA_SECTION.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppLink
            className="btn-primary text-base w-full sm:w-auto justify-center"
            ariaLabel="Falar com a Jana no WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            {CTA_SECTION.cta_whatsapp}
          </WhatsAppLink>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform w-full sm:w-auto justify-center"
            style={{ color: "#003580" }}
            aria-label="Ver disponibilidade no Booking"
          >
            <SiBookingdotcom className="w-5 h-5" aria-hidden="true" />
            {CTA_SECTION.cta_booking}
          </a>

          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform w-full sm:w-auto justify-center"
            style={{ color: "#FF5A5F" }}
            aria-label="Ver disponibilidade no Airbnb"
          >
            <SiAirbnb className="w-5 h-5" aria-hidden="true" />
            {CTA_SECTION.cta_airbnb}
          </a>
        </div>

        {/* Nota de preço */}
        <p
          className="mt-7 text-sm"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
        >
          A partir de R$ 260/noite &bull; Consulte disponibilidade para sua data
        </p>
      </div>

      {/* Onda final → areia */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "56px" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z"
            fill="var(--sand-500)"
          />
        </svg>
      </div>
    </section>
  );
}
