# 🚀 OneNex | High-Performance React Landing Page

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui)](https://mui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer)](https://www.framer.com/motion/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=react-query)](https://tanstack.com/query/latest)

OneNex is a premium, high-fidelity React landing page designed to showcase cutting-edge digital solutions. This project emphasizes pixel-perfect UI recreation, production-grade animations, and seamless external data integration.

---

## ✨ Project Overview

This repository contains the source code for the OneNex branding project, optimized for performance, accessibility, and visual excellence.

### 🌟 Key Features

- **Premium UI & UX**: Built with a sleek, modern dark-themed aesthetic featuring radial gradients and glassmorphism.
- **Dynamic Animations**: Leverages **Framer Motion** for staggered entrance effects, scroll-triggered transitions, and pulsing indicator badges.
- **Real-time Market Insights**: Integrated with the **Binance API** via **TanStack Query** to provide live crypto data with optimized caching and state management.
- **Infinite Logo Marquee**: A custom, performance-optimized horizontal marquee showcasing technology partners.
- **Fully Responsive**: Architected using **Material UI (MUI)** for a seamless experience across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack & Architecture

### Core Technologies

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Material UI (MUI)](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)

### Technical Implementation Details

- **State Management**: Using `QueryClient` for efficient caching (60s stale time) and declarative loading/error states.
- **Animation Strategy**: Implemented using variants for reusable, staggered motion patterns.
- **Theme Centralization**: All global styles, colors, and typography are managed in `src/theme.js` for consistency.

---

## 📁 Project Structure

```text
src/
 ├─ components/
 │   ├─ Hero.jsx           # Premium intro with animations & marquee
 │   ├─ LogoMarquee.jsx    # Smooth infinite horizontal scroll
 │   ├─ CryptoLive.jsx     # Real-time data visualization via TanStack Query
 │   └─ Footer.jsx         # Thematic footer with social integrations
 ├─ theme.js               # Centralized MUI theme configuration
 ├─ App.jsx                # Main application entry & Query Provider
 └─ index.css              # Global baseline styles
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/onenex.git
cd onenex
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

---

## � Docker Support

You can also run the application using Docker for a consistent, production-like environment:

### Using Docker Compose (Recommended)

```bash
docker-compose up -d --build
```

The app will be available at [http://localhost:8080](http://localhost:8080).

### Using Docker Directly

1. **Build the image**:
   ```bash
   docker build -t onenex-app .
   ```
2. **Run the container**:
   ```bash
   docker run -p 8080:80 onenex-app
   ```

---

## �📌 Purpose & Context

Developed as a showcase of modern frontend engineering practices, this project demonstrates:

- Clean, component-based architecture.
- Efficient handling of asynchronous data.
- High-fidelity UI implementation from design references.
- Production-ready performance optimizations.

---

<div align="center">
  <p>Built with ❤️ by OneNex Team</p>
</div>
