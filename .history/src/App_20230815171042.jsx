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
