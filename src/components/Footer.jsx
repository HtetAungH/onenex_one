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
        bgcolor: "background.default", // Pulls #ffffff from theme
        color: "text.primary", // Pulls #001a4d from theme
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Branding Message */}
        <Typography
          variant="h3"
          sx={{
            mb: 8,
            color: "primary.main", // Pulls the OneNex blue
            fontSize: { xs: "1.8rem", md: "3rem" },
            lineHeight: 1.2,
          }}
        >
          WE ARE YOUR PARTNER FOR <br />
          <Box component="span" sx={{ color: "text.primary" }}>
            INNOVATION & GROWTH
          </Box>
        </Typography>

        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              WE ONENEX
            </Typography>
            {["Cases", "Contact us", "Services"].map((text) => (
              <Link
                key={text}
                href="#"
                display="block"
                sx={{
                  color: "text.black",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
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
                  color: "text.black",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Column 3: Socials */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              FOLLOW US
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[<Facebook />, <Instagram />, <LinkedIn />, <YouTube />].map(
                (icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "primary.main",
                      bgcolor: "rgba(0, 86, 179, 0.05)", // Subtle blue tint
                      "&:hover": { bgcolor: "primary.main", color: "white" },
                    }}
                  >
                    {icon}
                  </IconButton>
                ),
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "text.primary" }} />

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
            variant="h3"
            sx={{ fontWeight: 900, color: "text.primary" }}
          >
            onenex
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            ONENEX © COPYRIGHT 2026. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
