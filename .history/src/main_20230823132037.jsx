import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    customTeal: {
      500: "#155366",
      600: "#0c333f",
      700: "#0e2d33",
      800: "#141e1f",
      900: "#111a19",
    },
  },
  typography: {
    fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
    subtitle3: {
      fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
      fontSize: "0.8rem",
    },
    subtitle4: {
      fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
      fontSize: "0.7rem",
    },
    subtitle5: {
      fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
      fontSize: "0.5rem",
    },
  },
});

const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '6px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App style= />
    </ThemeProvider>
  </React.StrictMode>
);
