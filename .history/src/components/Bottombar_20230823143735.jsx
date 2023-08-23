import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";
import github from "../assets/icons/github1.png";
import tiktok from "../assets/icons/tiktok.png";
import linkedin from "../assets/icons/linkedin.png";
import discord from "../assets/icons/discord.png";
import {CardMedia} from "@mui/material";

const Bottombar = () => {
  const icons = [github, tiktok, linkedin, discord];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        height: "253px",
        backgroundColor: blueGrey[900],
        boxSizing: "border-box",
        pr: "180px",
      }}
    >
      <Box sx={{ display: "flex", border: "" }}>
        {icons.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.75,
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: blueGrey[800],
              },
            }}
          >
            <CardMedia
              component="img"
              image={item}
              alt="Sample Image"
              sx={{ height: "25px", width: "25px", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Bottombar;
