import React from "react";
import { Box } from "@mui/material";

const InfoBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: teal[800],
        width: "320px",
        height: "320px",
        borderRadius: "20px",
      }}
    ></Box>
  );
};

export default InfoBox;
