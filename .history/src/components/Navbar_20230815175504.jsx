import React from "react";
import { Box } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

const Navbar = () => {

  const items = []


  return (
    <Box
      sx={{
        position:"fixed",
        width: "100vw",
        height: "59px",
        backgroundColor: blueGrey[900],
        borderBottom: "1px solid" + blueGrey[700],
      }}
    ></Box>
  );
};

export default Navbar;
