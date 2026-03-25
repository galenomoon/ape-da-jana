import { Maximize, Users, MessageSquare, Star } from "lucide-react";
import { INFO_CARDS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Maximize,
  Users,
  MessageSquare,
  Star,
};

export function InfoCards() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, var(--ocean-900) 0%, var(--ocean-800) 100%)",
      }}
      aria-label="Números do apartamento em destaque"
    >
      {/* Padrão decorativo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {INFO_CARDS.map((card, idx) => {
            const Icon = ICON_MAP[card.icon];
            const isLast = idx === INFO_CARDS.length - 1;
            return (
              <div
                key={card.id}
                className="flex flex-col items-center text-center px-6 py-10"
                style={{
                  borderRight: !isLast ? "1px solid rgba(255,255,255,0.1)" : undefined,
                  borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.1)" : undefined,
                }}
              >
                {Icon && (
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ backgroundColor: "rgba(252,112,53,0.18)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--coral)" }} aria-hidden="true" />
                  </div>
                )}
                <p
                  className="text-4xl font-bold text-white leading-none mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.value}
                </p>
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
                >
                  {card.label}
                </p>
                <p
                  className="text-xs leading-snug"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
