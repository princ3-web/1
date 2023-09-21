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
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        mt: "20px",
        "&:hover": {
          backgroundColor: teal[700],
        },
      }}
    >
      <DateCalendar
        sx={{ p: 0, m: 0 }}
        slotProps={{
       
        }}
      />
    </Box>
  );
};

export default Calendar;
