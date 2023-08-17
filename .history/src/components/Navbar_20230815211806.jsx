import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";
import logo fro

const Navbar = () => {
  const items = ["start", "experience", "skills", "demos", "contact"];

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        alignItems:"center",
        width: "100vw",
        height: "59px",
        backgroundColor: blueGrey[900],
        borderBottom: "1px solid" + blueGrey[700],
        pl: "175px"
      }}
    >
      {items.map((item) => (
        <Box sx={{p: "8px"}}>
          <Typography
            color={grey[100]}
            variant="subtitle2"
            fontWeight={"Bold"}
            sx={{ textTransform: "capitalize" }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
