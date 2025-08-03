import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 8, md: 10 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Innovative Solutions for Your Business
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          We build amazing web applications to help you succeed.
        </Typography>
        <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white', ':hover': { bgcolor: 'primary.light' } }}>
          Learn More
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;