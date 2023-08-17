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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: teal[600],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Typography variant="subtitle2" color={grey[100]}>date</Typography>
      <Typography fontWeight={600} color={grey[100]}>title</Typography>
      <Typography color={grey[100]}>Customize every button and chip instance primary color
 text</Typography>
    </Box>
  );
};

export default InfoBox;
