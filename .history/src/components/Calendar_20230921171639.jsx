import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import {useTheme} from "@mui/material";

const Calendar = () => {

  const theme = useTheme();


  return (
    <Box
      sx={{
        display: "flex",
        background: "linear-gradient(" + theme.palette.customTeal[900] + "," + teal[600] + ")",
        width: "320px",
        height: "300px",
        borderRadius: "20px",
        "&:hover": {
          backgroundColor: teal[700],
        },
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
