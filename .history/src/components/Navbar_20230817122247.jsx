import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { grey, blueGrey, blue } from "@mui/material/colors";
import logo from "../assets/icons/logo.png";
import { CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  const items = ["start", "experience", "skills", "demos", "contact"];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "59px",
          backgroundColor: blueGrey[900],
          borderBottom: "1px solid" + blueGrey[700],
          pl: "175px",
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          image={logo}
          alt="Sample Image"
          sx={{ height: "35px", objectFit: "contain", width: "35px", mr: 2 }}
        />
        {items.map((item) => (
          <Box sx={{ p: "8px" }}>
            <Typography
              color={grey[100]}
              variant="subtitle2"
              fontWeight={"Bold"}
              sx={{ textTransform: "capitalize" }}
            >
              {item}
            </Typography>
          </Box>
        ))}
        <Box><GitHubIcon/></Box>
        <Box><Setti</Box>
      </Box>
      <Box sx={{ pb: "59px" }}></Box>
    </>
  );
};

export default Navbar;
