import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import MainContainer from "./components/MainContainer";
import {
  Typography,
  Box,
  Button,
  CardMedia,
  useTheme,
  Container,
} from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "./components/Calendar";
import InfoBox from "./components/InfoBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import image0 from "../src/assets/images/0.png";
import image1 from "../src/assets/images/1.png";
import image2 from "../src/assets/images/2.png";
import github from "../src/assets/icons/github.png";
import react from "../src/assets/icons/react.png";
import mui from "../src/assets/icons/mui.png";
import more from "../src/assets/icons/more.png";
import vscode from "../src/assets/icons/vscode.png";
import photoshop from "../src/assets/icons/photoshop.png";
import mainImage from "../src/assets/images/main.png";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <Container>
        <StartContainer />
        <DemosContainer />
        <SkillsContainer />
        <ContactContainer />
      </Container>
      <Bottombar />
    </LocalizationProvider>
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
    <MainContainer height={"100vh"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.customTeal[800],
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={600} color={teal[400]}>
          {texts[0]}
        </Typography>
        <Typography variant="h4" fontWeight={600} color={grey[100]}>
          {texts[1]}
        </Typography>
        <Typography color={grey[400]} sx={{ mt: "24px" }}>
          {texts[2]}
        </Typography>
        <InfoBox />
        <Calendar />
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
  const handleItemHover = (index) => setSelectedItem(index);

  return (
    <MainContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.customTeal[800],
          padding: "40px",
        }}
      >
        <Typography variant="h4" color={teal[400]} fontWeight={600}>
          Demos
        </Typography>
        <Typography variant="h5" color={grey[200]} fontWeight={600} sx={{ mt: "8px" }}>
          Check my project demos
        </Typography>
        <Typography variant="h5" color={teal[400]} fontWeight={600}>
          showcase of projects
        </Typography>
        <Typography color={grey[500]} sx={{ mt: "16px", textAlign: "center" }}>
          The combination of React JS and Material UI offers a vast range of customization
          options coupled with rapid development capabilities. Here is a collection of projects
          created through the utilization of these technologies.
        </Typography>
        {items.map((item, index) => (
          <Box
            key={index}
            onMouseEnter={() => handleItemHover(index)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: selectedItem === index ? teal[900] + 30 : "transparent",
              padding: "16px",
              borderRadius: "4px",
              marginTop: "16px",
              transition: "background-color 0.3s",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GitHubIcon sx={{ fontSize: 40, color: teal[500], marginRight: "12px" }} />
              <Typography variant="subtitle2" color={grey[100]} fontWeight={600}>
                {item.title}
              </Typography>
            </Box>
            <Typography variant="subtitle2" color={grey[500]} maxWidth="70%">
              {item.text}
            </Typography>
            <Typography variant="subtitle2" color={teal[400]} fontWeight={600}>
              Learn more
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.customTeal[700],
          padding: "40px",
        }}
      >
        <CardMedia
          component="img"
          image={items[selectedItem].image}
          alt="Sample Image"
          sx={{
            maxWidth: "100%",
            maxHeight: "80vh",
            boxShadow: "0px 15px 5px " + theme.palette.customTeal[700],
            borderRadius: "5px",
          }}
        />
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
  const handleItemHover = (index) => setSelectedItem(index);

  return (
    <MainContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.customTeal[800],
          padding: "40px",
        }}
      >
        <Typography variant="h4" color={teal[500]} fontWeight={600}>
          Spectrum of possibilities
        </Typography>
        <Typography variant="h5" color={grey[200]} fontWeight={600} sx={{ mt: "8px" }}>
          To infinity and beyond
        </Typography>
        <Typography color={grey[500]} sx={{ mt: "16px", textAlign: "center" }}>
          By utilizing the latest technologies project creation is fast and effortless.
        </Typography>
        <Typography variant="h5" color={teal[500]} fontWeight={600} sx={{ mt: "24px" }}>
          Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              onMouseEnter={() => handleItemHover(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: selectedItem === index ? teal[900] + 30 : "transparent",
                padding: "12px",
                borderRadius: "4px",
                margin: "8px",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt="Sample Image"
                sx={{ height: "40px", width: "40px", objectFit: "contain", marginRight: "12px" }}
              />
              <Typography variant="subtitle3" color={grey[100]} fontWeight={600}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.customTeal[700],
          padding: "40px",
        }}
      >
        <Box sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            image={items[selectedItem].image}
            alt="Sample Image"
            sx={{ objectFit: "contain", boxShadow: "0px 15px 5px " + theme.palette.customTeal[700] }}
          />
          <Typography variant="subtitle1" color={grey[500]} sx={{ mt: "16px" }}>
            {items[selectedItem].text}
          </Typography>
        </Box>
      </Box>
    </MainContainer>
  );
};

const ContactContainer = () => {
  const theme = useTheme();

  return (
    <MainContainer height={"100vh"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.customTeal[800],
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color={teal[500]} fontWeight={600}>
          Start now
        </Typography>
        <Typography variant="h5" color={grey[200]} fontWeight={600} sx={{ mt: "8px" }}>
          Ship your new project
        </Typography>
        <Typography color={grey[500]} sx={{ mt: "16px" }}>
          We're excited to discuss your project, drop us a message to get started
        </Typography>
        <Button
          href="mailto:mypixelwizard@gmail.com"
          target="_blank"
          sx={{
            color: grey[100],
            background: "linear-gradient(to bottom," + teal[400] + "," + teal[600] + ")",
            mt: "24px",
            textTransform: "none",
            borderRadius: "4px",
            padding: "8px 16px",
          }}
        >
          <Typography variant="subtitle1">Send an email &gt;</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.customTeal[700],
          padding: "40px",
        }}
      >
        <CardMedia
          component="img"
          image={mainImage}
          alt="Sample Image"
          sx={{
            maxWidth: "100%",
            maxHeight: "80vh",
            objectFit: "cover",
          }}
        />
      </Box>
    </MainContainer>
  );
};

export default App;
