import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";

const Bottombar = ({ isMobile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "flex-start" : "flex-end",
        justifyContent: "center",
        width: "100vw",
        height: "126px",
        backgroundColor: blueGrey[900],
        boxSizing: "border-box",
        pr: isMobile ? "unset" : "180px",
        pl: isMobile ? "40px" : "unset",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ color: grey[100], fontSize: 14, fontWeight: 900 }}>
          tel: 662 047 277
        </Typography>
        <Link href={"mailto:gornmich@gmail.com"} sx={{ textDecoration: "none", color: grey[600] }}>
          <Typography sx={{ fontSize: 14, fontWeight: 900 }}>e-mail: gornmich@gmail.com</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Bottombar;
