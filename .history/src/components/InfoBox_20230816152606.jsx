import React from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import {IconButton, Typography} from "@mui/material";


const InfoBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-evenly",
        boxSizing:"bo"
        backgroundColor: teal[600],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
        padding: "23px"
      }}
    >
      <Typography variant="subtitle2" color={grey[100]}>date</Typography>
      <Typography fontWeight={600} color={grey[100]}>title</Typography>
      <Typography color={grey[100]}>Customize every button and chip instance primary color
</Typography>
    </Box>
  );
};

export default InfoBox;
