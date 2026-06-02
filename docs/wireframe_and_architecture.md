# E-Vulcano Siderurgia - Wireframe and Architecture

## Visual Identity Summary
- **Palette**:
  - Primary: Deep Industrial Blue (#1B2B44)
  - Accent: Industrial Orange (#FF6B00)
  - Neutral: Graphite Gray (#333333), Light Steel Gray (#F4F7F9)
- **Typography**: Montserrat (Headlines), Inter (Body)

## Landing Page Wireframe

1. **Navbar (Sticky)**
   - [Logo] | Home | Sobre | Produtos | Diferenciais | [CTA: Solicitar Orçamento]

2. **Hero Section**
   - Background: Industrial video/high-res image with dark overlay.
   - Text: "Liderança e Tecnologia em Soluções Siderúrgicas"
   - Subtext: "Há 50 anos transformando a indústria com precisão e inovação."
   - Buttons: [Nossos Produtos (Primary)] [Fale Conosco (Secondary Outline)]

3. **About Section (Side-by-side)**
   - Left: Content (Title, Description of 50 years history, Mission/Vision).
   - Right: Modern industrial image with an accent border.

4. **Stats Section (Counter Grid)**
   - 50+ Anos de História
   - 1200+ Toneladas/Mês
   - 500+ Projetos Entregues
   - 100% Compromisso com Qualidade

5. **Products/Services Grid**
   - Title: "Nossas Soluções"
   - 6 Cards: [Icon] [Title] [Short Description] [Link: Ver Detalhes]

6. **Competitive Advantages (Icon Grid)**
   - 4 Blocks: Qualidade Certificada, Tecnologia de Ponta, Logística Eficiente, Atendimento Especializado.

7. **Certifications & Partners (Logo Slider)**
   - Scrolling track of monochrome logos.

8. **Testimonials (Slider)**
   - Quote cards with client name/position and company logo.

9. **Final CTA**
   - Background: Dark Blue.
   - Text: "Impulsione sua produção com quem entende de Siderurgia."
   - Button: [Fale com um Consultor]

10. **Footer**
    - Grid: [Logo & Social] [Links Rápidos] [Contato] [Newsletter]
    - Copyright bar.

## React Component Architecture

- `App.jsx`
  - `Navbar.jsx`
  - `Hero.jsx`
  - `SectionTitle.jsx` (Reusable component for section headers)
  - `About.jsx`
  - `Stats.jsx` (`StatItem.jsx`)
  - `Services.jsx` (`ServiceCard.jsx`)
  - `Advantages.jsx` (`AdvantageCard.jsx`)
  - `Certifications.jsx` (`LogoSlider.jsx`)
  - `Testimonials.jsx` (`TestimonialCard.jsx`)
  - `ContactCTA.jsx`
  - `Footer.jsx`
