Innovation & Growth Branding Project
A high-performance React landing page built to recreate a specific UI design with fluid animations and live data integration. This project was developed as a technical interview task, focusing on clean architecture, responsive design, and professional state management.

🚀 Key Technical Decisions
1. State Management & API Integration
To handle the requirement for external API data and demonstrate proper state management, I implemented TanStack Query (React Query):

Caching: The application caches live market data for 1 minute (staleTime: 60000), reducing redundant network calls and improving performance.

Loading & Error States: I used declarative flags (isLoading, isError) to provide a seamless user experience, including a loading spinner and graceful error handling.

Optimization: I disabled refetchOnWindowFocus to prevent hitting API rate limits during development and to ensure the application remains stable during the review process.

2. UI & Animation Strategy
Framer Motion: Used to achieve high-fidelity animations that match the reference video:

Staggered Entrance: API data cards enter the view sequentially using staggerChildren to create a premium, polished feel.

Infinite Marquee: A high-performance horizontal scroll for technology logos using a seamless loop and linear easing.

Scroll Triggers: Components use the whileInView prop to trigger animations only when they become visible, optimizing browser resources.

Material UI (MUI): Chosen for its robust grid system and customizable components, ensuring the layout is fully responsive and visually consistent.

3. Visual Fidelity & Branding
Asset Integration: Following the video reference, tech logos were integrated as SVG elements and styled with CSS filters (brightness(0) invert(1)) to maintain a uniform white aesthetic on the dark background.

Parallax Motion: The marquee rows move in opposite directions to create dynamic depth, mimicking the sophisticated look of the original UI.

🛠️ Installation & Setup
Clone the Repository:

Bash
git clone [your-github-link-here]
Install Dependencies:

Bash
npm install
Run the Project Locally:

Bash
npm run dev
📁 Project Structure
/src/components: Contains modular UI components (Hero, LogoMarquee, CryptoLive, Footer).

App.jsx: The main entry point where QueryClientProvider wraps the application to enable global server-state management.

main.jsx: Handles the React DOM rendering and global theme injection.

✅ Meaningful Git History
The development lifecycle is documented through a series of clear, intentional commits:

feat: initial UI structure and theme setup

feat: implement infinite marquee with parallax motion and icons

feat: integrate Binance API with TanStack Query (loading/error/caching)

style: enhance hero and footer with Framer Motion animations

docs: complete README with technical decisions and installation guide
