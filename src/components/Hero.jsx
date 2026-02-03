/* eslint-disable no-unused-vars */
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import LogoMarquee from "./LogoMarquee";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 50%, #1a3a8a 0%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 1. TOP MARQUEE */}
      <LogoMarquee />

      {/* 2. MAIN CONTENT */}
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pb: 10,
        }}
      >
        {/* Technology Partners Label */}
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            mb: 4,
            letterSpacing: 3,
            opacity: 0.7,
            fontWeight: 300,
          }}
        >
          OUR TECHNOLOGY PARTNERS
        </Typography>

        {/* Featured Partners Logos */}
        <Stack
          direction="row"
          spacing={6}
          sx={{ mb: 8, flexWrap: "wrap", justifyContent: "center" }}
        >
          {["amazon web services", "new relic", "DATADOG"].map((partner) => (
            <Typography
              key={partner}
              variant="h5"
              sx={{
                color: "white",
                fontWeight: 900,
                letterSpacing: -0.5,
                opacity: 0.9,
              }}
            >
              {partner}
            </Typography>
          ))}
        </Stack>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "5rem" },
              color: "white",
              lineHeight: 1,
            }}
          >
            TURN YOUR IDEA INTO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "5rem" },
              WebkitTextStroke: "1px #ffffff",
              color: "transparent",
              mb: 6,
            }}
          >
            BUSINESS SOLUTIONS
          </Typography>
        </motion.div>

        {/* CTA Button */}
        <Button
          variant="outlined"
          endIcon={<ArrowForward />}
          sx={{
            color: "white",
            borderColor: "white",
            borderRadius: "50px",
            px: 5,
            py: 2,
            fontSize: "1rem",
            "&:hover": { bgcolor: "white", color: "black" },
          }}
        >
          GET IN TOUCH
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
