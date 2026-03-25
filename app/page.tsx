import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Services } from "@/components/sections/services";
import { InfoCards } from "@/components/sections/info-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { CtaSection } from "@/components/sections/cta-section";
import { Gallery } from "@/components/sections/gallery";
import { Nearby } from "@/components/sections/nearby";
import { FloatingCta } from "@/components/ui/floating-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — headline + CTAs + badge de avaliação */}
        <Hero />

        {/* 2. Features — diferenciais do apartamento */}
        <Features />

        {/* 3. InfoCards — números de impacto (42m², 5 hóspedes, +45 avaliações, nota 9.3) */}
        <InfoCards />

        {/* 4. Services — apartamento completo com preço */}
        <Services />

        {/* 5. Gallery — carrossel de fotos dos cômodos */}
        <Gallery />

        {/* 5. Testimonials — depoimentos de hóspedes */}
        <Testimonials />

        {/* 6. FAQ — perguntas frequentes com accordion */}
        <Faq />

        {/* 7. Location — mapa + endereço + horários + redes sociais */}
        <Location />

        {/* 8. Proximidades — o que tem perto do apartamento */}
        <Nearby />

        {/* 9. CTA final — urgência + botões de reserva */}
        <CtaSection />
      </main>
      <Footer />

      {/* Botão flutuante WhatsApp (mobile only) */}
      <FloatingCta />
    </>
  );
}
