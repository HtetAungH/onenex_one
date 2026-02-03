import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0056b3", // The OneNex blue
      dark: "#001a4d",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#001a4d",
      secondary: "#666666",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none", // Keeps buttons from being all caps by default
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Global rounded buttons
          padding: "10px 24px",
        },
      },
    },
  },
});

export default theme;
