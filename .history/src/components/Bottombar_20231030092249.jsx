import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";
import github from "../assets/icons/github1.png";
import tiktok from "../assets/icons/tiktok.png";
import linkedin from "../assets/icons/linkedin.png";
import discord from "../assets/icons/discord.png";
import { CardMedia } from "@mui/material";

const Bottombar = ({ isMobile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
        height: "126px",
        backgroundColor: blueGrey[900],
        boxSizing: "border-box",
        pr: isMobile ? "40px" : "180px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ color: grey[400] }}>tel: 662-047-277</Typography>
        <Link href={"mailto:gornmich@gmail.com"} sx={{ textDecoration: "none", color: grey[400] }}>
          <Typography sx={{f}}>e-mail: gornmich@gmail.com</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Bottombar;
