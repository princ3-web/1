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
import { useTheme } from "@mui/material";
import { CardMedia } from "@mui/material";
import image0 from "../src/assets/images/0.png";
import image1 from "../src/assets/images/1.png";
import image2 from "../src/assets/images/2.png";
import image3 from "../src/assets/images/3.png";
import image4 from "../src/assets/images/4.png";
import image5 from "../src/assets/images/5.png";
import image6 from "../src/assets/images/6.png";
import image7 from "../src/assets/images/7.png";
import image8 from "../src/assets/images/8.png";
import image9 from "../src/assets/images/9.png";
import image10 from "../src/assets/images/10.png";
import image11 from "../src/assets/images/11.png";
import image12 from "../src/assets/images/12.png";
import github from "../src/assets/icons/github.png";
import react from "../src/assets/icons/react.png";
import mui from "../src/assets/icons/mui.png";
import more from "../src/assets/icons/more.png";
import vscode from "../src/assets/icons/vscode.png";
import photoshop from "../src/assets/icons/photoshop.png";
import mainImage from "../src/assets/images/main1.png";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "@mui/material";
import { Element } from "react-scroll";
import ParticleBackground from "react-particle-backgrounds";
import Animated from "./components/Animated";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Element name="home">
          <Navbar isMobile={isMobile} />
        </Element>
        <StartContainer isMobile={isMobile} />
        <Element name="projects">
          <DemosContainer isMobile={isMobile} />
        </Element>
        <Element name="designs">
          <DesignContainer isMobile={isMobile} />
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
  const theme = useTheme();

  const settings = {
    canvas: {
      canvasFillSpace: true,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 100,
      color: "gold",
      minSize: 1,
      maxSize: 3,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.1,
      maxSpeed: 0.5,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 1,
      opacityTransitionTime: 3000,
    },
  };




  return (
    <MainContainer height={"684px"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
          height: "100%",
          backgroundColor: theme.palette.customTeal[800],
          background:
            "linear-gradient(" +
            theme.palette.customTeal[600] +
            "," +
            theme.palette.customTeal[900] +
            ")",
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
            pt: "100px",
            zIndex: 1,
          }}
        >
          <Typography variant="h1" fontWeight={600} color={"gold"}>
            pixel wizard
          </Typography>
          <Typography color={grey[400]} sx={{ mt: "22px" }}>
            Do you want a website that will meet your business goals? Your website should function
            swiftly and stand out from your competition? That's exactly the kind of websites I
            design.
          </Typography>
          <Typography color={grey[200]} sx={{ mt: "22px" }}>
            - Lighting fast both on computers and phones
          </Typography>
          <Typography color={grey[200]} sx={{ mt: "12px" }}>
            - Very easy to navigate
          </Typography>
          <Typography color={grey[200]} sx={{ mt: "12px" }}>
            - Enhanced website visibility that attracts more traffic from clients
          </Typography>
          <Typography color={grey[200]} sx={{ mt: "12px" }}>
            - Prices start at 1499 PLN, with a 20% discount for first-time clients!
          </Typography>

          <Button
            href="mailto:gornmich@gmail.com"
            target="_blank"
            sx={{
              color: grey[100],
              background:
                "linear-gradient(to bottom," +
                theme.palette.customTeal[300] +
                "," +
                theme.palette.customTeal[500] +
                ")",
              mt: "2rem",
              textTransform: "none",
              borderRadius: 2,
              px: "3rem",
              py: "1rem",
              ":hover":{
                background:
                "linear-gradient(to bottom," +
                theme.palette.customTeal[400] +
                "," +
                theme.palette.customTeal[600] +
                ")",
              }
            }}
          >
            <Typography variant="subtitle1">Contact via e-mail </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            flexDirection: "column",
            justifyContent: "start",
            boxSizing: "border-box",
            height: "90%",
            pl: "24px",
            pt: "150px",
            borderBottomLeftRadius: "15px",
            zIndex: 1,
          }}
        >
        </Box>
      </Box>
    </MainContainer>
  );
};

