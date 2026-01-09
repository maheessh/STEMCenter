# Southeastern Northshore STEM Center

The official website for the Southeastern Northshore STEM Center, part of the LaSTEM Region 9 network serving Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington parishes in Louisiana.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS Variables
- **UI Components**: Custom component library with shadcn/ui patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application entry
│   ├── globals.css         # Global styles and CSS variables
│   └── ClientBody.tsx      # Client-side body wrapper
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── SubNav.tsx
│   │   └── Logo.tsx
│   ├── sections/           # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExploreSection.tsx
│   │   ├── HardwareSection.tsx
│   │   ├── PrintRequestSection.tsx
│   │   └── ContactSection.tsx
│   └── views/              # Full page views
│       ├── HomeView.tsx
│       ├── StaffView.tsx
│       ├── AdvisoryView.tsx
│       ├── ScienceFairView.tsx
│       ├── SeaPerchView.tsx
│       └── ScholarsView.tsx
├── constants/              # Static data and configuration
│   ├── data.ts             # Staff, programs, schedules
│   └── images.ts           # Image URL management
├── hooks/                  # Custom React hooks
│   ├── useScrolled.ts
│   ├── useViewState.ts
│   └── useMobileMenu.ts
├── lib/                    # Utility functions
│   └── utils.ts
└── types/                  # TypeScript type definitions
    └── index.ts
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/stem-center.git
cd stem-center

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Linting & Formatting

```bash
# Run TypeScript check and ESLint
npm run lint

# Format code with Biome
npm run format
```

## 🎨 Design System

### Colors

The design uses CSS custom properties for theming:

- **Primary**: Southeastern Blue (`hsl(215, 100%, 30%)`)
- **Background**: White
- **Foreground**: Near-black
- **Muted**: Light gray for secondary elements

### Components

All UI components are built with:
- Accessibility in mind (ARIA labels, keyboard navigation)
- Responsive design (mobile-first approach)
- Consistent styling through Tailwind CSS utilities

## 📱 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Full metadata, Open Graph, and Twitter cards
- **Performance**: Optimized images, font loading, and minimal JavaScript
- **Accessibility**: WCAG 2.1 compliant components

## 🌐 Programs

- **Region VIII Science Fair** - Annual science competition
- **SeaPerch** - Underwater robotics program
- **STEM Scholars** - High school mentorship program
- **Hardware Lending** - Equipment available for educators
- **3D Printing** - Print request services

## 📄 License

Copyright © 2026 Southeastern Louisiana University. All rights reserved.

## 📧 Contact

- **Email**: stemcenter@southeastern.edu
- **Phone**: (985) 549-3306
- **Address**: SLU Box 10345, Hammond, LA 70402

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.