# 🚀 Innovation & Growth Branding Project

A **high‑performance React landing page** built to accurately recreate a reference UI with **smooth animations** and **live data integration**. This project was developed as a **technical interview task**, with a strong focus on **clean architecture**, **responsive design**, and **professional state management**.

---

## ✨ Key Highlights

- Pixel‑accurate UI recreation from video reference
- Smooth, production‑grade animations
- Live market data with optimized API handling
- Fully responsive layout
- Clean, maintainable React architecture

---

## 🧠 Technical Decisions & Architecture

### 1️⃣ State Management & API Integration

To handle external API data efficiently, **TanStack Query (React Query)** was implemented:

- **Caching Strategy**  
  Live market data is cached for **60 seconds** (`staleTime: 60000`) to reduce unnecessary network requests and improve performance.

- **Loading & Error Handling**  
  Declarative flags (`isLoading`, `isError`) are used to deliver a smooth user experience with proper loading indicators and graceful error states.

- **API Optimization**  
  `refetchOnWindowFocus` is disabled to avoid excessive API calls and prevent rate‑limit issues during development and review.

---

### 2️⃣ UI & Animation Strategy

- **Framer Motion**  
  Used for high‑fidelity animations that closely match the reference design:
  - Staggered entrance animations using `staggerChildren`
  - Scroll‑based animations triggered via `whileInView`
  - Smooth transitions for a premium visual feel

- **Infinite Logo Marquee**  
  A seamless horizontal marquee with linear easing ensures smooth, continuous motion without performance drops.

- **Material UI (MUI)**  
  Selected for its robust grid system, accessibility support, and easy customization, enabling a fully responsive and consistent layout.

---

### 3️⃣ Visual Fidelity & Branding

- **SVG Asset Integration**  
  Technology logos are integrated as SVGs and styled using CSS filters (`brightness(0) invert(1)`) to maintain a clean, white‑on‑dark aesthetic.

- **Parallax Motion Effect**  
  Marquee rows move in opposite directions to create depth and replicate the sophisticated look of the original branding UI.

---

## 🛠️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### Install Dependencies

```bash
npm install
```

### Run the Project Locally

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
 ├─ components/     # Reusable UI components (Hero, LogoMarquee, CryptoLive, Footer)
 ├─ App.jsx         # Application entry point with QueryClientProvider
 ├─ main.jsx        # React DOM rendering & global theme setup
```

---

## 🧾 Meaningful Git History

The development process is documented with clear, intentional commits:

- `feat: initial UI structure and theme setup`
- `feat: implement infinite marquee with parallax motion and icons`
- `feat: integrate Binance API with TanStack Query (loading/error/caching)`
- `style: enhance hero and footer with Framer Motion animations`
- `docs: complete README with technical decisions and setup guide`

---

## 📌 Purpose

This project demonstrates:

- Real‑world React best practices
- Thoughtful API and state management
- Attention to UI/UX details
- Production‑ready animation techniques

Ideal for **technical interviews**, **portfolio showcase**, and **frontend best‑practice demonstrations**.

---

⭐ If you like this project, feel free to star the repository and explore the code!
