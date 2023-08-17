import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainContainer />
      <Bottombar />
    </>
  );
}

export default App;
