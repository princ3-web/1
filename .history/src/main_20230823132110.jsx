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
  const styles = theme => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App style={{scrollbarStyles}} />
    </ThemeProvider>
  </React.StrictMode>
);
