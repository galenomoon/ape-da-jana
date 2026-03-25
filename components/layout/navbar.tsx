"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS_NAME, NAV_LINKS, buildWhatsAppHref } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(254,250,245,0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(229,221,213,0.8)" : "none",
        boxShadow: isScrolled ? "0 1px 12px rgba(28,26,23,0.06)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label={`${BUSINESS_NAME} - ir para o topo`}
          >
            {/* SUBSTITUIR: adicionar logo real com next/image */}
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-bold text-sm flex-shrink-0"
              style={{ background: "linear-gradient(135deg, var(--ocean-700), var(--ocean-500))" }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M2 12.5C2 12.5 5 6 12 6C19 6 22 12.5 22 12.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M2 12.5C3.5 14.5 6 18 12 18C18 18 20.5 14.5 22 12.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: isScrolled ? "var(--ocean-800)" : "#ffffff",
                transition: "color 0.3s",
              }}
            >
              {BUSINESS_NAME}
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isScrolled ? "var(--brand-text)" : "rgba(255,255,255,0.88)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <a
              href={buildWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verificar disponibilidade no WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "var(--coral)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "0.875rem",
                padding: "0.5625rem 1.25rem",
                borderRadius: "0.625rem",
                boxShadow: "0 3px 14px rgba(252,112,53,0.4)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background-color 0.2s, transform 0.15s",
              }}
            >
              Verificar Disponibilidade
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: isScrolled ? "var(--brand-text)" : "#ffffff" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div
            className="lg:hidden border-t pb-5 pt-3"
            style={{
              borderColor: "var(--brand-border)",
              backgroundColor: "rgba(254,250,245,0.98)",
            }}
          >
            <ul className="flex flex-col gap-0.5 mb-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{ color: "var(--brand-text)", fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4">
              <a
                href={buildWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="btn-primary w-full justify-center text-sm"
                aria-label="Verificar disponibilidade no WhatsApp"
              >
                Verificar Disponibilidade
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
