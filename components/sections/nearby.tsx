import {
  FaUmbrellaBeach,
  FaShoppingCart,
  FaUtensils,
  FaPizzaSlice,
  FaHamburger,
  FaUniversity,
  FaPills,
  FaTicketAlt,
  FaLandmark,
} from "react-icons/fa";
import { MapPin } from "lucide-react";
import { NEARBY_ITEMS, NEARBY_TITLE, NEARBY_SUBTITLE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Beach:    FaUmbrellaBeach,
  Cart:     FaShoppingCart,
  Utensils: FaUtensils,
  Pizza:    FaPizzaSlice,
  Ferris:   FaTicketAlt,
  Landmark: FaLandmark,
  Burger:   FaHamburger,
  Bank:     FaUniversity,
  Pills:    FaPills,
};

const ACCENT_COLORS = [
  { bg: "rgba(26,122,158,0.1)",  icon: "var(--ocean-500)" },
  { bg: "rgba(252,112,53,0.1)",  icon: "var(--coral)" },
  { bg: "rgba(201,147,58,0.12)", icon: "var(--gold)" },
];

export function Nearby() {
  return (
    <section
      id="nearby"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--ocean-50)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3 block">Proximidades</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {NEARBY_TITLE}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {NEARBY_SUBTITLE}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {NEARBY_ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            const accent = ACCENT_COLORS[idx % ACCENT_COLORS.length];
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--cream)",
                  borderColor: "var(--brand-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Ícone */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: accent.bg }}
                >
                  {Icon && (
                    <Icon
                      className="w-4 h-4"
                      style={{ color: accent.icon }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Texto */}
                <div className="min-w-0 flex-1">
                  <p
                    className="text-sm font-semibold leading-tight"
                    style={{ color: "var(--ocean-800)", fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="flex items-center gap-1 text-xs mt-0.5"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    {item.distance}
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
