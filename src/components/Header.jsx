import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoNoText from "../assets/logos/logoNoTextP.svg?react";

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="default"
      // Frosted Glass
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Toolbar>
        <LogoNoText />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "primary.main", fontWeight: "bold" }}
        >
          MOPIFY
        </Typography>
        <Button variant="contained" color="primary" href="#footer">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
