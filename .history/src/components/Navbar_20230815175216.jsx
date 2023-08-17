import React from "react";
import { Box } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";
import

const Navbar = () => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        position:"fixed",
        width: "100vw",
        height: "59px",
        backgroundColor: theme.palette.primary.customBlue[900],
        borderBottom: "1px solid" + blueGrey[700],
      }}
    ></Box>
  );
};

export default Navbar;
