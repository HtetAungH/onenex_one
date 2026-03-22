/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import theme from "./theme"; // Import the theme created above
import Hero from "./components/Hero";
import CryptoLive from "./components/CryptoLive";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalizes CSS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <CryptoLive />
          <Footer />
        </motion.div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
