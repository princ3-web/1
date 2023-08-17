import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const customTheme = createTheme({
    palette: {
      blueGrey: {
        ...blueGrey, // Import the default Material-UI grey palette
        950: "#12191c",
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
