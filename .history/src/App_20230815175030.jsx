import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      customBlue: {
        900: "#12191c",
      },
    },
  });

  const [count, setCount] = useState(0);

  return (
    <>
        <Navbar />
        <MainContainer />
        <MainContainer />
        <MainContainer />
        <MainContainer />
        <Bottombar />
    </>
  );
}

export default App;
