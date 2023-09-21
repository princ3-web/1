import React from "react";
import { Box } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainContainer = ({children}) => {
  return (
    <Box
      sx={{
        po:"block",
        width: "100vw",
        height: "954px",
        backgroundColor: blueGrey[800],
        borderBottom: "1px solid" + blueGrey[700],
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;