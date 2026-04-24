# MPP BI Website

Ultra-fast analytics landing page showcasing MPP BI - a 2-tier business intelligence platform that runs business logic inside your database.

## 🚀 Features

- **React** + **TypeScript** for robust UI development
- **Tailwind CSS v4** for modern styling
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- Fully responsive design
- Custom SVG architecture diagrams
- Interactive comparison tables
- Animated benefits sections

## 📦 Tech Stack

- React 19.2.4
- Framer Motion 12.38.0
- Tailwind CSS 4.0
- Lucide React (icons)
- Radix UI (tabs, dialogs)
- TypeScript 5.0

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main application component
│   └── components/
│       ├── Navigation.tsx         # Main navigation header
│       ├── HeroSection.tsx        # Hero with architecture diagram
│       ├── BenefitsSection.tsx    # Key benefits grid
│       ├── TrustedGloballySection.tsx  # Partner logos marquee
│       ├── ProblemSection.tsx     # Problem statement cards
│       ├── ArchitectureSection.tsx     # Architecture comparison
│       ├── EliminatedSection.tsx  # What was removed
│       ├── LPEvsDaxSection.tsx    # Language comparison
│       ├── ComparisonTable.tsx    # Feature comparison table
│       ├── UseCasesSection.tsx    # Industry use cases (tabs)
│       ├── FeaturesGrid.tsx       # Platform features
│       ├── DashboardShowcase.tsx  # Dashboard previews
│       ├── StatsBar.tsx           # Statistics banner
│       ├── PricingSection.tsx     # Pricing tiers
│       ├── CTASection.tsx         # Final call-to-action
│       ├── Footer.tsx             # Site footer
│       └── FloatingCTA.tsx        # Floating action button
├── styles/
│   ├── globals.css               # Global styles & animations
│   ├── fonts.css                 # Font imports
│   └── theme.css                 # Tailwind theme tokens
└── public/
    ├── mppbi-logo.png
    └── mppinsights-logo.png
```

## 🎨 Key Components

### HeroSection
Includes custom animated SVG architecture diagram comparing traditional BI vs MPP BI approach.

### BenefitsSection
Dark theme section with 5 benefit cards showcasing speed, scalability, security, affordability, and live data.

### ArchitectureSection
Side-by-side comparison of legacy BI stack vs MPP BI 2-tier architecture with animated elements.

### UseCasesSection
Tabbed interface showing industry-specific use cases (Financial Services, Oil & Gas, Insurance, Construction, Publishing, Government).

### ComparisonTable
Detailed feature comparison between MPP BI, Tableau, and Power BI.

## 🌐 Deployment

This project is built for Figma Make but can be deployed to any static hosting:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build and push `dist/` folder

## 📄 License

All rights reserved © 2026 MPP Insights LLC

## 🔗 Links

- [MPP Insights](https://mpp-insights.com)
- [Original Design Files](https://github.com/tyrazyra/mppbi-website)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion