// ============================================================
// CONSTANTES CENTRALIZADAS — Apê da Jana
// NUNCA edite textos diretamente nos componentes .tsx
// Todas as alterações de conteúdo devem ser feitas aqui.
// ============================================================

export const SITE_URL = "https://apedajana.com.br"; // SUBSTITUIR: com a URL real do domínio

// --- Negócio ---
export const BUSINESS_NAME = "Apê da Jana";
export const OWNER_NAME = "Janaíres Galeno Souza";
export const SEGMENT = "Aluguel de Temporada";
export const CITY = "Praia Grande";
export const STATE = "SP";
export const NEIGHBORHOOD = "Ocian";
export const ADDRESS_STREET = "Rua Comendador Otto Carlos Golanda, 500 - Ap 42 Torre 2";
export const ADDRESS_COMPLEMENT = "Condomínio DEZ PRAIA GRANDE";
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_COMPLEMENT}, ${CITY} - ${STATE}`;
export const ZIP_CODE = "11704-260"; // SUBSTITUIR: com o CEP real

// --- Contatos ---
export const WHATSAPP_NUMBER = "5513996322098";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site do Apê da Jana e gostaria de saber como posso agendar uma diária 😊";
export const EMAIL = "apedajana@gmail.com"; // SUBSTITUIR: com o e-mail real

// --- Plataformas de reserva ---
export const BOOKING_URL =
  "https://www.booking.com/hotel/br/apartamento-na-praia-com-ar-condicionado.pt-br.html?aid=304142&label=gen173nr-1BCAsoIEIoYXBhcnRhbWVudG8tbmEtcHJhaWEtY29tLWFyLWNvbmRpY2lvbmFkb0gzWARoIIgBAZgBLbgBGMgBDNgBAegBAYgCAagCBLgC8vPjuQbAAgHSAiQ1MTNhZDM2MS00ZDljLTQ1YTEtYjU2Mi02YjQ1NmY4NjdiNmTYAgXgAgE";
export const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1335771969994654369";
export const INSTAGRAM_URL = "https://www.instagram.com/ape_da_jana";

// --- Avaliações ---
export const BOOKING_RATING = "9.3";
export const BOOKING_REVIEWS_COUNT = "+45";
export const BOOKING_REVIEWS_LABEL = `${BOOKING_REVIEWS_COUNT} avaliações • Nota ${BOOKING_RATING} no Booking`;

// --- Preços ---
export const PRICE_WEEKDAY = "R$ 260";
export const PRICE_WEEKEND = "R$ 300";
export const PRICE_FROM = PRICE_WEEKDAY;
export const PRICE_TO = PRICE_WEEKEND;
export const PRICE_LABEL = `A partir de ${PRICE_FROM}/noite`;
export const PRICE_NOTE = "Valores podem variar em feriados e datas especiais";

// --- Horários ---
export const CHECKIN_TIME = "A partir das 15h";
export const CHECKOUT_TIME = "Até as 11h";

// --- Coordenadas / Mapa ---
// SUBSTITUIR: gerar embed URL em https://www.google.com/maps/embed?pb=...
export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=-24.027359540229345,-46.47924305530901&hl=pt-BR&z=15&output=embed";
export const GEO_LATITUDE = "-24.027359540229345";
export const GEO_LONGITUDE = "-46.47924305530901";

// ============================================================
// TEXTOS — Hero
// ============================================================
export const HERO = {
  headline: "Seu refúgio na beira da praia em Praia Grande",
  subheadline:
    "Acorde com a brisa do mar, a poucos passos da areia. Reserva direta pelo WhatsApp — sem taxas de plataforma, com atendimento personalizado da Jana.",
  cta_primary: "Verificar Disponibilidade no WhatsApp",
  cta_booking: "Reservar no Booking",
  cta_airbnb: "Reservar no Airbnb",
  badge_rating: BOOKING_REVIEWS_LABEL,
  price_from: PRICE_LABEL,
  price_note: PRICE_NOTE,
};

// ============================================================
// TEXTOS — Features (Diferenciais)
// ============================================================
export const FEATURES_TITLE = "Por que escolher o Apê da Jana?";
export const FEATURES_SUBTITLE =
  "Tudo que você precisa para descansar de verdade, a poucos metros do mar.";

export const FEATURES = [
  {
    id: "praia",
    icon: "Waves",
    title: "A 2 minutos da praia do Ocian",
    description:
      "Localização privilegiada no bairro Ocian, uma das praias mais tranquilas de Praia Grande. Acorde e já esteja na areia.",
  },
  {
    id: "ar",
    icon: "Wind",
    title: "Ar-condicionado em todos os quartos",
    description:
      "Noites frescas garantidas mesmo no verão. Ar-condicionado split nos dois quartos para o conforto de todos os hóspedes.",
  },
  {
    id: "wifi",
    icon: "Wifi",
    title: "Wi-Fi de alta velocidade",
    description:
      "Internet rápida para quem precisa trabalhar remotamente ou quer maratonar uma série na Netflix sem travar.",
  },
  {
    id: "estacionamento",
    icon: "Car",
    title: "Estacionamento incluso",
    description:
      "Vaga de garagem coberta incluída sem custo adicional. Chegue de carro com total tranquilidade.",
  },
  {
    id: "netflix",
    icon: "Tv",
    title: "Netflix incluída",
    description:
      "Entretenimento garantido nas noites de preguiça. Televisão com Netflix para curtir depois de um dia de praia.",
  },
  {
    id: "espaco",
    icon: "Home",
    title: "42m² bem distribuídos",
    description:
      "Apartamento compacto e funcional com 1 quarto de casal e 1 quarto com beliche. Espaço organizado para até 5 hóspedes.",
  },
];

// ============================================================
// TEXTOS — Serviços / Quartos
// ============================================================
export const SERVICES_TITLE = "O apartamento";
export const SERVICES_SUBTITLE =
  "Conheça os detalhes do espaço que vai ser a sua casa na praia.";

export const SERVICES = [
  {
    id: "casal",
    name: "Quarto Casal",
    description:
      "Quarto com cama de casal, ar-condicionado split, guarda-roupa e iluminação aconchegante. Ideal para casais em lua de mel ou viagem a dois.",
    features: ["Cama de casal", "Ar-condicionado", "Guarda-roupa"],
    highlight: false,
  },
  {
    id: "beliche",
    name: "Quarto Beliche",
    description:
      "Quarto com beliche, perfeito para crianças ou para o quarto extra de um grupo de amigos. Também conta com ar-condicionado split.",
    features: ["Beliche (2 camas)", "Ar-condicionado", "Ideal para crianças"],
    highlight: false,
  },
  {
    id: "ape",
    name: "Apartamento Completo",
    description:
      "Reserve o apartamento inteiro. Capacidade total de 5 hóspedes com cozinha equipada, sala de estar, banheiro e todas as comodidades.",
    features: [
      "2 quartos completos",
      "Cozinha equipada",
      "Sala com Netflix",
      "Wi-Fi incluso",
      "Estacionamento incluso",
      "Até 5 hóspedes",
    ],
    highlight: true,
    price: PRICE_LABEL,
    price_note: `${PRICE_FROM} a ${PRICE_TO} por noite • ${PRICE_NOTE}`,
  },
];

// ============================================================
// TEXTOS — InfoCards
// ============================================================
export const INFO_CARDS = [
  {
    id: "area",
    value: "42m²",
    label: "de apartamento",
    description: "Bem distribuídos e confortáveis",
    icon: "Maximize",
  },
  {
    id: "hospedes",
    value: "5",
    label: "hóspedes no máximo",
    description: "Perfeito para famílias e grupos",
    icon: "Users",
  },
  {
    id: "avaliacoes",
    value: BOOKING_REVIEWS_COUNT,
    label: "avaliações no Booking",
    description: "Hóspedes satisfeitos e fidelizados",
    icon: "MessageSquare",
  },
  {
    id: "nota",
    value: BOOKING_RATING,
    label: "nota no Booking",
    description: "Reconhecimento de excelente hospedagem",
    icon: "Star",
  },
];

// ============================================================
// TEXTOS — Depoimentos
// ============================================================
// SUBSTITUIR: todos os depoimentos abaixo com avaliações reais dos hóspedes
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Família Rodrigues",
    origin: "São Paulo - SP",
    rating: 5,
    text: "Lugar incrível! Ficamos 5 dias com as crianças e foi perfeito. O apartamento é muito organizado, a praia do Ocian é tranquila e a Jana foi super atenciosa em todas as dúvidas. Com certeza voltamos!", // SUBSTITUIR: depoimento real
  },
  {
    id: 2,
    name: "Ana Paula M.",
    origin: "Campinas - SP",
    rating: 5,
    text: "Muito bem localizado! A gente chegou, colocou o short e já estava na praia em 2 minutos. O apartamento estava limpíssimo, o ar-condicionado gelando. Recomendo demais para quem busca sossego em Praia Grande.", // SUBSTITUIR: depoimento real
  },
  {
    id: 3,
    name: "Carlos e Renata",
    origin: "Ribeirão Preto - SP",
    rating: 5,
    text: "Passamos nossa lua de mel no Apê da Jana. Foi simplesmente especial. Apartamento aconchegante, pertinho do mar, a Jana respondeu cada dúvida rapidinho. Nota 10, merecia mais que 9.3!", // SUBSTITUIR: depoimento real
  },
  {
    id: 4,
    name: "Grupo de Amigos - Turma do Juca",
    origin: "Sorocaba - SP",
    rating: 5,
    text: "Fomos 5 amigos e coubemos superbem. Os dois quartos são ótimos, a sala é gostosa, a cozinha tem tudo. A praia do Ocian é top. Já estamos planejando a próxima viagem pro Apê da Jana!", // SUBSTITUIR: depoimento real
  },
];

// ============================================================
// TEXTOS — FAQ
// ============================================================
export const FAQ_TITLE = "Perguntas frequentes";
export const FAQ_SUBTITLE =
  "Tire suas dúvidas antes de reservar. Qualquer coisa, é só chamar no WhatsApp!";

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Qual é o horário de check-in e check-out?",
    answer: `O check-in e o check-out estão a confirmar — entre em contato pelo WhatsApp para alinhar o melhor horário conforme sua chegada. Fazemos o possível para acomodar os hóspedes com flexibilidade.`, // SUBSTITUIR: com os horários reais quando definidos
  },
  {
    id: "faq-2",
    question: "O apartamento aceita pets?",
    answer:
      "Infelizmente, o apartamento não aceita animais de estimação. Essa política existe para garantir a higiene e o conforto de todos os hóspedes.",
  },
  {
    id: "faq-3",
    question: "Quantas pessoas podem se hospedar?",
    answer:
      "O apartamento acomoda no máximo 5 hóspedes. São 1 quarto de casal (2 pessoas) e 1 quarto com beliche (2 na cama de baixo + 1 na de cima, ou a critério dos hóspedes).",
  },
  {
    id: "faq-4",
    question: "O estacionamento está incluso na diária?",
    answer:
      "Sim! Há uma vaga de garagem coberta incluída na diária, sem custo adicional. Basta informar na reserva para reservarmos a vaga.",
  },
  {
    id: "faq-5",
    question: "Qual é a diferença entre reservar pelo WhatsApp e pelo Booking ou Airbnb?",
    answer:
      "Reservar diretamente pelo WhatsApp pode ter condições diferenciadas e atendimento personalizado da proprietária. Já o Booking e o Airbnb oferecem mais garantias e proteção de pagamento para quem prefere plataformas conhecidas. Aceitamos das duas formas!",
  },
  {
    id: "faq-6",
    question: "O apartamento fica perto de qual praia em Praia Grande?",
    answer:
      "O Apê da Jana fica no bairro Ocian, em Praia Grande - SP, a apenas 2 minutos a pé da praia. O Ocian é um dos bairros mais tranquilos de Praia Grande, ideal para famílias e casais que buscam sossego.",
  },
  {
    id: "faq-7",
    question: "Como é feita a limpeza do apartamento?",
    answer:
      "O apartamento é entregue completamente limpo e organizado para cada check-in. Para estadias longas, uma limpeza intermediária pode ser combinada com a proprietária.",
  },
  {
    id: "faq-8",
    question: "Qual é a faixa de preço para alugar o apartamento em Praia Grande?",
    answer: `As diárias variam de ${PRICE_FROM} a ${PRICE_TO}, dependendo da temporada (alta, baixa ou feriados). Entre em contato pelo WhatsApp com sua data para receber o valor exato e verificar a disponibilidade.`,
  },
];

// ============================================================
// TEXTOS — CTA Final
// ============================================================
export const CTA_SECTION = {
  title: "Pronto para acordar com a brisa do mar?",
  subtitle:
    "Reserve sua estadia com a Jana agora e garanta as melhores datas. Atendimento rápido e personalizado.",
  badge: BOOKING_REVIEWS_LABEL,
  cta_whatsapp: "Falar com a Jana no WhatsApp",
  cta_booking: "Ver no Booking",
  cta_airbnb: "Ver no Airbnb",
};

// ============================================================
// TEXTOS — Location
// ============================================================
export const LOCATION = {
  title: "Onde fica o Apê da Jana",
  subtitle: "No coração do bairro Ocian, Praia Grande - SP",
  address: ADDRESS_FULL,
  checkin_label: "Check-in",
  checkin_value: CHECKIN_TIME,
  checkout_label: "Check-out",
  checkout_value: CHECKOUT_TIME,
  rules: ["Não aceita pets", "Máximo 5 hóspedes", "Não é permitido festas ou eventos"],
};

// ============================================================
// TEXTOS — Proximidades
// ============================================================
export const NEARBY_TITLE = "O que tem por perto";
export const NEARBY_SUBTITLE = "Tudo que você precisa a poucos minutos do apartamento.";

export const NEARBY_ITEMS = [
  { id: "praia",      icon: "Beach",      label: "Praia do Ocian",        distance: "2 min a pé" },
  { id: "super",      icon: "Cart",       label: "Supermercado",          distance: "5 min" },
  { id: "restaurante",icon: "Utensils",   label: "Restaurantes",          distance: "5 min" },
  { id: "pizza",      icon: "Pizza",      label: "Pizzarias",             distance: "10 min" },
  { id: "parque",     icon: "Ferris",     label: "Parque de Diversões",   distance: "10 min" },
  { id: "turistico",  icon: "Landmark",   label: "Centro Turístico",      distance: "15 min" },
  { id: "mcdonalds",  icon: "Burger",     label: "McDonald's",            distance: "10 min" },
  { id: "banco",      icon: "Bank",       label: "Banco / Caixa",         distance: "10 min" },
  { id: "farmacia",   icon: "Pills",      label: "Farmácia",              distance: "5 min" },
];

// ============================================================
// TEXTOS — Footer
// ============================================================
export const FOOTER = {
  owner: `${OWNER_NAME} | ${BUSINESS_NAME}`,
  copyright: `© ${new Date().getFullYear()} ${BUSINESS_NAME}. Todos os direitos reservados.`,
  privacy_policy: "#", // SUBSTITUIR: com link real para política de privacidade
  terms: "#", // SUBSTITUIR: com link real para termos de uso
};

// ============================================================
// NAVEGAÇÃO
// ============================================================
export const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Diferenciais", href: "#features" },
  { label: "O Apartamento", href: "#services" },
  { label: "Avaliações", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Localização", href: "#location" },
];

// ============================================================
// HELPERS — WhatsApp
// ============================================================
export function buildWhatsAppHref(message?: string): string {
  const msg = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
