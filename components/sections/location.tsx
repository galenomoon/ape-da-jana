import { MapPin, Clock, Users, ShieldCheck } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";
import {
  LOCATION,
  GOOGLE_MAPS_EMBED_URL,
  INSTAGRAM_URL,
  BOOKING_URL,
  AIRBNB_URL,
  buildWhatsAppHref,
} from "@/lib/constants";

export function Location() {
  return (
    <section
      id="location"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--sand-500)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 block">Localização</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {LOCATION.title}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {LOCATION.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Mapa embed */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "var(--shadow-card)",
              border: "1.5px solid var(--brand-border)",
            }}
          >
            {/* SUBSTITUIR: gerar URL em google.com/maps > Compartilhar > Incorporar mapa */}
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full"
              style={{ height: "380px", filter: "saturate(0.85) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Apê da Jana"
              aria-label="Mapa mostrando a localização do Apê da Jana em Praia Grande, bairro Ocian"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">

            {/* Endereço */}
            <InfoRow
              icon={<MapPin className="w-5 h-5" />}
              iconBg="rgba(252,112,53,0.12)"
              iconColor="var(--coral)"
              label="Endereço"
              value={LOCATION.address}
            />

            {/* Horários */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: "var(--cream)",
                borderColor: "var(--brand-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(26,122,158,0.12)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--ocean-500)" }} aria-hidden="true" />
                </div>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--ocean-800)", fontFamily: "var(--font-body)" }}
                >
                  Horários
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: LOCATION.checkin_label, value: LOCATION.checkin_value },
                  { label: LOCATION.checkout_label, value: LOCATION.checkout_value },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3"
                    style={{ backgroundColor: "var(--ocean-50)" }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "var(--ocean-500)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--ocean-800)", fontFamily: "var(--font-display)" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regras */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: "var(--cream)",
                borderColor: "var(--brand-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(252,112,53,0.08)" }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: "var(--coral)" }} aria-hidden="true" />
                </div>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--ocean-800)", fontFamily: "var(--font-body)" }}
                >
                  Regras do apartamento
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {LOCATION.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--ocean-300)" }}
                      aria-hidden="true"
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatos e plataformas */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={buildWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "#25D366" }}
                aria-label="Contato via WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
                }}
                aria-label="Instagram do Apê da Jana"
              >
                <FaInstagram className="w-4 h-4" aria-hidden="true" />
                Instagram
              </a>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "#003580" }}
                aria-label="Ver no Booking"
              >
                <SiBookingdotcom className="w-4 h-4" aria-hidden="true" />
                Booking
              </a>

              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "#FF5A5F" }}
                aria-label="Ver no Airbnb"
              >
                <SiAirbnb className="w-4 h-4" aria-hidden="true" />
                Airbnb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
}

function InfoRow({ icon, iconBg, iconColor, label, value }: InfoRowProps) {
  return (
    <div
      className="flex gap-4 p-5 rounded-2xl border"
      style={{
        backgroundColor: "var(--cream)",
        borderColor: "var(--brand-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
        style={{ backgroundColor: iconBg }}
        aria-hidden="true"
      >
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-wider mb-1"
          style={{ color: "var(--brand-text-muted)" }}
        >
          {label}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--brand-text)", fontFamily: "var(--font-body)" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
