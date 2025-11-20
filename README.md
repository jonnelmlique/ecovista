# EcoVista - Sustainable Real Estate Platform

A modern, responsive real estate website focused on eco-friendly and sustainable properties. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- **🌱 Sustainable Focus**: Specialized platform for eco-friendly properties with green certifications
- **🎨 Modern Design System**: Beautiful emerald green branding with smooth animations and transitions
- **📱 Fully Responsive**: Optimized for all devices with mobile-first approach
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **🔍 Advanced Search**: Interactive property search with location and type filters
- **⚡ Performance Optimized**: Built with Next.js 16 App Router for optimal performance
- **♿ Accessibility**: Semantic HTML and proper contrast ratios for inclusive design

## 🏗️ Project Structure

```
ecovista/
├── app/
│   ├── components/
│   │   ├── about.tsx          # Company mission and sustainability focus
│   │   ├── contact.tsx        # Contact form and information
│   │   ├── footer.tsx         # Site footer
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero.tsx           # Landing section with search
│   │   ├── icons.tsx          # Custom SVG icon components
│   │   ├── properties.tsx     # Featured properties showcase
│   │   ├── services.tsx       # Real estate services
│   │   └── theme-provider.tsx # Dark/light mode provider
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main homepage
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎯 Key Sections

1. **Hero Section**: Eye-catching landing with animated background, property search, and trust indicators
2. **Featured Properties**: Curated selection of eco-friendly homes with detailed cards
3. **About Section**: Company mission, vision, and sustainability commitment with animated stats
4. **Services Section**: Comprehensive real estate services including green financing and consultation
5. **Contact Section**: Contact form and company information for client communication

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Custom SVG icon components
- **Fonts**: Inter font family
- **Theme**: Custom dark/light mode with CSS variables
- **Linting**: ESLint with Next.js configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jonnelmlique/ecovista.git
   cd ecovista
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Color Palette
- **Primary**: Emerald green (#10b981) with nature-inspired gradients
- **Secondary**: Teal and green variations for depth
- **Background**: Dynamic light/dark mode with CSS custom properties
- **Accent**: Subtle emerald tones for highlights and borders

### Typography
- **Font Family**: Inter - clean, modern, and highly readable
- **Scale**: Responsive typography from mobile to desktop
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Animations & Interactions
- **Smooth Transitions**: 300ms duration for hover states
- **Transform Effects**: Scale and translate on interactive elements
- **Loading States**: Pulse animations for dynamic content
- **Floating Elements**: Subtle bounce animations in hero section

## 🔧 Customization

### Theme Configuration
The design system uses CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: 142 69 173;
  --emerald: 16 185 129;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

### Component Structure
- All components are client-side rendered with `'use client'`
- Modular icon system in `components/icons.tsx`
- Responsive design with Tailwind CSS breakpoints
- Consistent spacing and layout patterns

## 📦 Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

The build process optimizes:
- Static generation for better performance
- Image optimization
- CSS purging and minification
- JavaScript bundling and tree-shaking

## 🌟 Key Features Implementation

### Interactive Search
- Real-time property filtering
- Location-based search with dropdown
- Popular search tags with hover effects
- Responsive search card design

### Sustainability Focus
- Green certification indicators
- Eco-friendly property highlights
- Environmental impact messaging
- Sustainable living promotion

### Performance Optimizations
- Next.js 16 App Router for optimal loading
- Component-level code splitting
- Optimized images and assets
- Minimal JavaScript bundle size
## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
