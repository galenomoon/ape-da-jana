"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const AVATAR_COLORS = [
  { bg: "var(--ocean-700)", text: "#fff" },
  { bg: "var(--coral)", text: "#fff" },
  { bg: "var(--ocean-500)", text: "#fff" },
  { bg: "#6B6259", text: "#fff" },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  const goToNext = () =>
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  const active = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--ocean-50)" }}
    >
      {/* Aspas decorativas de fundo */}
      <div
        className="absolute top-8 left-8 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20rem",
          lineHeight: 1,
          color: "rgba(26,122,158,0.05)",
          fontWeight: 700,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 block">Avaliações</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            O que os hóspedes dizem
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            Mais de 45 avaliações com nota 9.3 no Booking. Veja quem já ficou.
          </p>
        </div>

        {/* Grid desktop */}
        <div className="hidden md:grid grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} avatarColor={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
          ))}
        </div>

        {/* Carrossel mobile */}
        <div className="md:hidden">
          <TestimonialCard testimonial={active} avatarColor={AVATAR_COLORS[activeIndex % AVATAR_COLORS.length]} />

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Depoimento anterior"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: "var(--cream)",
                border: "1.5px solid var(--ocean-300)",
                color: "var(--ocean-700)",
              }}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className="rounded-full transition-all"
                  style={{
                    height: "8px",
                    width: i === activeIndex ? "24px" : "8px",
                    backgroundColor: i === activeIndex ? "var(--ocean-700)" : "var(--ocean-300)",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Próximo depoimento"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: "var(--cream)",
                border: "1.5px solid var(--ocean-300)",
                color: "var(--ocean-700)",
              }}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[number];
  avatarColor: { bg: string; text: string };
}

function TestimonialCard({ testimonial, avatarColor }: TestimonialCardProps) {
  return (
    <article
      className="flex flex-col gap-4 p-7 rounded-2xl border"
      style={{
        backgroundColor: "var(--cream)",
        borderColor: "var(--brand-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Estrelas */}
      <div
        className="flex items-center gap-0.5"
        aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            fill="var(--gold)"
            style={{ color: "var(--gold)" }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Aspas abertas decorativas */}
      <div
        className="text-5xl leading-none -mb-2 font-bold"
        style={{ color: "var(--ocean-100)", fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Texto */}
      <blockquote
        className="text-base leading-relaxed"
        style={{ color: "var(--brand-text)", fontFamily: "var(--font-body)" }}
      >
        {testimonial.text}
      </blockquote>

      {/* Autor */}
      <footer
        className="flex items-center gap-3 mt-auto pt-4 border-t"
        style={{ borderColor: "var(--brand-border)" }}
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor.bg, color: avatarColor.text }}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p
            className="text-sm font-bold"
            style={{ color: "var(--ocean-800)", fontFamily: "var(--font-body)" }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "var(--brand-text-muted)" }}
          >
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {testimonial.origin}
          </p>
        </div>
      </footer>
    </article>
  );
}
