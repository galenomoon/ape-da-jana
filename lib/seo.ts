import type { Metadata } from "next";
import { BUSINESS_NAME, CITY, SITE_URL } from "./constants";

export const DEFAULT_KEYWORDS = [
  "apartamento para alugar em Praia Grande",
  "hospedagem Praia Grande Ocian",
  "aluguel de temporada Praia Grande SP",
  "apartamento temporada Praia Grande",
  "aluguel praia Ocian Praia Grande",
  "apartamento beira mar Praia Grande",
  "temporada Praia Grande SP",
  "apartamento 2 quartos Praia Grande",
  "aluguel Praia Grande família",
  "apartamento perto da praia Praia Grande",
  BUSINESS_NAME,
  `${BUSINESS_NAME} Praia Grande`,
];

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = `${BUSINESS_NAME} | Apartamento de Temporada em ${CITY} - Ocian`;
  const description =
    "Alugue o Apê da Jana — apartamento de temporada a 2 minutos da praia do Ocian em Praia Grande - SP. 2 quartos, até 5 hóspedes, ar-condicionado, Wi-Fi, Netflix e estacionamento. Nota 9.3 no Booking com +45 avaliações.";

  return {
    title: {
      default: title,
      template: `%s | ${BUSINESS_NAME}`,
    },
    description,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
    creator: BUSINESS_NAME,
    publisher: BUSINESS_NAME,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_URL,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`, // SUBSTITUIR: adicionar og-image.jpg em /public com foto real do apartamento (1200x630px)
          width: 1200,
          height: 630,
          alt: `${BUSINESS_NAME} — Apartamento de Temporada em Praia Grande - Ocian`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.jpg`], // SUBSTITUIR: mesma imagem do OG
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      google: "SUBSTITUIR_COM_GOOGLE_SITE_VERIFICATION", // SUBSTITUIR: com o código do Google Search Console
    },
    ...overrides,
  };
}
