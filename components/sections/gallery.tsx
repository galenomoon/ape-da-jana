"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY_ROOMS, GALLERY_TITLE, GALLERY_SUBTITLE } from "@/lib/constants";

export function Gallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const room = GALLERY_ROOMS[active];

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  const goPrev = useCallback(() =>
    setActive((p) => (p === 0 ? GALLERY_ROOMS.length - 1 : p - 1)), []);

  const goNext = useCallback(() =>
    setActive((p) => (p === GALLERY_ROOMS.length - 1 ? 0 : p + 1)), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, goPrev, goNext]);

  return (
    <>
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

          {/* Card principal */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "var(--shadow-xl)",
              border: "1.5px solid var(--brand-border)",
            }}
          >
            {/* Imagem — clicável */}
            <button
              type="button"
              onClick={openLightbox}
              aria-label={`Expandir foto: ${room.name}`}
              className="group relative block w-full overflow-hidden focus:outline-none"
              style={{ aspectRatio: "16/9" }}
            >
              <RoomVisual room={room} priority={active === 0} fill />

              {/* Overlay hover */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "rgba(5,30,46,0.45)" }}
                aria-hidden="true"
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Expand className="w-4 h-4" aria-hidden="true" />
                  Ampliar foto
                </div>
              </div>

              {/* Contador */}
              <div
                className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none"
                style={{
                  backgroundColor: "rgba(5,30,46,0.55)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {active + 1} / {GALLERY_ROOMS.length}
              </div>
            </button>

            {/* Info + navegação */}
            <div
              className="flex items-start justify-between gap-4 px-6 py-5"
              style={{ backgroundColor: "var(--cream)" }}
            >
              <div className="flex-1 min-w-0">
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

              {/* Setas de navegação */}
              <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Cômodo anterior"
                  className="flex items-center justify-center w-9 h-9 rounded-xl transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--ocean-50)",
                    color: "var(--ocean-700)",
                    border: "1.5px solid var(--ocean-100)",
                  }}
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Próximo cômodo"
                  className="flex items-center justify-center w-9 h-9 rounded-xl transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--ocean-700)",
                    color: "#fff",
                  }}
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Tabs de cômodos */}
            <div
              className="px-6 pb-5 flex flex-wrap gap-2"
              style={{ borderTop: "1px solid var(--brand-border)" }}
            >
              {GALLERY_ROOMS.map((r, idx) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`Ver ${r.name}`}
                  aria-current={idx === active ? "true" : undefined}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: idx === active ? "var(--ocean-700)" : "var(--ocean-50)",
                    color: idx === active ? "#fff" : "var(--ocean-600, var(--ocean-700))",
                    fontFamily: "var(--font-body)",
                    transform: idx === active ? "scale(1.03)" : "scale(1)",
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

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ animation: "lightbox-in 0.22s ease both" }}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${room.name}`}
        >
          {/* Backdrop — clique fora fecha */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(5,20,35,0.92)", backdropFilter: "blur(12px)" }}
            onClick={closeLightbox}
            aria-hidden="true"
          />

          {/* Container da imagem */}
          <div
            className="relative z-10 flex flex-col w-full mx-4 sm:mx-8"
            style={{
              maxWidth: "900px",
              maxHeight: "90dvh",
              animation: "lightbox-scale 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            {/* Imagem */}
            <div
              className="relative w-full rounded-t-2xl overflow-hidden flex-shrink-0"
              style={{ aspectRatio: "16/9" }}
            >
              <RoomVisual room={room} priority fill quality={95} />

              {/* Seta esquerda */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{ backgroundColor: "rgba(5,30,46,0.65)", color: "#fff", backdropFilter: "blur(6px)" }}
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Seta direita */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{ backgroundColor: "rgba(5,30,46,0.65)", color: "#fff", backdropFilter: "blur(6px)" }}
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Contador */}
              <div
                className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(5,30,46,0.6)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {active + 1} / {GALLERY_ROOMS.length}
              </div>
            </div>

            {/* Info + fechar */}
            <div
              className="flex items-center justify-between gap-4 px-5 py-4 rounded-b-2xl"
              style={{
                background: "linear-gradient(135deg, var(--ocean-900) 0%, var(--ocean-800) 100%)",
              }}
            >
              <div>
                <p
                  className="text-base font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {room.icon} {room.name}
                </p>
                <p
                  className="text-xs mt-0.5 hidden sm:block"
                  style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
                >
                  {room.description}
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Fechar foto"
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-all hover:scale-110 active:scale-95"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Thumbnails de navegação */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {GALLERY_ROOMS.map((r, idx) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActive(idx); }}
                  aria-label={r.name}
                  aria-current={idx === active ? "true" : undefined}
                  className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all hover:scale-105"
                  style={{
                    outline: idx === active ? "2.5px solid var(--coral)" : "2px solid rgba(255,255,255,0.2)",
                    outlineOffset: "2px",
                    opacity: idx === active ? 1 : 0.55,
                  }}
                >
                  <RoomVisual room={r} fill />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Componente de visual do cômodo (imagem real ou placeholder) ── */
interface RoomVisualProps {
  room: (typeof GALLERY_ROOMS)[number];
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

function RoomVisual({ room, fill, priority, quality = 85 }: RoomVisualProps) {
  if (room.src) {
    return (
      <Image
        src={room.src}
        alt={room.name}
        fill={fill}
        priority={priority}
        quality={quality}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, 900px"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2"
      style={{
        background: "linear-gradient(150deg, var(--ocean-800) 0%, var(--ocean-600, var(--ocean-500)) 60%, var(--ocean-300) 100%)",
      }}
      aria-label={room.name}
    >
      <span className="text-5xl leading-none" role="img" aria-hidden="true">{room.icon}</span>
      <span
        className="text-xs font-medium px-3 py-1 rounded-full"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(6px)",
          fontFamily: "var(--font-body)",
        }}
      >
        📷 Adicionar foto
      </span>
    </div>
  );
}
