import React from "react";
import { Box } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Box
      sx={{
        position:"fixed",
        width: "100vw",
        height: "59px",
        backgroundColor: theme.palette.primary.customBlue,
        borderBottom: "1px solid" + blueGrey[700],
      }}
    ></Box>
  );
};

export default Navbar;