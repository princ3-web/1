import React from "react";
import { Box } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainContainer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "954px",
        backgroundColor: grey[900],
        background: `linear-gradient(${blueGrey[900]}, ${blueGrey[900]})`,
      }}
    >
      
    </Box>
  );
};

export default MainContainer;
