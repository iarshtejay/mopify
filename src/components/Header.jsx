import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="default"
      // Frosted Glass
      // style={{
      //   backgroundColor: "rgba(255, 255, 255, 0.25)",
      //   backdropFilter: "blur(10px)",
      //   WebkitBackdropFilter: "blur(10px)",
      // }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "primary.main", fontWeight: "bold" }}
        >
          MOPIFY
        </Typography>
        <Button variant="contained" color="primary" href="#footer">
          Book Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
