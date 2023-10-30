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
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        height: "126px",
        backgroundColor: blueGrey[900],
        boxSizing: "border-box",
        pr: isMobile ? "40px" : "180px",
      }}
    >
      <Box>
      <Typography>tel: 662-047-277</Typography>
      </Box>
      <Box>
      <Link href={"gornmich@gmail.com"}>
        <Typography>e-mail: gornmich@gmail.com</Typography>
      </Link>
      </Box>
    </Box>
  );
};

export default Bottombar;
