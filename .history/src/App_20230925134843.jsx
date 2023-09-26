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
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material";
import { CardMedia } from "@mui/material";
import image0 from "../src/assets/images/0.png";
import image1 from "../src/assets/images/1.png";
import image2 from "../src/assets/images/2.png";
import image3 from "../src/assets/images/3.png";
import github from "../src/assets/icons/github.png";
import react from "../src/assets/icons/react.png";
import mui from "../src/assets/icons/mui.png";
import more from "../src/assets/icons/more.png";
import vscode from "../src/assets/icons/vscode.png";
import photoshop from "../src/assets/icons/photoshop.png";
import mainImage from "../src/assets/images/main.png";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "@mui/material";
import { Element } from "react-scroll";
import ParticleBackground from "react-particle-backgrounds";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Element name="start">
          <Navbar isMobile={isMobile} />
        </Element>
        <StartContainer isMobile={isMobile} />
        <Element name="demos">
          <DemosContainer isMobile={isMobile} />
        </Element>
        <Element name="skills">
          <SkillsContainer isMobile={isMobile} />
        </Element>
        <Element name="contact">
          <ContactContainer isMobile={isMobile} />
        </Element>
        <Bottombar isMobile={isMobile} />
      </LocalizationProvider>
    </>
  );
};

const StartContainer = ({ isMobile }) => {
  const texts = [
    "websites",
    "web design",
    "modernisation",
    "websites for business",
    "Turning visions into reality, I specialize in crafting custom websites that mirror your identity, as well as bringing blueprint projects to life.",
  ];
  const theme = useTheme();

  const settings = {
    canvas: {
      canvasFillSpace: true,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#94ecbe",
      minSize: 1,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <MainContainer height={"684px"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: "100%",
          backgroundColor: theme.palette.customTeal[800],
          background: "linear-gradient(" + theme.palette.customTeal[900] + "," + teal[600] + ")",
        }}
      >
        <Box sx={{ position: "absolute", height: "100%", width: "100vw" }}>
          <ParticleBackground settings={settings} />
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            width: isMobile ? "100vw" : "900px",
            height: "100%",
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "124px",
            pt: "200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
              pr: "80px",
            }}
          >
            <Typography variant="h6" fontWeight={100} color={teal[600]}>
              {texts[0]}
            </Typography>
            <Typography variant="h6" fontWeight={100} color={teal[600]}>
              {texts[1]}
            </Typography>
            <Typography variant="h6" fontWeight={100} color={teal[600]}>
              {texts[2]}
            </Typography>
          </Box>
          <Typography variant="h3" fontWeight={600} color={grey[100]}>
            {texts[3]}
          </Typography>
          <Typography color={grey[400]} sx={{ mt: "32px" }}>
            {texts[4]}
          </Typography>
        </Box>
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            flexDirection: "column",
            justifyContent: "start",
            boxSizing: "border-box",
            width: "740px",
            height: "90%",
            pl: "24px",
            pt: "150px",
            borderBottomLeftRadius: "15px",
            zIndex: 1,
          }}
        >
          <Calendar />
        </Box>
      </Box>
    </MainContainer>
  );
};

const DemosContainer = ({ isMobile }) => {
  const theme = useTheme();

  const items = [
    {
      title: "Steam clone",
      text: "Precise clone of popular digital distribution website.",
      image: image0,
      link: "https://princ3-web.github.io/steamclone/",
    },
    {
      title: "Design software",
      text: "A design software website with intuitive navigation and an aesthetically pleasing interface.",
      image: image1,
      link: "https://princ3-web.github.io/designstudio/",
    },
    {
      title: "Academy",
      text: "Online academy website seamlessly blending aesthetic appeal with user-friendly functionality.",
      image: image2,
      link: "https://princ3-web.github.io/academy/",
    },

    {
      title: "Tik-tok style app",
      text: "TikTok-style app with a captivating design and seamless user interactions.",
      image: image3,
      link: "https://princ3-web.github.io/quicktok/",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <MainContainer height={isMobile ? "auto" : "954px"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: "100%",
          pb: isMobile ? "40px" : 0,
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
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "90px",
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
            <Link href={item.link} sx={{ textDecoration: "none" }}>
              <Box
                onMouseOver={() => setSelectedItem(n)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                  py: 1,
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
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
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
const SkillsContainer = ({ isMobile }) => {
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
    <MainContainer height={isMobile ? "auto" : "954px"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          height: "100%",
          backgroundColor: theme.palette.customTeal[800],
          pb: isMobile ? "40px" : 0,
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "0px",
            pt: "116px",
            width: "773px",
          }}
        >
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
                    sx={{ height: "30px", width: "30px", objectFit: "contain", mx: 2 }}
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
            display: isMobile ? "none" : "flex",
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
                  sx={{ height: "30px", width: "30px", objectFit: "contain", mx: 2 }}
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
const ContactContainer = ({ isMobile }) => {
  const theme = useTheme();

  const settings = {
    canvas: {
      canvasFillSpace: true,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#94ecbe",
      minSize: 1,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <MainContainer height={"462px"}>
      <Box
        sx={{
          justifyContent: "center",

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
            boxSizing: "border-box",
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "0px",
            pt: isMobile ? "30px" : "100px",
            width: isMobile ? "100vw" : "50vw",
          }}
        >
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
          sx={{
            display: isMobile ? "none" : "flex",
            position: "absolute",
            height: "350px",
            width: "350px",
            right: "238px",
            bottom: "50px",
          }}
        >
          <Box sx={{position:"relative", l}}>
          <ParticleBackground settings={settings} />
          </Box>
          <CardMedia
            component="img"
            image={mainImage}
            alt="Sample Image"
            sx={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default App;
