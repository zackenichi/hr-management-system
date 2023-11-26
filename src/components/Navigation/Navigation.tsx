import { FC } from 'react';
import { routes as appRoutes } from '../../routes';
import { Grid, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation: FC = () => {
  const navigate = useNavigate();

  const { pathname: current } = useLocation();

  const handleNavigate = (page: string) => {
    navigate(page);
  };

  return (
    <Grid container spacing={2} justifyContent="flex-end">
      {appRoutes.map((route) => {
        return (
          <Grid item key={route.path}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: current === route.path ? 'bold' : 'normal',
                cursor: 'pointer',
                textDecoration: current === route.path ? 'underline' : 'none',
              }}
              onClick={() => handleNavigate(route.path)}
            >
              {route.title}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export { Navigation };
