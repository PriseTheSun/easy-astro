# EasyJur - Padrões do Projeto

## Paleta de Cores
- **Vermelho**: #E5293F
- **Vermelho Escuro**: #A82130
- **Cinza**: #ACBAC2
- **Cinza Escuro**: #7F919A
- **Preto**: #191919
- **Branco**: #F9F9F9
- **Gradient Vermelho**: #E5293F → #A82130

## Tipografia
- **Fonte Principal**: Montserrat
- **Hierarquia**:
  - H1: 3xl-5xl, font-bold
  - H2: 3xl-4xl, font-bold
  - H3: xl-2xl, font-semibold
  - Body: base-lg, regular

## Componentes
- Shimmer Button (botões com gradiente vermelho)
- Bento Grid (Magic UI style - cards com col-span)
- Dashboard Mockup
- Navigation Menu
- Marquee (depoimentos)
- Animated List / Cards

## Diretrizes de Design
- Estilo clean e moderno
- Mobile-first
- Predominância branco (#F9F9F9)
- Ícones Lucide (outlined, strokeWidth=1.5)
- Animações com Framer Motion
- Seções com gradientes sutis entre branco e #F9F9F9
- Bento Grid: border sutil (border-gray-100), backgrounds com gradiente sutil, hover effects
- Cards com múltiplas colunas (col-span-2, col-span-3)
- Elements: Marquee, Animated Lists, Beams como backgrounds dos cards
- **PROIBIDO layouts 100% centralizados** - Usar grids com "espaço negativo"

## Scroll Suave
- Implementar `Lenis` ou `GSAP ScrollTrigger` para rolagem amanteigada (smooth scroll)
- Experiência premium de navegação

## Artefatos Funcionais Interativos
Cards que parecem micro-UIs de software vivo:
1. **Diagnostic Shuffler:** 3 cards sobrepostos que ciclam verticalmente com bounce (34, 1.56, 0.64, 1) a cada 3s
2. **Telemetry Typewriter:** Feed de texto live (monospace) digitando mensagens com cursor piscante
3. **Protocol Scheduler:** Grade semanal com cursor SVG animado, clique em dia (efeito escala), destaque e "Salvar"

## Estrutura de Componentes
- Header: Navigation com logo, menu, botões
- Hero: Mockup + texto principal
- SocialProof: Empresas parceiras (Marquee)
- Diferenciais: Bento Grid com 6 cards
- Ecosystem: Círculo com ícones orbitando
- ArtificialIntelligence: Bento Grid com IA
- Benefits: Lista animada
- Pricing: Cards de planos
- CTASection: Call to action final
- TestimonialsFAQ: Marquee + FAQ
- Footer: Links e newsletter
