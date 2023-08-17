import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const DateViewe = () => {
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
    <Box>
      <Typography variant="subtitle2" color={grey[100]}>
        {months[currentMonth] +
          " " +
          currentDay +
          (currentDay === 1 ? "st" : currentDay === 2 ? "nd" : currentDay === 3 ? "rd" : "th")}
      </Typography>
    </Box>
  );
};

export default Date;
