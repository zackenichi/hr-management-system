import { Grid, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const d = new Date();
  let year = d.getFullYear();

  const author = 'Zac Salazar';

  const copyright = isMobile
    ? `© ${year} | ${author}`
    : `Copyright © ${year} | ${author}`;

  return (
    <footer>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="body2" color="text.secondary" align="center">
            {copyright}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export { Footer };
