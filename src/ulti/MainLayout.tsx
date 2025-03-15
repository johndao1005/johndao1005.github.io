import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Container } from '@mui/material';

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
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Takes up all available space, pushing footer down
          mt: '64px', // Space for fixed navbar (default MUI AppBar height)
          '@media (max-width: 600px)': {
            mt: '56px', // Smaller space on mobile (MUI's mobile AppBar height)
          },
          py: 3, // Vertical padding
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}
