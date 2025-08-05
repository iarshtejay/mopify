import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 8, md: 10 },
        px: { xs: 8, md: 10 },
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", sm: "center", md: "left" },
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h5" color="secondary.main" component="p" sx={{ mb: 4 }}>
          Mopify Cleaning Services
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Expert Cleaning For Residential, Commercial & Medical Sites
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "white",
            borderColor: "white",
            ":hover": { bgcolor: "primary.light" },
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        component="img"
        sx={{
          height: "auto",
          width: "100%",
          maxWidth: { xs: "60vw", sm: "60vw", md: "40vw" },
          display: "block", // To handle centering
          mx: "auto", // Center the image horizontally
          borderRadius: 6,
        }}
        alt="A lady cleaning computers."
        src={
          "https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg"
        }
      />
    </Box>
  );
}

export default Hero;
