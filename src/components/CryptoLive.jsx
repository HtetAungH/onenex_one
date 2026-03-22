// CryptoLive.jsx
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          bgcolor: "background.default",
        }}
      >
        <CircularProgress sx={{ color: "primary.main" }} />
      </Box>
    );

  if (isError)
    return (
      <Box sx={{ py: 10, textAlign: "center", bgcolor: "background.default" }}>
        <Typography color="error">Failed to load market data</Typography>
      </Box>
    );

  return (
    <Box sx={{ bgcolor: "background.default", py: 12 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            mb: 6,
            fontWeight: 800,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Live Market{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            Insights
          </Box>
        </Typography>

        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data?.map((coin) => {
            const isPositive = parseFloat(coin.priceChangePercent) >= 0;
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={coin.symbol}
                component={motion.div}
                variants={itemVariants}
              >
                <Paper
                  component={motion.div}
                  whileHover={{
                    y: -8,
                    boxShadow: "0px 20px 40px rgba(0,26,77,0.15)",
                    transition: { duration: 0.3 },
                  }}
                  sx={{
                    p: 3.5,
                    bgcolor: "background.paper",
                    borderRadius: 4,
                    textAlign: "center",
                    border: "1px solid rgba(0,26,77,0.05)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle Top Accent */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      bgcolor: isPositive ? "success.main" : "error.main",
                      opacity: 0.8,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "text.primary", mb: 1 }}
                  >
                    {coin.symbol.replace("USDT", "")}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
                  >
                    $
                    {parseFloat(coin.lastPrice).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-flex",
                      px: 2,
                      py: 0.75,
                      borderRadius: 2,
                      bgcolor: isPositive
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                      color: isPositive ? "success.main" : "error.main",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {isPositive ? "+" : ""}
                      {parseFloat(coin.priceChangePercent).toFixed(2)}%
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoLive;
