import React from "react";
import { Box } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

const Navbar = () => {

  const items = ["start", "experience", "skills", "demos", "contact"]


  return (
    <Box
      sx={{
        position:"fixed",
        width: "100vw",
        height: "59px",
        backgroundColor: blueGrey[900],
        borderBottom: "1px solid" + blueGrey[700],
      }}
    >
      {items.map(item => <Typog)}
    </Box>
  );
};

export default Navbar;
