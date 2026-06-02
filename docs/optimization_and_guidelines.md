# E-Vulcano Siderurgia - Optimization and Enhancement Guidelines

## 1. Visual Enhancements & Assets
### Image Strategy
- **Hero**: Use high-shutter-speed photography of molten metal or structural steel assembly. *Recommendation*: Search for "Liquid steel" or "Heavy industry" on Unsplash/Shutterstock.
- **About**: Action shots of engineers with tablets on-site to blend "Traditional Industry" with "Technology".
- **Icons**: Use Phosphor Icons or Lucide-React for a thin, modern look (stroke weight: 1.5px).

### Animations (Framer Motion)
- **Reveal on Scroll**: Use `whileInView={{ opacity: 1, y: 0 }}` with a `staggerChildren` effect for grids.
- **Smooth Parallax**: Apply subtle parallax to the Hero background image.
- **Button Micro-interactions**: Scale `1.05` on hover and `0.95` on tap.

## 2. SEO Strategy
- **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, and `<article>` correctly.
- **Meta Tags**:
  - Title: "Vulcano Siderurgia | Soluções de Engenharia e Caldeiraria Pesada"
  - Description: "Líder em soluções para a indústria siderúrgica há 50 anos. Projetos especiais, caldeiraria e produtos patenteados Vulcan."
- **Alt Text**: Every image must have descriptive alt text (e.g., "Engenheiro inspecionando caldeiraria pesada na Vulcano").

## 3. Accessibility (WCAG 2.1)
- **Color Contrast**: All text must maintain a 4.5:1 ratio against backgrounds (verified in design).
- **Keyboard Navigation**: Ensure all buttons and links have visible `:focus-visible` states.
- **Aria Labels**: Use `aria-label` for icon-only buttons (like the mobile menu).

## 4. Performance
- **Image Optimization**: Use Next.js `<Image />` component or modern `webp` formats with `srcset`.
- **Lazy Loading**: Implement lazy loading for sections below the fold (Testimonials, Footer).
- **Bundle Size**: Tree-shake icons and use Tailwind CSS JIT for minimal CSS footprint.

## 5. Conversão (UX/CRO)
- **Sticky CTA**: The "Solicitar Orçamento" button should remain accessible in the sticky navbar.
- **F-Pattern Layout**: Headings and key information placed where users' eyes naturally scan.
- **Trust Signals**: Position ISO certifications near the final conversion point.
