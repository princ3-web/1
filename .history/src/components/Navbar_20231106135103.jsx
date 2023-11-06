import React, { useState } from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";
import logo from "../assets/images/icon.png";
import { CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ isMobile, lang, toggleLang }) => {
  const theme = useTheme();

  const itemsEn = ["home", "projects", "contact"];
  const itemsPl = ["start", "projekty", "ko"];

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "59px",
          backgroundColor: theme.palette.customTeal[600],
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-end" : "space-between",
          boxSizing: "border-box",
          width: "100%",
          height: "59px",
          backgroundColor: theme.palette.customTeal[600] + 50,
          borderBottom: "1px solid" + blueGrey[900],
          pl: isMobile ? "40px" : "175px",
          pr: isMobile ? "40px" : "180px",
          zIndex: 2,
          backdropFilter: "blur(5px)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={logo}
            alt="Sample Image"
            sx={{
              position: isMobile ? "absolute" : "relative",
              left: isMobile ? "20px" : "none",
              top: isMobile ? "50%" : "none",
              translate: isMobile ? "0% -50%" : "none",
              height: "35px",
              objectFit: "contain",
              width: "35px",
              mr: 2,
              borderRadius: "100%",
            }}
          />

          {itemsEn.map((item) => (
            <ScrollLink to={item} smooth={true} duration={500}>
              <Box
                sx={{
                  display: isMobile ? "none" : "flex",
                  cursor: "pointer",
                  borderRadius: 2,
                  px: "16px",
                  py: "6px",
                  "&:hover": {
                    outline: "1px solid" + grey[700],
                    backgroundColor: blueGrey[800],
                  },
                }}
              >
                <Typography
                  color={grey[100]}
                  variant="subtitle2"
                  fontWeight={"Bold"}
                  sx={{ textTransform: "capitalize" }}
                >
                  {item}
                </Typography>
              </Box>
            </ScrollLink>
          ))}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            color={!lang  ? grey[100] : grey[600]}
            sx={{ fontWeight: 900, fontSize: 16, cursor:"pointer" }}
            onClick={() => toggleLang(false)}
          >
            PL
          </Typography>
          <Typography color={grey[100]} sx={{ fontWeight: 900, fontSize: 16, mx: "0.25rem" }}>
            |
          </Typography>
          <Typography
            color={lang  ? grey[100] : grey[600]}
            sx={{ fontWeight: 900, fontSize: 16, cursor:"pointer" }}
            onClick={() => toggleLang(true)}
          >
            ENG
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pb: "59px" }}></Box>
    </>
  );
};

export default Navbar;
