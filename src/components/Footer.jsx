// Footer.jsx
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{
        bgcolor: "primary.main", // Deep Navy
        color: "white",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 8,
            color: "white",
            fontSize: { xs: "1.8rem", md: "3rem" },
            lineHeight: 1.2,
            fontWeight: 800,
          }}
        >
          WE ARE YOUR PARTNER FOR{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            INNOVATION & GROWTH
          </Box>
        </Typography>

        <Grid container spacing={6}>
          {/* Column 1 */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 3, color: "secondary.main" }}
            >
              WE ONENEX
            </Typography>
            {["Cases", "Contact us", "Services"].map((text) => (
              <Link
                key={text}
                href="#"
                display="block"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 1.5,
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { color: "white", pl: 1, transition: "0.3s" },
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 3, color: "secondary.main" }}
            >
              WE OFFER
            </Typography>
            {[
              "UI/UX Development",
              "Web Development",
              "Android Development",
              "iOS Development",
            ].map((text) => (
              <Link
                key={text}
                href="#"
                display="block"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 1.5,
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { color: "white", pl: 1, transition: "0.3s" },
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Column 3: Socials */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 3, color: "secondary.main" }}
            >
              FOLLOW US
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[<Facebook />, <Instagram />, <LinkedIn />, <YouTube />].map(
                (icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.2)",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "primary.main",
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                ),
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 900, color: "white", letterSpacing: 2 }}
          >
            ONENEX
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            ONENEX © COPYRIGHT 2026. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
