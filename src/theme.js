// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001a4d", // Deep Navy
      light: "#1a3a8a",
      dark: "#000f2e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00d4ff", // Electric Blue for accents
      light: "#66e5ff",
    },
    background: {
      default: "#f8f9fc", // Soft off-white for content
      paper: "#ffffff",
      dark: "#000000",
    },
    text: {
      primary: "#001a4d",
      secondary: "#546e7a",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0px 10px 30px rgba(0, 26, 77, 0.08)",
        },
      },
    },
  },
});

export default theme;
