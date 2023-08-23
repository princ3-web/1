import React from "react";
import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import GitHubIcon

const Bottombar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "153px",
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
