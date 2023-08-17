import React from "react";
import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const Bottombar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "453px",
        backgroundColor: blueGrey[900],
        borderTop: "1px solid" + blueGrey[700],
      }}
    ></Box>
  );
};

export default Bottombar;
