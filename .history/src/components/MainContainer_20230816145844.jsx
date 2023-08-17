import React from "react";
import { Box } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainContainer = ({children, height}) => {
  return (
    <Box
      sx={{
        position:"relative",
        width: "100vw",
        height:  "954px",
        backgroundColor: blueGrey[800],
        outline: "1px solid" + blueGrey[700],
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
