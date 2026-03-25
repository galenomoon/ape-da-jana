# Ape da Jana — Landing Page

## Sobre o projeto

Landing page institucional para o Ape da Jana, aluguel de temporada localizado em Praia Grande - SP, bairro Ocian.
Gerada com Next.js 15, TypeScript, Tailwind CSS v4 (componentes customizados).

## Negocio

- **Empresa:** Ape da Jana
- **Proprietaria:** Janaíres Galeno Souza
- **Segmento:** Aluguel de Temporada / Hospedagem
- **Endereco:** Rua Comendador Otto Carlos Golanda, 500 - Ap 42 Torre 2, Condomínio DEZ PRAIA GRANDE, Praia Grande - SP
- **Bairro:** Ocian
- **Capacidade:** 2 quartos / ate 5 hospedes
- **Area:** 42m2

## Contatos configurados

- **WhatsApp:** 5513996322098
- **Mensagem WA:** "Ola! Vim pelo site do Ape da Jana e gostaria de saber como posso agendar uma diaria"
- **Instagram:** https://www.instagram.com/ape_da_jana
- **E-mail:** apedajana@gmail.com — SUBSTITUIR: com o e-mail real

## Plataformas de reserva

- **Booking:** https://www.booking.com/hotel/br/apartamento-na-praia-com-ar-condicionado.pt-br.html
- **Airbnb:** https://www.airbnb.com.br/rooms/1335771969994654369

## Avaliacoes

- **Nota:** 9.3 no Booking
- **Reviews:** +45 avaliacoes

## Identidade visual

- **Cor primaria (CTA/destaque):** #FC7035
- **Cor de fundo:** #F2F4CC
- **Cor acento (azul-mar):** #4A9BB8
- **Estilo:** Aconchegante, praia, moderno
- **Variaveis CSS:** definidas em `app/globals.css` sob `--brand-*`

## Onde ficam os dados

NUNCA edite textos espalhados nos componentes.
Tudo centralizado em `lib/constants.ts`:

- Textos de todas as secoes
- Links de WhatsApp, Instagram, Booking, Airbnb
- Informacoes de contato e endereco
- Depoimentos e FAQ
- Dados do Schema.org

## Secoes da pagina (ordem)

1. `<Navbar />` — links: #hero #features #services #testimonials #faq #location
2. `<Hero />` — headline principal + CTAs (WhatsApp, Booking, Airbnb) + badge de avaliacao
3. `<Features />` — 6 diferenciais: Praia, Ar-condicionado, Wi-Fi, Estacionamento, Netflix, 42m2
4. `<InfoCards />` — 4 numeros: 42m2, 5 hospedes, +45 avaliacoes, 9.3 nota
5. `<Services />` — 3 cards: Quarto Casal, Quarto Beliche, Apartamento Completo (destaque)
6. `<Testimonials />` — 4 depoimentos (grid desktop, carrossel mobile)
7. `<Faq />` — 8 perguntas com accordion
8. `<Location />` — Google Maps + endereco + horarios + regras + redes sociais
9. `<CtaSection />` — CTA final com badge de avaliacao
10. `<Footer />` — marca + navegacao + reservas + copyright
11. `<FloatingCta />` — botao flutuante WhatsApp (mobile only, fixed bottom-right)

## Como fazer alteracoes comuns

**Mudar WhatsApp ou mensagem:**
-> `lib/constants.ts` -> `WHATSAPP_NUMBER` e `WHATSAPP_MESSAGE`

**Mudar textos (headline, descricoes, FAQ):**
-> `lib/constants.ts` — todos os textos estao aqui

**Mudar cores:**
-> `app/globals.css` -> variaveis `--brand-primary`, `--brand-secondary`, `--brand-accent`

**Adicionar/remover depoimento:**
-> `lib/constants.ts` -> array `TESTIMONIALS`

**Adicionar/remover pergunta do FAQ:**
-> `lib/constants.ts` -> array `FAQ_ITEMS`

**Mudar o mapa:**
-> `lib/constants.ts` -> `GOOGLE_MAPS_EMBED_URL`
-> Gerar nova URL em google.com/maps -> Compartilhar -> Incorporar mapa

**Mudar horarios de check-in/checkout:**
-> `lib/constants.ts` -> `CHECKIN_TIME` e `CHECKOUT_TIME`

**Mudar imagens:**
-> Substituir arquivos em `public/` mantendo os mesmos nomes

## Tarefas pendentes para o proprietario

1. Substituir `GOOGLE_MAPS_EMBED_URL` em `lib/constants.ts` com a URL correta do embed do Google Maps
2. Substituir `GEO_LATITUDE` e `GEO_LONGITUDE` com as coordenadas reais
3. Substituir `ZIP_CODE` com o CEP real
4. Substituir `EMAIL` com o e-mail real
5. Substituir `CHECKIN_TIME` e `CHECKOUT_TIME` com os horarios reais
6. Adicionar `public/og-image.jpg` — foto real do apartamento (1200x630px)
7. Substituir todos os depoimentos com avaliacoes reais dos hospedes em `lib/constants.ts`
8. Configurar dominio real e atualizar `SITE_URL` em `lib/constants.ts`
9. Verificar Google Search Console e atualizar `verification.google` em `lib/seo.ts`
10. Adicionar logo real na Navbar e Footer com next/image

## Setup local

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## Deploy no Vercel

1. Criar conta em vercel.com
2. Conectar repositorio Git
3. Importar projeto — Vercel detecta Next.js automaticamente
4. Clicar em Deploy
5. Redeploy automatico a cada git push na branch main

Variaveis de ambiente: nenhuma obrigatoria (projeto estatico).

## NUNCA faca

- Editar textos diretamente nos componentes .tsx
- Usar `any` no TypeScript
- Adicionar `"use client"` sem necessidade real
- Usar `<img>` em vez de `next/image`
- Quebrar as ancoras de navegacao (#hero, #features, #services, etc.)
