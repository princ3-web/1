import React from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const InfoBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxSizing: "border-box",
        backgroundColor: teal[600],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
        padding: "23px",
      }}
    >
      <Box>
        <IconButton>
          <ArrowBackIosNewIcon sx={{color: grey[100], fontSize}}/>
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon/>
        </IconButton>
      </Box>
      <Typography fontWeight={600} color={grey[100]}>
        title
      </Typography>
      <Typography color={grey[100]}>
        Customize every button and chip instance primary color
      </Typography>
    </Box>
  );
};

export default InfoBox;
