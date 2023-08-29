import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import { Typography, Box, Button } from "@mui/material";
import { grey, blueGrey, teal, blue } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "./components/Calendar";
import InfoBox from "./components/InfoBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material";
import { CardMedia } from "@mui/material";
import image0 from "../src/assets/images/0.png";
import image1 from "../src/assets/images/1.png";
import image2 from "../src/assets/images/2.png";
import github from "../src/assets/icons/github.png";
import react from "../src/assets/icons/react.png";
import mui from "../src/assets/icons/mui.png";
import more from "../src/assets/icons/more.png";
import vscode from "../src/assets/icons/vscode.png";
import photoshop from "../src/assets/icons/photoshop.png";
import mainImage from "../src/assets/images/main.jpg";

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <StartContainer />
        <DemosContainer />
        <SkillsContainer />
        <ContactContainer />
        <Bottombar />
      </LocalizationProvider>
    </>
  );
};

const StartContainer = () => {
  const texts = [
    "Hi, I'm Michael",

    "custom websites creator",
    "Turning visions into reality, I specialize in crafting custom websites that mirror your identity, as well as bringing blueprint projects to life.",
  ];
  const theme = useTheme();
  return (
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3" fontWeight={600} color={teal[400]}>
              {texts[0]}
            </Typography>
            {/* <CardMedia
              component="img"
              image={gif0}
              alt="Sample Image"
              sx={{ height: "40px", width: "40px", objectFit: "contain", mx: 2 }}
            /> */}
          </Box>
          <Typography variant="h3" fontWeight={600} color={grey[100]}>
            {texts[1]}
          </Typography>
          <Typography color={grey[400]} sx={{ mt: "32px" }}>
            {texts[2]}
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
    </MainContainer>
  );
};

