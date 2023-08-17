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
      <Typography color={grey}>date</Typography>
      <Typography>title</Typography>
      <Typography>text text text</Typography>
    </Box>
  );
};

export default InfoBox;
