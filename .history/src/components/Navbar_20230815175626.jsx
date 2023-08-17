import React from "react";
import { Box, Typography } from "@mui/material";
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
      {items.map(item => <Typography>{item}</Typography>)}
    </Box>
  );
};

export default Navbar;
