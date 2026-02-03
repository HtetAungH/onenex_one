Innovation & Growth Branding Project
A modern, high-performance React landing page developed as part of a technical interview task. The project focuses on recreating a specific UI design with smooth animations and integrating a live data source with professional state management.

🚀 Key Technical Decisions
1. State Management & API Integration
To satisfy the requirement for proper state management and caching, I implemented TanStack Query (React Query):

Caching: The application caches live market data for 1 minute (staleTime: 60000), reducing redundant network calls and improving performance.

Loading & Error States: I utilized declarative flags (isLoading, isError) to provide a seamless user experience, including a loading spinner and graceful error handling.

Optimization: I disabled refetchOnWindowFocus to prevent hitting API rate limits during the development process and to ensure the app remains stable during the review.

2. UI & Animation Strategy
Framer Motion: Used to create the high-fidelity animations seen in the reference video:

Staggered Entrance: API data cards enter the view sequentially using staggerChildren.

Infinite Marquee: A seamless, high-performance horizontal scroll for technology logos.

Scroll Triggers: Components use whileInView to trigger animations only when they become visible to the user.

Material UI (MUI): Employed for its robust layout system and theme-based styling, ensuring a fully responsive design across mobile and desktop.

3. Visual Fidelity
Asset Branding: Per the video reference, tech logos in the marquee were converted to SVG format and stylized using CSS filters (brightness(0) invert(1)) to maintain a uniform white aesthetic on the dark background.

Parallax Effect: The two logo rows move in opposite directions to create a dynamic depth effect as seen in the reference video.

🛠️ Installation & Setup
Clone the Repository:

Bash
git clone [your-github-link]
Install Dependencies:

Bash
npm install
Run the Project Locally:

Bash
npm run dev
📁 Project Structure
/src/components: Contains modular UI components like Hero, LogoMarquee, and Footer.

/src/api: Logic for fetching live market data from the Binance API.

App.jsx: The main entry point where QueryClientProvider wraps the application to enable global state management and caching.

Important Interview Notes
Git History: This project features a clear and meaningful commit history, showing the step-by-step evolution from UI setup to API integration.

Clean Code: All files use functional components and follow modern ES6+ standards for readability and maintainability.
