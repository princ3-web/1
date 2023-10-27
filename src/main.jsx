import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    customTeal: {
      100: "#A5D8DD",
      200: "#7FC1C7",
      300: "#599AA2",
      400: "#3E858D",
      500: "#155366",
      600: "#0c333f",
      700: "#0e2d33",
      800: "#141e1f",
      900: "#111a19",
    },
    customBlue: {
      500: "#155366",
      600: "#0c333f",
      700: "#0e2d33",
      800: "#141e1f",
      900: "#111a19",
    },
    customPurple: {
      500: "#155366",
      600: "#0c333f",
      700: "#0e2d33",
      800: "#141e1f",
      900: "#111a19",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    subtitle3: {
      fontSize: "0.8rem",
      fontFamily: "Montserrat, sans-serif",
    },
    subtitle4: {
      fontSize: "0.7rem",
      fontFamily: "Montserrat, sans-serif",
    },
    subtitle5: {
      fontSize: "0.5rem",
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
