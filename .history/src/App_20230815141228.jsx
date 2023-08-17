import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Navbar/>
    <MainContainer/>
    <Bottombar/>
  </>;
}

export default App;
