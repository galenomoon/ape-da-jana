"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FAQ_ITEMS, FAQ_TITLE, FAQ_SUBTITLE, buildWhatsAppHref } from "@/lib/constants";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="section-label mb-3 block">FAQ</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ocean-800)" }}
          >
            {FAQ_TITLE}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {FAQ_SUBTITLE}
          </p>
        </div>

        {/* Accordion */}
        <dl className="flex flex-col divide-y" style={{ borderTop: "1px solid var(--brand-border)", borderBottom: "1px solid var(--brand-border)" }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} style={{ borderColor: "var(--brand-border)" }}>
                <dt>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span
                      className="text-base leading-snug"
                      style={{
                        color: isOpen ? "var(--coral)" : "var(--ocean-800)",
                        fontFamily: "var(--font-body)",
                        fontWeight: isOpen ? 700 : 600,
                        transition: "color 0.2s",
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200"
                      style={{
                        backgroundColor: isOpen ? "var(--coral)" : "var(--ocean-100)",
                        color: isOpen ? "#fff" : "var(--ocean-700)",
                      }}
                      aria-hidden="true"
                    >
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5" />
                        : <Plus className="w-3.5 h-3.5" />
                      }
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${item.id}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "500px" : "0px" }}
                >
                  <p
                    className="pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

        {/* Rodapé */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p
            className="text-sm"
            style={{ color: "var(--brand-text-muted)", fontFamily: "var(--font-body)" }}
          >
            Ainda tem dúvidas? A Jana responde rapidinho no WhatsApp!
          </p>
          <a
            href={buildWhatsAppHref("Olá Jana! Tenho uma dúvida sobre o Apê da Jana.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            aria-label="Tirar dúvidas no WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
