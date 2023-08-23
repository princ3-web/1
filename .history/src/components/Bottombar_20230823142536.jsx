import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { grey, blueGrey, blue, teal } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";

const Bottombar = () => {
  return (
    <Box
      sx={{
        display:"flex",
        alignItems:"center",
        
        width: "100vw",
        height: "253px",
        backgroundColor: blueGrey[900],
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.75,
            border: "1px solid" + grey[800],
            mr: 1,
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              border: "1px solid" + grey[700],
              backgroundColor: blueGrey[800],
            },
          }}
        >
          <GitHubIcon sx={{ color: teal[400], fontSize: 20 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.75,
            border: "1px solid" + grey[800],
            "&:hover": {
              border: "1px solid" + grey[700],
              backgroundColor: blueGrey[800],
            },
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          <SettingsIcon sx={{ color: teal[400], fontSize: 20 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Bottombar;
