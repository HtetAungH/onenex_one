/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CryptoLive from "./components/CryptoLive"; // New import
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <CryptoLive />
          <Footer />
        </motion.div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
