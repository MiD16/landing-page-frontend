# ArchStudio - Architecture Company Landing Page

A modern, responsive landing page built with React, TypeScript, and TailwindCSS for an architecture company. Features clean design, smooth animations, and full Docker support.

## 🚀 Features

- **Modern Design**: Minimal, elegant architecture-style design with lots of whitespace and strong typography
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Framer Motion animations with intersection observer for scroll reveals
- **Sticky Navbar**: Navigation with smooth scrolling to sections
- **Contact Form**: Functional form with validation (console.log for now)
- **Docker Support**: Complete Docker setup for easy deployment
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Vite for fast development and production builds

## 📦 Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, Projects, etc.)
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── config/              # Configuration files (theme, constants)
├── hooks/               # Custom React hooks
├── assets/              # Static assets (images, fonts)
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind

```

## 🎨 Design System

### Colors

All colors are defined in `src/config/theme.ts`:

- **Primary**: `#1A1A1A` - Main text and headings
- **Secondary**: `#F5F5F5` - Alternative backgrounds
- **Accent**: `#C9A86A` - Gold accent for highlights and CTAs
- **Text**: `#333333` - Body text
- **Background**: `#FFFFFF` - Main background

### Typography

- **Font Family**: Inter (system-ui fallback)
- **Scale**: 12px to 60px
- **Weights**: 400, 500, 600, 700

### Spacing

Consistent 8px grid system:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker & Docker Compose (for containerized setup)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🐳 Docker Setup

### Run with Docker Compose

1. **Build and start the container**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   Open `http://localhost:3000` in your browser

3. **Stop the container**
   ```bash
   docker-compose down
   ```

### Run with Docker Only

1. **Build the image**
   ```bash
   docker build -t archstudio-landing .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:80 archstudio-landing
   ```

3. **Access the application**
   Open `http://localhost:3000`

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 🏗️ Sections

The landing page includes the following sections:

1. **Hero Section**: Full-width background with headline and CTA
2. **Who We Are**: Company introduction with statistics
3. **Our Projects**: Grid gallery of architecture projects
4. **Our Clients**: Client logos showcase
5. **Contact Us**: Contact form with validation
6. **Footer**: Links, company info, and copyright

## 🎯 Reusable Components

### UI Components

- **Button**: Variant support (primary, secondary, outline) and sizes (sm, md, lg)
- **Container**: Centered content container with max-width
- **Section**: Section wrapper with consistent padding
- **Card**: Project card with image, title, and description

### Layout Components

- **Navbar**: Sticky navigation with smooth scrolling
- **Footer**: Multi-column footer with links

## 🔧 Customization

### Changing Colors

Edit `src/config/theme.ts` to update the color palette:

```typescript
export const theme = {
  colors: {
    primary: "#1A1A1A",
    accent: "#C9A86A",
    // ... more colors
  }
};
```

### Updating Content

Each section component contains its own data. For example:
- Projects: `src/components/sections/ProjectsSection.tsx`
- Clients: `src/components/sections/ClientsSection.tsx`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## ✨ Animations

The application uses Framer Motion for:
- Hero section fade-in animations
- Scroll-triggered section reveals
- Staggered grid item animations
- Hover effects on cards and buttons

## 📝 Code Quality

- **ESLint**: Configured for React and TypeScript best practices
- **TypeScript**: Strict mode enabled
- **Component Structure**: Functional components with hooks
- **Naming Conventions**: PascalCase for components, camelCase for variables

## 🚀 Deployment

### Docker Deployment

The easiest way to deploy is using Docker:

```bash
docker-compose up -d --build
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your web server to serve the files

### Recommended Hosting

- Vercel
- Netlify
- AWS S3 + CloudFront
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary.

## 👥 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using React, TypeScript, and TailwindCSS
