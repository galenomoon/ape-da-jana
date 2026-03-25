import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";
import {
  BUSINESS_NAME,
  INSTAGRAM_URL,
  BOOKING_URL,
  AIRBNB_URL,
  NAV_LINKS,
  FOOTER,
  ADDRESS_FULL,
  buildWhatsAppHref,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--ocean-900)", color: "rgba(255,255,255,0.75)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              {/* SUBSTITUIR: adicionar logo real com next/image */}
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, var(--ocean-700), var(--ocean-500))" }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M2 12.5C2 12.5 5 6 12 6C19 6 22 12.5 22 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2 12.5C3.5 14.5 6 18 12 18C18 18 20.5 14.5 22 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {BUSINESS_NAME}
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
            >
              Apartamento de temporada a beira da Praia do Ocian, Praia Grande - SP.
              Conforto e praticidade com o atendimento cuidadoso da Jana.
            </p>

            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {ADDRESS_FULL}
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-2 mt-1">
              {[
                {
                  href: INSTAGRAM_URL,
                  icon: <FaInstagram className="w-4 h-4" />,
                  label: "Instagram",
                  bg: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
                },
                {
                  href: buildWhatsAppHref(),
                  icon: <FaWhatsapp className="w-4 h-4" />,
                  label: "WhatsApp",
                  bg: "#25D366",
                },
              ].map(({ href, icon, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl text-white transition-all hover:scale-110 hover:opacity-90"
                  style={{ background: bg }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3
              className="text-xs font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Reservas */}
          <div>
            <h3
              className="text-xs font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Reserve agora
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={buildWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
              >
                <FaWhatsapp className="w-4 h-4 flex-shrink-0" style={{ color: "#25D366" }} aria-hidden="true" />
                WhatsApp (reserva direta)
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
              >
                <SiBookingdotcom className="w-4 h-4 flex-shrink-0" style={{ color: "#4a9bff" }} aria-hidden="true" />
                Booking.com
              </a>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
              >
                <SiAirbnb className="w-4 h-4 flex-shrink-0" style={{ color: "#FF7782" }} aria-hidden="true" />
                Airbnb
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "var(--font-body)",
          }}
        >
          <p>{FOOTER.copyright}</p>
          <p>{FOOTER.owner}</p>
          <div className="flex items-center gap-4">
            <a href={FOOTER.privacy_policy} className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href={FOOTER.terms} className="hover:text-white transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
