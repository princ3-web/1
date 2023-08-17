import React from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Date from "./Date";

const InfoBox = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    return currentMonth;
  };

  const currentMonth = getCurrentMonth();

  const getCurrentDay = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    return currentDay;
  };

  const currentDay = getCurrentDay();

  return (
    <Box
      sx={{
        position: "relative",
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
      <Box sx={{ position: "absolute", right: "13px", top: "23px", mb: "40px" }}>
        <IconButton p={3}>
          <ArrowBackIosNewIcon sx={{ color: grey[100], fontSize: 16 }} />
        </IconButton>
        <IconButton p={3}>
          <ArrowForwardIosIcon sx={{ color: grey[100], fontSize: 16 }} />
        </IconButton>
      </Box>
      <Date/>
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
