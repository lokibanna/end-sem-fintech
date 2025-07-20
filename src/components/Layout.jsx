
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const getButtonColor = (path) => {
    return location.pathname === path ? 'secondary' : 'inherit';
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color={getButtonColor('/')} component={RouterLink} to="/">FinTrack</Button>
          </Typography>
          <Button color={getButtonColor('/')} component={RouterLink} to="/">Home</Button>
          <Button color={getButtonColor('/emicalculator')} component={RouterLink} to="/emicalculator">EMI Calculator</Button>
          <Button color={getButtonColor('/smartbudgeting')} component={RouterLink} to="/smartbudgeting">Smart Budgeting</Button>
          <Button color={getButtonColor('/easytracking')} component={RouterLink} to="/easytracking">Easy Tracking</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
