import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return <Box sx={{width: 100, height: 200, backgroundColor:"red"}}></Box>;
}

export default App;
