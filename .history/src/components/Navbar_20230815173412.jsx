import React from "react";
import { Box } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

const Navbar = () => {
  return <Box sx={{ width: "100vw", height: "59px", backgroundColor: blueGrey[900], borderBottom: "1px solid" + blueGrey[500] }}></Box>;
};

export default Navbar;