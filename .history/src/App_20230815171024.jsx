import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const customTheme = createTheme({
    palette: {
      grey: {
        50: "#F5F5F5",
        100: "#E0E0E0",
        200: "#BDBDBD",
        300: "#9E9E9E",
        400: "#757575",
        500: "#616161", // Customize this with your preferred shade of grey
        600: "#424242",
        700: "#303030",
        800: "#212121",
        900: "#111111",
      },
    },
  });

  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <MainContainer />
        <Bottombar />
      </ThemeProvider>
    </>
  );
}

export default App;
