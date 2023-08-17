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
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const items = [
    {
      title: "MUI Core 1",
      text: "Foundational components for shipping features faster. Includes Material UI.",
    },
    {
      title: "MUI Core 2",
      text: "Foundational components for shipping features faster. Includes Material UI.",
    },
    {
      title: "MUI Core 3",
      text: "Foundational components for shipping features faster. Includes Material UI.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <MainContainer height={"669px"}>
          <Box sx={{ display: "flex", position: "relative", height: "100%" }}>
            <Box
              sx={{
                boxSizing: "border-box",
                width: "50vw",
                height: "100%",
                pl: "180px",
                pr: "124px",
                pt: "136px",
              }}
            >
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "50vw",
                height: "100%",
                backgroundColor: blueGrey[900],
                pl: "24px",
              }}
            >
              <InfoBox />
              <Calendar />
            </Box>
          </Box>
        </MainContainer>
        <MainContainer>
          <Box sx={{ display: "flex", position: "relative", height: "100%" }}>
            <Box
              sx={{
                width: "50vw",
                height: "100%",
                pl: "180px",
                pr: "90px",
                pt: "116px",
                boxSizing: "border-box",
              }}
            >
              <Box>
                <Typography sx={{ color: teal[400], fontWeight: 600, mb: 1 }}>Products</Typography>
                <Typography variant="h4" sx={{ color: grey[100], fontWeight: 600 }}>
                  Every component you need is
                </Typography>
                <Typography variant="h4" sx={{ color: teal[400], fontWeight: 600 }}>
                  ready for production
                </Typography>
                <Typography sx={{ color: grey[400], fontWeight: 400, mt: 2 }}>
                  MUI offers a comprehensive suite of free UI tools to help you ship new features
                  faster. Start with Material UI, our fully-loaded component library, or bring your
                  own design system to our production-ready components.
                </Typography>
              </Box>
              {items.map((item, n) => (
                <Box
                onClick={() => setSelectedItem(n)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 4,
                    py: 2,
                    borderRadius: 2,
                    backgroundColor: selectedItem === n teal[900] + 30,
                    outline: "2px solid" + teal[500],
                  }}
                >
                  <Box sx={{ m: 3 }}>
                    <GitHubIcon sx={{ color: teal[500] }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: grey[100], fontWeight: 600 }} variant="subtitle2">
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: grey[500] }} variant="subtitle2">
                      {item.text}
                    </Typography>
                    <Typography sx={{ color: teal[400], fontWeight: 600 }} variant="subtitle2">
                      Learn more
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "50vw",
                height: "100%",
                pr: "124px",
                pt: "200px",
                boxSizing: "border-box",
              }}
            ></Box>
          </Box>
        </MainContainer>
        <MainContainer />
        <MainContainer />
        <Bottombar />
      </LocalizationProvider>
    </>
  );
}

export default App;
