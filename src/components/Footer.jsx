import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Mon application
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' — Tous droits réservés'}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <Link href="#" underline="hover">
            Accueil
          </Link>
          <Link href="#" underline="hover">
            À propos
          </Link>
          <Link href="#" underline="hover">
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
}