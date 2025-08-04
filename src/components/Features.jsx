import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

// ... (the features array remains the same)
const features = [
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: 'Expert Development',
    description: 'Leveraging modern technologies to build robust and scalable applications.',
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Quick Turnaround',
    description: 'We deliver high-quality products on time, every time.',
  },
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    title: 'User-Centric Design',
    description: 'Creating intuitive and engaging user experiences is our priority.',
  },
];


function Features() {
  return (
    <Container 
      id="features" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: { xs: 8, md: 10 } 
      }}
    >
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} mt={4}>
        {features.map((feature) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Features;