const DemosContainer = () => {
  const theme = useTheme();

  const items = [
    {
      title: "Academy",
      text: "Online academy website seamlessly blending aesthetic appeal with user-friendly functionality.",
      image: image0,
    },
    {
      title: "Design software",
      text: "A design software website was established, placing emphasis on intuitive navigation and an aesthetically pleasing interface to ensure a smooth and engaging user experience.",
      image: image1,
    },
    {
      title: "Tik-tok style app",
      text: "TikTok-style app with a captivating design and seamless user interactions.",
      image: image2,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
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
            <Typography sx={{ color: teal[400], fontWeight: 600, mb: 1 }}>Demos</Typography>
            <Typography variant="h4" sx={{ color: grey[100], fontWeight: 600 }}>
              Check my project demos
            </Typography>
            <Typography variant="h4" sx={{ color: teal[400], fontWeight: 600 }}>
              showcase of projects
            </Typography>
            <Typography sx={{ color: grey[400], fontWeight: 400, mt: 2 }}>
              The combination of React JS and Material UI offers a vast range of customization
              options coupled with rapid development capabilities. Here is a collection of projects
              created through the utilization of these technologies.
            </Typography>
          </Box>
          {items.map((item, n) => (
            <Box
              onMouseOver={() => setSelectedItem(n)}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 4,
                py: 2,
                borderRadius: 2,
                cursor: "pointer",
                backgroundColor: selectedItem === n ? teal[900] + 30 : "none",
                outline:
                  selectedItem === n ? "2px solid" + teal[500] : "2px solid" + teal[500] + "20",
                transition: "0.2s",
              }}
            >
              <Box sx={{ m: 2 }}>
                <GitHubIcon sx={{ fontSize: 40, color: teal[500] }} />
              </Box>
              <Box sx={{ mr: "10px" }}>
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: teal[500] + 60,
              width: "466px",
              height: "626px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={items[selectedItem].image}
              alt="Sample Image"
              sx={{
                boxSizing: "border-box",
                objectFit: "contain",
                objectPosition: "50% 0%",
                height: "550px",
                width: "fit-content",
                borderRadius: "5px",
                filter: "drop-shadow(0px 15px 5px " + theme.palette.customTeal[700] + ")",
              }}
            />
          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
};
const SkillsContainer = () => {
  const theme = useTheme();

  const items = [
    {
      title: "React JS library",
      image: react,
      text: "Programming interactive and responsive user interfaces for web applications by building modular components that efficiently handle data changes and updates",
    },
    {
      title: "Google's Material Design",
      image: mui,
      text: "Creating visually consistent and intuitive user interfaces by following its design principles, using its pre-built components, and leveraging its guidelines for layout, typography, and color",
    },
    {
      title: "Visual Studio Code",
      image: vscode,
      text: "Highly regarded for its exceptional code editing capabilities, extensive extension ecosystem, and user-friendly interface, making it a preferred choice among developers for efficient and customizable coding experiences",
    },
    {
      title: "Git version control system",
      image: github,
      text: "Efficient management and tracking of changes to project codebase, collaboration with team, and maintaining version history",
    },
    {
      title: "Figma, Canva, Photoshop",
      image: photoshop,
      text: "Collaborative design for UI/UX teams with real-time editing, creating graphics and visuals without extensive design skills",
    },
    {
      title: "And more...",
      image: more,
      text: "Responsive web design, Node JS, Express JS, Rest API - These skills complement the range of possibilities in front-end out of boundaries",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <MainContainer>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundColor: theme.palette.customTeal[800],
        }}
      >
        <Box sx={{ boxSizing: "border-box", pl: "180px", pt: "116px", width: "773px" }}>
          <Box>
            <Typography sx={{ color: teal[500], fontWeight: 600, mb: 1 }}>
              Spectrum of possibilities
            </Typography>
            <Typography variant="h4" sx={{ color: grey[200], fontWeight: 600 }}>
              To infinity and beyond
            </Typography>
            <Typography sx={{ color: grey[500], mt: 1 }}>
              By utilizing the latest technologies project creation is fast and effortless.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: teal[500], fontWeight: 600, mb: 1, mt: 3 }}>
              Skills
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {items.map((item, n) => (
                <Box
                  onMouseOver={() => setSelectedItem(n)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 4,
                    mr: "24px",
                    borderRadius: 2,
                    cursor: "pointer",
                    width: "268px",
                    height: "94px",
                    backgroundColor: selectedItem === n ? teal[900] + 30 : "none",
                    outline:
                      selectedItem === n ? "2px solid" + teal[500] : "2px solid" + teal[500] + "20",
                    transition: "0.2s",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="Sample Image"
                    sx={{ height: "40px", width: "40px", objectFit: "contain", mx: 2 }}
                  />
                  <Box>
                    <Typography sx={{ color: grey[100], fontWeight: 600 }} variant="subtitle3">
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
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
              py: 2,
              width: "500px",
              height: "500px",
              backgroundColor: teal[900] + 20,
              outline: "2px solid" + teal[500],
              borderRadius: 5,
            }}
          >
            <Box sx={{ m: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CardMedia
                  component="img"
                  image={items[selectedItem].image}
                  alt="Sample Image"
                  sx={{ height: "40px", width: "40px", objectFit: "contain", mx: 2 }}
                />
                <Typography sx={{ color: grey[100], fontWeight: 600 }} variant="h5">
                  {items[selectedItem].title}
                </Typography>
              </Box>
              <Typography sx={{ color: grey[500], mx: 2 }} variant="h6">
                {items[selectedItem].text}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
};
const ContactContainer = () => {
  const theme = useTheme();

  return (
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
            Ship your new project
          </Typography>
          <Typography sx={{ color: grey[500], mt: 1 }}>
            We're excited to discuss your project, drop us a message to get started
          </Typography>

          <Button
            href="mailto:mypixelwizard@gmail.com"
            target="_blank"
            sx={{
              color: grey[100],
              background: "linear-gradient(to bottom," + teal[400] + "," + teal[600] + ")",
              mt: 2,
              textTransform: "none",
              borderRadius: 2,
              px: 2,
            }}
          >
            <Typography variant="subtitle1">Send an email &gt; </Typography>
          </Button>
        </Box>
        <Box
          sx={{ position: "absolute", height: "400px", width: "400px", right: "50px", top:"center" }}
        >
          <CardMedia
            component="img"
            image={mainImage}
            alt="Sample Image"
            sx={{ objectFit: "contain", mx: 2 }}
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default App;
