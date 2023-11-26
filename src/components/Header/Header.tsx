import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation';

const Header: FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar position="static" sx={{ background: 'primary' }} elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid
              item
              xs={4}
              md={4}
              onClick={handleLogoClick}
              sx={{ cursor: 'pointer ', display: 'flex', alignItems: 'center' }}
            >
              <Box
                component="img"
                src="/logo192.png"
                sx={{ width: 40, height: 40 }}
              />
              <Typography variant="h2" component="div" sx={{ ml: 1 }}>
                MyPortal
              </Typography>
            </Grid>
            <Grid item xs={8} md={8}>
              <Navigation />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
