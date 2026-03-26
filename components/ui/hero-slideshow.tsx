"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GALLERY_ROOMS } from "@/lib/constants";

const INTERVAL = 16000;

const SLIDES = GALLERY_ROOMS.filter((r) => !!r.src);

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const activeRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const next = activeRef.current === SLIDES.length - 1 ? 0 : activeRef.current + 1;
      setPrev(activeRef.current);
      setAnimating(true);
      setCurrent(next);
      activeRef.current = next;
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 600);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  if (!SLIDES.length) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slide saindo */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0"
          style={{
            opacity: animating ? 0 : 1,
            transition: "opacity 0.6s ease",
          }}
        >
          <Image
            src={SLIDES[prev].src!}
            alt={SLIDES[prev].name}
            fill
            className="object-cover"
            quality={85}
            sizes="420px"
          />
        </div>
      )}

      {/* Slide atual */}
      <div
        key={`curr-${current}`}
        className="absolute inset-0"
        style={{
          opacity: animating ? 1 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        <Image
          src={SLIDES[current].src!}
          alt={SLIDES[current].name}
          fill
          className="object-cover"
          quality={85}
          sizes="420px"
          priority={current === 0}
        />
      </div>

      {/* Barra de progresso */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "3px", backgroundColor: "rgba(0,0,0,0.25)" }}
        aria-hidden="true"
      >
        <div
          key={current}
          style={{
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.85)",
            animation: `slideshow-progress ${INTERVAL}ms linear`,
          }}
        />
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5"
        aria-hidden="true"
      >
        {SLIDES.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === current ? "18px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              transition: "all 0.3s ease",
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}
