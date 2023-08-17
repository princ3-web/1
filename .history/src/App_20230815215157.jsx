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
          <Typography>Move faster with intuitive React UI tools</Typography>
          <Typography>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
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
