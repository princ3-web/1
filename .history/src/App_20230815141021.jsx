import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Navbar/>
    <Bottom
  </>;
}

export default App;
