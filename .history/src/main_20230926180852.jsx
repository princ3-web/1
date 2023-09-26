import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    customTeal: {
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

const useStyles = makeStyles({
  scrollbar: {
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    // Customize scrollbar for Firefox
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
