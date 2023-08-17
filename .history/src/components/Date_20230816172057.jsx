import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Date = () => {

    
  return <Box>
    <Typography variant="subtitle2" color={grey[100]}>
        {months[currentMonth] +
          " " +
          currentDay +
          (currentDay === 1 ? "st" : currentDay === 2 ? "nd" : currentDay === 3 ? "rd" : "th")}
      </Typography>
  </Box>;
};

export default Date;
