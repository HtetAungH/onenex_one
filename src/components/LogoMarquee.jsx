/* eslint-disable no-unused-vars */
// LogoMarquee.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const row1 = [
  {
    name: "Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  { name: "DATADOG", logo: "https://cdn.simpleicons.org/datadog/white" },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  { name: "PRIMEVUE", logo: "https://cdn.simpleicons.org/primevue/white" },
];

const row2 = [
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  { name: "New Relic", logo: "https://cdn.simpleicons.org/newrelic/white" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazons3/white" },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
];

const ScrollingRow = ({ items, duration, direction = "left" }) => {
  const isLeft = direction === "left";
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, [items]);

  return (
    <Box sx={{ overflow: "hidden", display: "flex", py: 2 }}>
      <motion.div
        ref={ref}
        animate={{ x: isLeft ? [0, -width] : [-width, 0] }}
        transition={{
          x: { repeat: Infinity, duration: duration, ease: "linear" },
        }}
        style={{ display: "flex", gap: "60px", paddingRight: "60px" }}
      >
        {[...items, ...items].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              whiteSpace: "nowrap",
              opacity: 0.7,
              "&:hover": { opacity: 1 },
              transition: "0.3s",
            }}
          >
            <Box
              component="img"
              src={item.logo}
              alt={item.name}
              sx={{
                height: "30px",
                width: "auto",
                filter: "brightness(0) invert(1)", // Forces white logos
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "white",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: 1.2,
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

const LogoMarquee = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 2,
        pb: 1,
        bgcolor: "#000000", // Ensure background is dark for white logos
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <ScrollingRow items={row1} duration={25} direction="left" />
      <ScrollingRow items={row2} duration={30} direction="right" />
    </Box>
  );
};

export default LogoMarquee;
