import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";

const Calendar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: teal[800],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
        mt: "20px",
        hov

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
    </Box>
  );
};

export default Calendar;
