import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { Typography, Box } from "@mui/material";
import { grey, blueGrey, teal } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "./components/Calendar";
import InfoBox from "./components/InfoBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <MainContainer height={"669px"}>
        <Box>
          <Typography>a</Typography>
          <Typography>b</Typography>
          <Typography>c</Typography>
        </Box>
        </MainContainer>
        <Box>
          <Typography>a</Typography>
          <Typography>b</Typography>
          <Typography>c</Typography>
        </Box>
        <Box></Box>
        <MainContainer />
        <MainContainer />
        <MainContainer />
        <Bottombar />
      </LocalizationProvider>
    </>
  );
}

export default App;
