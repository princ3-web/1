import React from "react";
import { Box } from "@mui/material";

const InfoBox = () => {
  return   <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: teal[800],
    width: "320px",
    height: "320px",
    borderRadius: "20px",
  }}
>
  <DateCalendar
    sx={{ p: 0, m: 0 }}
    slotProps={{
      calendarHeader: { sx: { color: "white" } },
      day: { sx: { color: "white" } },
      leftArrowIcon: { sx: { color: "white" } },
      rightArrowIcon: { sx: { color: "white" } },
      nextIconButton: { sx: { color: "white" } },
      switchViewIcon: { sx: { color: "white" } },
      previousIconButton: { sx: { color: "white" } },
      switchViewButton: { sx: { color: "white" } },

    }}
  />
</Box>;
};

export default InfoBox;
