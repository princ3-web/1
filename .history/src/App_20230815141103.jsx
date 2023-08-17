import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import BottomNavigation from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Navbar/>
    <Bottombar/>
  </>;
}

export default App;
