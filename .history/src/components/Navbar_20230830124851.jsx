import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";
import logo from "../assets/icons/logo.png";
import { CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ isMobile }) => {
  const theme = useTheme();

  const items = ["start", "experience", "skills", "demos", "contact"];

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "59px",
          backgroundColor: theme.palette.customTeal[900],
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
          backgroundColor: theme.palette.customTeal[900] + 50,
          borderBottom: "1px solid" + blueGrey[900],
          pl: isMobile ? "40px" : "175px",
          pr: isMobile ? "40px" : "180px",
          zIndex: 1,
          backdropFilter: "blur(5px)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={logo}
            alt="Sample Image"
            sx={{
              height: "35px",
              objectFit: "contain",
              width: "35px",
              mr: 2,
              alignSelf: "flex-start",
            }}
          />
          {items.map((item) => (
            <Box
              sx={{
                display: isMobile ? "none" : "flex",
                p: "8px",
                cursor: "pointer",
                borderRadius: 2,
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
          ))}
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.75,
              border: "1px solid" + grey[800],
              mr: 1,
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": {
                border: "1px solid" + grey[700],
                backgroundColor: blueGrey[800],
              },
            }}
          >
            <GitHubIcon sx={{ color: teal[400], fontSize: isMobile ? 30 : 20 }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.75,
              border: "1px solid" + grey[800],
              "&:hover": {
                border: "1px solid" + grey[700],
                backgroundColor: blueGrey[800],
              },
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            <SettingsIcon sx={{ color: teal[400], fontSize: isMobile ? 30 : 20 }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ pb: "59px" }}></Box>
    </>
  );
};

export default Navbar;