const DemosContainer = ({ isMobile }) => {
  const theme = useTheme();

  const items = [
    {
      title: "Marvel's Spider-Man official website project",
      text: "Website project for PS5 and PC game.",
      image: image11,
      link: "https://princ3-web.github.io/7/",
    },
    {
      title: "PRODENT dental services website project",
      text: "Website project dental.",
      image: image11,
      link: "https://princ3-web.github.io/7/",
    },
    {
      title: "Harry Styles website",
      text: "Singer and songwriter website project.",
      image: image10,
      link: "https://princ3-web.github.io/6/",
    },
    {
      title: "Yoga classes instructor",
      text: "Website for yoga classes instructor.",
      image: image9,
      link: "https://princ3-web.github.io/5/",
    },
    {
      title: "Wedding photographer",
      text: "Website for wedding photographer.",
      image: image8,
      link: "https://princ3-web.github.io/4/",
    },
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
      title: "Tik-tok style app",
      text: "TikTok-style app with a captivating design and seamless user interactions.",
      image: image3,
      link: "https://princ3-web.github.io/quicktok/",
    },
  ];

  return (
    <MainContainer height={isMobile ? "auto" : "auto"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
          height: "100%",
          pb: isMobile ? "40px" : "40px",
          background:
            "linear-gradient(" +
            theme.palette.customTeal[900] +
            "," +
            theme.palette.customTeal[900] +
            ")",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "90px",
            pt: "116px",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Typography sx={{ color: "gold", fontWeight: 600, mb: 1 }}>
              Website projects
            </Typography>
            <Typography variant="h4" sx={{ color: grey[100], fontWeight: 600 }}>
              Check my website projects
            </Typography>
      
            <Typography sx={{ color: grey[400], fontWeight: 400, mt: 2 }}>
              Here is my collection of websites projects.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              my: "90px",
            }}
          >
            {items.map((item, n) => (
              <Link
                href={item.link}
                sx={{
                  position: "relative",

                  overflow: "hidden",
                  m: "1.065%",
                  transition: "0.5s",
                  transform: n % 3 === 1 && "scale(1.0) translate(0%, 15%)",
                  cursor: "pointer",
                  width: "30%",
                }}
              >
                <Animated style={{ position: "relative", width: "100%", height: "300px" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      backgroundColor: teal[600],
                      background: "linear-gradient(" + teal[900] + "," + teal[600] + ")",
                      filter: "opacity(0)",
                      transition: "0.2s",
                      "&:hover": {
                        filter: "opacity(0.9)",
                      },
                    }}
                  >
                    <Box sx={{ width: "80%" }}>
                      <Typography variant="h5" sx={{ color: "white" }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "white" }}>{item.text}</Typography>
                    </Box>
                  </Box>
                  <CardMedia component="img" image={item.image} alt="Sample Image" />
                </Animated>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
};

const DesignContainer = ({ isMobile }) => {
  const theme = useTheme();

  const items = [
    {
      title: "Dead Cells",
      text: "Design for indie game official website",
      image: image4,
      link: "https://i.ibb.co/mc4TzzH/4.png",
    },
    {
      title: "Dental Clinic",
      text: "A dental clinic website design project.",
      image: image5,
      link: "https://i.ibb.co/XLGS18z/1080.png",
    },
    {
      title: "Dental Clinic II",
      text: "Second dental clinic website design project.",
      image: image6,
      link: "https://i.ibb.co/XtzQrxx/1080.png",
    },
    {
      title: "Mental Therapy",
      text: "A mental therapy website design project.",
      image: image7,
      link: "https://i.ibb.co/ch8SLfr/1440.png",
    },
  ];

  return (
    <MainContainer height={isMobile ? "auto" : "auto"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
          height: "100%",
          pb: isMobile ? "40px" : "40px",
          background:
            "linear-gradient(" +
            theme.palette.customTeal[900] +
            "," +
            theme.palette.customTeal[600] +
            ")",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            pl: isMobile ? "30px" : "180px",
            pr: isMobile ? "30px" : "90px",
            pt: "116px",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Typography sx={{ color: "gold", fontWeight: 600, mb: 1 }}>
              Visual projects
            </Typography>
            <Typography variant="h4" sx={{ color: grey[100], fontWeight: 600 }}>
              Check my visual projects
            </Typography>
          
            <Typography sx={{ color: grey[400], fontWeight: 400, mt: 2 }}>
              Here is my collection of visual projects for websites.
            </Typography>
          </Box>
          <Animated>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                my: "90px",
              }}
            >
              {items.map((item, n) => (
                <Link
                  href={item.link}
                  sx={{
                    position: "relative",
                    width: "30%",
                    height: "350px",
                    overflow: "hidden",
                    m: "1.065%",
                    transition: "0.5s",
                    transform: n % 3 === 1 && "scale(1.0) translate(0%, 15%)",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      backgroundColor: teal[600],
                      background: "linear-gradient(" + teal[900] + "," + teal[600] + ")",
                      filter: "opacity(0)",
                      transition: "0.2s",
                      "&:hover": {
                        filter: "opacity(0.9)",
                      },
                    }}
                  >
                    <Box sx={{ width: "80%" }}>
                      <Typography variant="h5" sx={{ color: "white" }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "white" }}>{item.text}</Typography>
                    </Box>
                  </Box>
                  <CardMedia component="img" image={item.image} alt="Sample Image" />
                </Link>
              ))}
            </Box>
          </Animated>
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
          background:
            "linear-gradient(" +
            theme.palette.customTeal[600] +
            "," +
            theme.palette.customTeal[900] +
            ")",
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
            <Typography sx={{ color: "gold", fontWeight: 600, mb: 1 }}>
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
            <Typography
              variant="h5"
              sx={{ color: grey[400], fontWeight: 600, mb: 1, mt: 3 }}
            >
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
                      selectedItem === n
                        ? "2px solid" + theme.palette.customTeal[300]
                        : "2px solid" + theme.palette.customTeal[300] + "20",
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
              outline: "2px solid" + theme.palette.customTeal[300],
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
      particleCount: 75,
      color: "gold",
      minSize: 2,
      maxSize: 0,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.01,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 1,
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
            theme.palette.customTeal[900] +
            "," +
            theme.palette.customTeal[600] +
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
          <Typography sx={{ color: "gold", fontWeight: 600, mb: 1 }}>
            Start now
          </Typography>
          <Typography variant="h4" sx={{ color: grey[200], fontWeight: 600 }}>
            Ship your new project
          </Typography>
          <Typography sx={{ color: grey[500], mt: 1 }}>
            We're excited to discuss your project, drop us a message to get started. We offer a
            non-binding price estimate.
          </Typography>

          <Button
            href="mailto:gornmich@gmail.com"
            target="_blank"
            sx={{
              color: grey[100],
              background:
                "linear-gradient(to bottom," +
                theme.palette.customTeal[300] +
                "," +
                theme.palette.customTeal[500] +
                ")",
              mt: "2rem",
              textTransform: "none",
              borderRadius: 2,
              px: "3rem",
              py: "1rem",
              ":hover":{
                background:
                "linear-gradient(to bottom," +
                theme.palette.customTeal[400] +
                "," +
                theme.palette.customTeal[600] +
                ")",
              }
            }}
          >
            <Typography variant="subtitle1">Contact via e-mail </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            position: "absolute",
            height: "400px",
            width: "400px",
            right: "238px",
            bottom: "0px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              borderRadius: "100%",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
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
