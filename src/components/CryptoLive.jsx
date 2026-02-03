/* eslint-disable no-unused-vars */
import {
  Box,
  Typography,
  Container,
  CircularProgress,
  Paper,
  Grid,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const fetchCrypto = async () => {
  const symbols = '["BTCUSDT","ETHUSDT","BNBUSDT","SOLUSDT"]';
  const { data } = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=${symbols}`,
  );
  return data;
};

// Animation Variants for the Container (Stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Items appear one by one
    },
  },
};

// Animation Variants for individual Cards
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CryptoLive = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCrypto,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 10,
          bgcolor: "#ffffff",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 10 }}>
      <Container>
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#001a4d",
              mb: 5,
              fontWeight: 800,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Live Market{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Insights
            </Box>
          </Typography>
        </motion.div>

        {/* Animated Grid Container */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data?.map((coin) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={coin.symbol}
              component={motion.div}
              variants={itemVariants}
            >
              <Paper
                component={motion.div}
                whileHover={{
                  y: -12,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
                sx={{
                  p: 4,
                  bgcolor: "#fcfcfc",
                  border: "1px solid #eee",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: "#001a4d", mb: 1 }}
                >
                  {coin.symbol.replace("USDT", "")}
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  $
                  {parseFloat(coin.lastPrice).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </Typography>

                {/* Pulsing Badge for Price Change */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor:
                        parseFloat(coin.priceChangePercent) > 0
                          ? "rgba(46, 125, 50, 0.1)"
                          : "rgba(211, 47, 47, 0.1)",
                      color:
                        parseFloat(coin.priceChangePercent) > 0
                          ? "#2e7d32"
                          : "#d32f2f",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {parseFloat(coin.priceChangePercent) > 0 ? "+" : ""}
                      {coin.priceChangePercent}%
                    </Typography>
                  </Box>
                </motion.div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoLive;
