import { Waves, Wind, Wifi, Car, Tv, Home } from "lucide-react";
import { FEATURES, FEATURES_TITLE, FEATURES_SUBTITLE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Waves,
  Wind,
  Wifi,
  Car,
  Tv,
  Home,
};

export function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 block">Diferenciais</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {FEATURES_TITLE}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {FEATURES_SUBTITLE}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.id}
                className="feature-card flex gap-4 p-6"
              >
                {/* Ícone */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, var(--coral-light), rgba(252,112,53,0.1))" }}
                >
                  {Icon && (
                    <Icon className="w-5 h-5" style={{ color: "var(--coral)" }} aria-hidden="true" />
                  )}
                </div>

                {/* Texto */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3
                      className="text-base font-bold leading-snug"
                      style={{ color: "var(--ocean-800)", fontFamily: "var(--font-body)" }}
                    >
                      {feature.title}
                    </h3>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "var(--ocean-500)", fontSize: "10px" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
