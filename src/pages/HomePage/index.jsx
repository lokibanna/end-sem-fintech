import React from 'react';
import { Box, Button, Link, Grid, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box>

      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
          color: 'white',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            Your Financial Journey Starts Here.
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Simple tools to track, budget, and manage your money effectively.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/easytracking"
            sx={{
              mt: 2,
              backgroundColor: 'white',
              color: '#1976d2',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Ready to Take Control of Your Money?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Join thousands of users who are already managing their finances smarter.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/easytracking"
            sx={{
              mt: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Start Your Financial Journey
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#222', color: 'white', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {/* About */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                FinTrack
              </Typography>
              <Typography variant="body2">
                Your ultimate financial companion. Track, budget, and manage your money with ease.
                Empowering you to achieve financial freedom.
              </Typography>
              <Typography variant="body2" sx={{ mt: 3 }}>
                &copy; {new Date().getFullYear()} FinTrack. All rights reserved.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>
              <Box>
                <Link
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  to="/emicalculator"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  EMI Calculator
                </Link>
                <Link
                  component={RouterLink}
                  to="/smartbudgeting"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Smart Budgeting
                </Link>
                <Link
                  component={RouterLink}
                  to="/easytracking"
                  color="inherit"
                  underline="hover"
                  display="block"
                >
                  Easy Tracking
                </Link>
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" gutterBottom>
                Email:{' '}
                <Link
                  href="mailto:info@fintrack.com"
                  color="inherit"
                  underline="hover"
                >
                  info@fintrack.com
                </Link>
              </Typography>
              <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default HomePage;