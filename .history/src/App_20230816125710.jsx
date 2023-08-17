import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { Typography, Box } from "@mui/material";
import { grey, blueGrey, teal } from "@mui/material/colors";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <MainContainer>
          <Box sx={{ display: "flex", position: "relative", height: "100%" }}>
            <Box sx={{ width: "50vw", height: "100%", pl: "180px", pr: "124px", pt: "200px" }}>
              <Typography variant="h3" fontWeight={600} color={teal[400]}>
                Move faster
              </Typography>
              <Typography variant="h3" fontWeight={600} color={grey[100]}>
                with intuitive
              </Typography>
              <Typography variant="h3" fontWeight={600} color={grey[100]}>
                React UI tools
              </Typography>
              <Typography color={grey[400]} sx={{ mt: "32px" }}>
                MUI offers a comprehensive suite of free UI tools to help you ship new features
                faster. Start with Material UI, our fully-loaded component library, or bring your
                own design system to our production-ready components.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50vw",
                height: "100%",
                pl: "180px",
                pr: "124px",
                pt: "200px",
                backgroundColor: blueGrey[900],
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: blueGrey[200],
                  width: "320px",
                  height: "320px",
                  borderRadius: "20px",
                }}
              >
                <DateCalendar sx={{ p: 0, m: 0 }}  st />
              </Box>
            </Box>
          </Box>
        </MainContainer>
        <MainContainer />
        <MainContainer />
        <MainContainer />
        <Bottombar />
      </LocalizationProvider>
    </>
  );
}

export default App;
