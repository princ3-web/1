import React from "react";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import IconButton from "@mui/material";
import typo


const InfoBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"columnn",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: teal[800],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Typography>date</Typography>
      <Typography>title</Typography>
      <Typography>text text text</Typography>
    </Box>
  );
};

export default InfoBox;
