import { Check } from "lucide-react";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import {
  SERVICES_TITLE,
  SERVICES_SUBTITLE,
  BOOKING_URL,
  AIRBNB_URL,
  PRICE_WEEKDAY,
  PRICE_WEEKEND,
  PRICE_NOTE,
} from "@/lib/constants";

const APE_FEATURES = [
  "2 quartos (casal + beliche)",
  "Capacidade para até 5 hóspedes",
  "Cozinha equipada",
  "Sala de estar com Netflix",
  "Wi-Fi de alta velocidade",
  "Ar-condicionado em todos os quartos",
  "Estacionamento coberto incluso",
  "42m² bem distribuídos",
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--sand-500)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 block">O Espaço</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {SERVICES_TITLE}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {SERVICES_SUBTITLE}
          </p>
        </div>

        {/* Card único — apartamento completo */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--cream)",
            border: "2px solid var(--coral)",
            boxShadow: "0 16px 48px rgba(252,112,53,0.18), 0 4px 16px rgba(252,112,53,0.1)",
          }}
        >
          {/* Header */}
          <div
            className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{
              background: "linear-gradient(135deg, var(--ocean-800) 0%, var(--ocean-700) 100%)",
            }}
          >
            <div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Apartamento Completo
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
              >
                Aluguel do apartamento inteiro · Praia do Ocian, Praia Grande - SP
              </p>
            </div>

            {/* Preço */}
            <div className="flex-shrink-0 text-right">
              <div className="flex items-baseline gap-3">
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Semana</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#FFD580", fontFamily: "var(--font-display)" }}
                  >
                    {PRICE_WEEKDAY}
                  </p>
                </div>
                <span className="text-white/30 text-lg">/</span>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Fim de semana</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#FFD580", fontFamily: "var(--font-display)" }}
                  >
                    {PRICE_WEEKEND}
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/50 mt-1">por noite</p>
            </div>
          </div>

          {/* Corpo */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

              {/* Features list */}
              <div>
                <h4
                  className="text-sm font-bold uppercase tracking-wide mb-4"
                  style={{ color: "var(--ocean-700)", fontFamily: "var(--font-body)" }}
                >
                  O que está incluso
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
                  {APE_FEATURES.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: "var(--brand-text)", fontFamily: "var(--font-body)" }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(252,112,53,0.12)" }}
                        aria-hidden="true"
                      >
                        <Check className="w-3 h-3" style={{ color: "var(--coral)" }} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detalhes adicionais */}
              <div>
                <h4
                  className="text-sm font-bold uppercase tracking-wide mb-4"
                  style={{ color: "var(--ocean-700)", fontFamily: "var(--font-body)" }}
                >
                  Informações
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Localização", value: "2 min a pé da praia do Ocian" },
                    { label: "Área", value: "42m² totais" },
                    { label: "Capacidade", value: "Máximo 5 hóspedes" },
                    { label: "Pets", value: "Não aceita animais" },
                    { label: "Preço", value: `${PRICE_WEEKDAY} (semana) · ${PRICE_WEEKEND} (fim de semana)` },
                    { label: "Disponibilidade", value: PRICE_NOTE },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 py-2.5 border-b"
                      style={{ borderColor: "var(--brand-border)" }}
                    >
                      <span
                        className="text-sm font-medium flex-shrink-0"
                        style={{ color: "var(--brand-text-muted)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm font-semibold text-right"
                        style={{ color: "var(--ocean-800)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="pt-6 border-t flex flex-col sm:flex-row gap-3"
              style={{ borderColor: "rgba(252,112,53,0.15)" }}
            >
              <WhatsAppLink
                className="btn-primary flex-1 justify-center"
                ariaLabel="Verificar disponibilidade no WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                Verificar Disponibilidade
              </WhatsAppLink>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 py-3 px-5 rounded-xl border text-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "#003580", color: "#003580" }}
                aria-label="Reservar no Booking"
              >
                <SiBookingdotcom className="w-5 h-5" aria-hidden="true" />
                Reservar no Booking
              </a>

              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 py-3 px-5 rounded-xl border text-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "#FF5A5F", color: "#FF5A5F" }}
                aria-label="Reservar no Airbnb"
              >
                <SiAirbnb className="w-5 h-5" aria-hidden="true" />
                Reservar no Airbnb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
