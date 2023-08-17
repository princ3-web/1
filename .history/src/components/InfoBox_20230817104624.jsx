import React from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DateViewer from "./DateViewer";

const InfoBox = () => {


  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxSizing: "border-box",
        backgroundColor: teal[500],
        width: "320px",
        height: "200px",
        borderRadius: "20px",
        padding: "23px",
      }}
    >
      <Box sx={{ position: "absolute", right: "13px", top: "23px", mb: "40px" }}>
        <IconButton p={3}>
          <ArrowBackIosNewIcon sx={{ color: grey[100], fontSize: 16 }} />
        </IconButton>
        <IconButton p={3}>
          <ArrowForwardIosIcon sx={{ color: grey[100], fontSize: 16 }} />
        </IconButton>
      </Box>
      <DateViewer/>
      <Typography fontWeight={600} color={grey[100]}>
      This is my title
      </Typography>
      <Typography color={grey[100]}>
        Customize every button and chip instance primary color
      </Typography>
    </Box>
  );
};

export default InfoBox;
