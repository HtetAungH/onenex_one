/* eslint-disable no-unused-vars */
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 30%, #1a3a8a 0%, #001a4d 60%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "rgba(0, 212, 255, 0.15)",
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pb: 10,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 3,
            letterSpacing: 4,
            fontWeight: 600,
          }}
        >
          OUR TECHNOLOGY PARTNERS
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          sx={{ mb: 6, flexWrap: "wrap", justifyContent: "center" }}
        >
          {["AWS", "NEW RELIC", "DATADOG"].map((partner) => (
            <Typography
              key={partner}
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontWeight: 700,
                letterSpacing: 1,
                border: "1px solid rgba(255,255,255,0.2)",
                px: 2,
                py: 0.5,
                borderRadius: 2,
              }}
            >
              {partner}
            </Typography>
          ))}
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "5rem" },
              color: "white",
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            TURN YOUR IDEA INTO
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "5rem" },
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.8)",
              lineHeight: 1.1,
              mb: 8,
            }}
          >
            BUSINESS SOLUTIONS
          </Typography>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: "secondary.main",
              color: "#001a4d",
              borderRadius: "50px",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
              "&:hover": {
                bgcolor: "secondary.light",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)",
              },
            }}
          >
            GET IN TOUCH
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
