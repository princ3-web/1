import React from "react";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";


const InfoBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: teal[800],
        width: "320px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Typogr
    </Box>
  );
};

export default InfoBox;
