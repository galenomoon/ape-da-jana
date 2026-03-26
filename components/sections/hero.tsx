import { Star, MapPin, Users, Wifi, Wind, Car } from "lucide-react";
import { SiAirbnb, SiBookingdotcom } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { HeroSlideshow } from "@/components/ui/hero-slideshow";
import {
  HERO,
  BOOKING_URL,
  AIRBNB_URL,
  PRICE_FROM,
  PRICE_TO,
  PRICE_NOTE,
  BOOKING_RATING,
  BOOKING_REVIEWS_COUNT,
} from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, var(--ocean-900) 0%, var(--ocean-800) 45%, var(--ocean-700) 80%, var(--ocean-500) 100%)",
      }}
    >
      {/* Padrão de ondas decorativo — fundo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)",
        }}
        aria-hidden="true"
      />

      {/* Gradiente radial decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(252,112,53,0.12) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(26,122,158,0.25) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* ── Coluna esquerda: conteúdo ── */}
          <div>
            {/* Badge de localização */}
            <div className="flex flex-wrap items-center gap-2 mb-7">
              <span className="badge-label">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Praia do Ocian · Praia Grande - SP
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl xl:text-[3.75rem] font-bold text-white leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {HERO.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg leading-relaxed mb-6 max-w-xl"
              style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)" }}
            >
              {HERO.subheadline}
            </p>

            {/* Preço + avaliação */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div>
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "#FFD580", fontFamily: "var(--font-display)" }}
                >
                  {PRICE_FROM}
                </span>
                <span className="text-base font-normal text-white/70"> /noite</span>
                <p className="text-xs mt-0.5 text-white/55">
                  até {PRICE_TO} · {PRICE_NOTE}
                </p>
              </div>

              <div
                className="h-10 w-px"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                aria-hidden="true"
              />

              <div className="badge-rating">
                <Star className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" />
                {BOOKING_REVIEWS_COUNT} avaliações · {BOOKING_RATING} no Booking
              </div>
            </div>

            {/* Ícones rápidos */}
            <div className="flex flex-wrap items-center gap-5 mb-9 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" aria-hidden="true" />
                Até 5 hóspedes
              </span>
              <span className="flex items-center gap-1.5">
                <Wifi className="w-4 h-4" aria-hidden="true" />
                Wi-Fi incluso
              </span>
              <span className="flex items-center gap-1.5">
                <Wind className="w-4 h-4" aria-hidden="true" />
                Ar-condicionado
              </span>
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4" aria-hidden="true" />
                Estacionamento
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <WhatsAppLink
                className="btn-primary text-base"
                ariaLabel="Verificar disponibilidade no WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                {HERO.cta_primary}
              </WhatsAppLink>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-platform"
                style={{ color: "#003580" }}
                aria-label="Reservar no Booking.com"
              >
                <SiBookingdotcom className="w-5 h-5" aria-hidden="true" />
                {HERO.cta_booking}
              </a>

              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-platform"
                style={{ color: "#FF5A5F" }}
                aria-label="Reservar no Airbnb"
              >
                <SiAirbnb className="w-5 h-5" aria-hidden="true" />
                {HERO.cta_airbnb}
              </a>
            </div>
          </div>

          {/* ── Coluna direita: property card ── */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-xl)" }}
            >
              {/* Slideshow de fotos */}
              <div className="relative h-52">
                <HeroSlideshow />
              </div>

              {/* Detalhes do card */}
              <div className="bg-white p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2
                      className="text-lg font-bold text-[var(--ocean-800)] leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Apê da Jana
                    </h2>
                    <p className="text-xs text-[var(--brand-text-muted)] mt-0.5">
                      Praia do Ocian · Praia Grande, SP
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-[var(--gold-light)] rounded-lg px-2.5 py-1.5 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 text-[var(--gold)] fill-[var(--gold)]" aria-hidden="true" />
                    <span className="text-sm font-bold text-[var(--gold)]">{BOOKING_RATING}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: Users, label: "5 hóspedes" },
                    { icon: Wind, label: "Ar-cond." },
                    { icon: Car, label: "Garagem" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1 p-2.5 rounded-xl text-center"
                      style={{ backgroundColor: "var(--ocean-50)" }}
                    >
                      <Icon className="w-4 h-4 text-[var(--ocean-700)]" aria-hidden="true" />
                      <span className="text-[10px] font-medium text-[var(--ocean-700)]">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div
                  className="flex items-center justify-between py-3 border-t border-b mb-4"
                  style={{ borderColor: "var(--brand-border)" }}
                >
                  <div>
                    <span
                      className="text-2xl font-bold text-[var(--coral)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      R$ 260
                    </span>
                    <span className="text-sm text-[var(--brand-text-muted)]"> /noite</span>
                  </div>
                  <span className="text-xs text-[var(--brand-text-muted)]">até R$ 300 (fim de semana)</span>
                </div>

                {/* CTA do card */}
                <WhatsAppLink
                  className="btn-primary w-full justify-center text-sm"
                  ariaLabel="Falar com a Jana"
                >
                  <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                  Verificar Disponibilidade
                </WhatsAppLink>

                {/* Plataformas */}
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:shadow-sm"
                    style={{ borderColor: "#003580", color: "#003580" }}
                    aria-label="Ver no Booking"
                  >
                    <SiBookingdotcom className="w-4 h-4" aria-hidden="true" />
                    Booking
                  </a>
                  <a
                    href={AIRBNB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:shadow-sm"
                    style={{ borderColor: "#FF5A5F", color: "#FF5A5F" }}
                    aria-label="Ver no Airbnb"
                  >
                    <SiAirbnb className="w-4 h-4" aria-hidden="true" />
                    Airbnb
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divisor onda → areia */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "64px" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,32 C180,64 360,0 540,32 C720,64 900,0 1080,32 C1260,64 1350,16 1440,32 L1440,64 L0,64 Z"
            fill="var(--sand-500)"
          />
        </svg>
      </div>
    </section>
  );
}
