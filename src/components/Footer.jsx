import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        bgcolor: '#333',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Mopify. All Rights Reserved.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Contact us at: {' '}
          <Link href="mailto:mopifyqld@gmail.com" color="inherit" underline="hover">
            mopifyqld@gmail.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;