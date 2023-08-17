import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainContainer>
        <Box>
          <Typography></Typography>
        </Box>
      </MainContainer>
      <MainContainer />
      <MainContainer />
      <MainContainer />
      <Bottombar />
    </>
  );
}

export default App;
