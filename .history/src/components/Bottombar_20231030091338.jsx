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
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.75,
              ml: 1.25,
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: blueGrey[800],
              },
            }}
          >
            <Link href={item.link}>
            <Typography>
              tel: 662-047-277
            </Typography>
            </Link>
            <Link href={gornmich@gmail}>
            <Typography>
              e-mail: gornmich@gmail.com
            </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Bottombar;
