import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Container } from '@mui/material';
import BackToTop from 'components/BackToTop';

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <Outlet />
      <BackToTop />

      {/* Footer */}
      <Footer />

    </Box>
  );
}
