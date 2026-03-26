"use client";

import { useState } from "react";
import { MapPin, Map } from "lucide-react";
import { GOOGLE_MAPS_EMBED_URL, LOCATION, GEO_LATITUDE, GEO_LONGITUDE } from "@/lib/constants";

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${GEO_LATITUDE},${GEO_LONGITUDE}`;

export function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        className="w-full"
        style={{ height: "380px", filter: "saturate(0.85) contrast(1.05)" }}
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Apê da Jana"
        aria-label="Mapa mostrando a localização do Apê da Jana em Praia Grande, bairro Ocian"
      />
    );
  }

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center gap-5"
      style={{
        height: "380px",
        background: "linear-gradient(160deg, var(--ocean-50) 0%, var(--sand-200) 100%)",
      }}
    >
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--ocean-100) 1px, transparent 1px), linear-gradient(90deg, var(--ocean-100) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Pin central */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full"
          style={{ backgroundColor: "var(--coral)", boxShadow: "0 4px 20px rgba(252,112,53,0.4)" }}
        >
          <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        <div>
          <p
            className="text-base font-bold mb-1"
            style={{ color: "var(--ocean-800)", fontFamily: "var(--font-display)" }}
          >
            Apê da Jana
          </p>
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {LOCATION.address}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--ocean-700)", boxShadow: "0 4px 12px rgba(11,61,94,0.3)" }}
          >
            <Map className="w-4 h-4" aria-hidden="true" />
            Ver mapa interativo
          </button>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--cream)",
              color: "var(--ocean-700)",
              border: "1.5px solid var(--ocean-100)",
            }}
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
