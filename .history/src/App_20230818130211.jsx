import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { Typography, Box, Button } from "@mui/material";
import { grey, blueGrey, teal } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "./components/Calendar";
import InfoBox from "./components/InfoBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material";

const App = () => {
  const theme = useTheme();

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

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <StartContainer />

        <MainContainer>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              height: "100%",
              background:
                "linear-gradient(" +
                theme.palette.customTeal[800] +
                "," +
                theme.palette.customTeal[700] +
                ")",
            }}
          >
            <Box
              sx={{
                width: "773px",
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
                    cursor: "pointer",
                    backgroundColor: selectedItem === n ? teal[900] + 30 : "none",
                    outline: selectedItem === n ? "2px solid" + teal[500] : "none",
                    "&:hover": {
                      backgroundColor: selectedItem === n ? teal[900] + 30 : grey[900] + 30,
                      outline:
                        selectedItem === n ? "2px solid" + teal[500] : "2px solid" + grey[800] + 30,
                    },
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
                width: "740px",
                height: "100%",
                pr: "124px",
                pt: "116px",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  backgroundColor: blueGrey[700],
                  width: "566px",
                  height: "726px",
                  borderRadius: 5,
                }}
              ></Box>
            </Box>
          </Box>
        </MainContainer>
        <MainContainer>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              backgroundColor: theme.palette.customTeal[800],
            }}
          >
            <Box sx={{ boxSizing: "border-box", pl: "180px", pt: "100px", width: "773px" }}>
              <Box>
                <Typography sx={{ color: teal[500], fontWeight: 600, mb: 1 }}>Sponsors</Typography>
                <Typography variant="h4" sx={{ color: grey[200], fontWeight: 600 }}>
                  You make this possible
                </Typography>
                <Typography sx={{ color: grey[500], mt: 1 }}>
                  The development of these open-source tools is accelerated by our generous
                  sponsors.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: teal[500], fontWeight: 600, mb: 1, mt: 3 }}>
                  Skills
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "740px",
                height: "100%",
                pr: "124px",
                pt: "116px",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  py: 2,
                  width: "500px",
                  height: "500px",
                  backgroundColor: theme.palette.customTeal[700],
                  outline: "2px solid" + teal[500],
                  borderRadius: 5,
                }}
              >
                <Box sx={{ m: 3 }}>
                  <GitHubIcon sx={{ color: teal[500], fontSize: "42px" }} />
                </Box>
                <Box>
                  <Typography sx={{ color: grey[100], fontWeight: 600 }} variant="h4">
                    {/* {item.title} */}
                    title
                  </Typography>
                  <Typography sx={{ color: grey[500] }} variant="h6">
                    {/* {item.text} */}
                    text
                  </Typography>
                  <Typography sx={{ color: teal[400], fontWeight: 600 }} variant="subtitle2">
                    Learn more
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </MainContainer>
        <MainContainer height={"462px"}>
          <Box
            sx={{
              height: "100%",
              background:
                "linear-gradient(" +
                theme.palette.customTeal[800] +
                "," +
                theme.palette.customTeal[700] +
                ")",
            }}
          >
            <Box sx={{ boxSizing: "border-box", pl: "180px", pt: "100px", width: "50vw" }}>
              <Typography sx={{ color: teal[500], fontWeight: 600, mb: 1 }}>Start now</Typography>
              <Typography variant="h4" sx={{ color: grey[200], fontWeight: 600 }}>
                Ship your next project faster
              </Typography>
              <Typography sx={{ color: grey[500], mt: 1 }}>
                Find out why MUI's tools are trusted by thousands of open-source developers and
                teams around the world.
              </Typography>
              <Button
                sx={{
                  color: grey[100],
                  background: "linear-gradient(to bottom," + teal[400] + "," + teal[600] + ")",
                  mt: 2,
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                }}
              >
                <Typography variant="subtitle1">Discover core libraries &gt; </Typography>
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </MainContainer>
        <Bottombar />
      </LocalizationProvider>
    </>
  );
};

const StartContainer = () => {
  const theme = useTheme();

  <MainContainer height={"684px"}>
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "100%",
        backgroundColor: theme.palette.customTeal[800],
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          width: "773px",
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
          MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
          Start with Material UI, our fully-loaded component library, or bring your own design
          system to our production-ready components.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          boxSizing: "border-box",
          width: "740px",
          height: "90%",
          backgroundColor: theme.palette.customTeal[700],
          pl: "24px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <InfoBox />
        <Calendar />
      </Box>
    </Box>
  </MainContainer>;
};

export default App;
