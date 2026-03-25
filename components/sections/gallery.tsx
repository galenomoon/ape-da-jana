"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ROOMS, GALLERY_TITLE, GALLERY_SUBTITLE } from "@/lib/constants";

export function Gallery() {
  const [active, setActive] = useState(0);

  const goTo = (idx: number) => setActive(idx);
  const goPrev = () => setActive((p) => (p === 0 ? GALLERY_ROOMS.length - 1 : p - 1));
  const goNext = () => setActive((p) => (p === GALLERY_ROOMS.length - 1 ? 0 : p + 1));

  const room = GALLERY_ROOMS[active];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label mb-3 block">Galeria</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {GALLERY_TITLE}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {GALLERY_SUBTITLE}
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-xl)", border: "1.5px solid var(--brand-border)" }}
        >
          {/* Imagem principal */}
          <div className="relative w-full" style={{ aspectRatio: "16/9", backgroundColor: "var(--ocean-100)" }}>

            {room.src ? (
              <Image
                src={room.src}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={active === 0}
              />
            ) : (
              /* Placeholder até ter foto real */
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{
                  background: `linear-gradient(135deg, var(--ocean-800) 0%, var(--ocean-500) 60%, var(--ocean-300) 100%)`,
                }}
              >
                <span className="text-6xl" role="img" aria-label={room.name}>
                  {room.icon}
                </span>
                <span
                  className="text-sm font-medium px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  📷 Foto em breve
                </span>
              </div>
            )}

            {/* Setas de navegação */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Cômodo anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "#fff", backdropFilter: "blur(4px)" }}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo cômodo"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "#fff", backdropFilter: "blur(4px)" }}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Contador */}
            <div
              className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#fff",
                backdropFilter: "blur(4px)",
                fontFamily: "var(--font-body)",
              }}
            >
              {active + 1} / {GALLERY_ROOMS.length}
            </div>
          </div>

          {/* Descrição */}
          <div
            className="px-6 py-5"
            style={{ backgroundColor: "var(--cream)" }}
          >
            <h3
              className="text-lg font-bold mb-1"
              style={{ color: "var(--ocean-800)", fontFamily: "var(--font-display)" }}
            >
              {room.name}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
            >
              {room.description}
            </p>
          </div>

          {/* Dots + miniaturas de cômodo */}
          <div
            className="px-6 pb-5 flex flex-wrap gap-2"
            style={{ borderTop: "1px solid var(--brand-border)" }}
          >
            {GALLERY_ROOMS.map((r, idx) => (
              <button
                key={r.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Ver ${r.name}`}
                aria-current={idx === active ? "true" : undefined}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  backgroundColor: idx === active ? "var(--ocean-700)" : "var(--ocean-50)",
                  color: idx === active ? "#fff" : "var(--ocean-700)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span role="img" aria-hidden="true">{r.icon}</span>
                <span className="hidden sm:inline">{r.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
