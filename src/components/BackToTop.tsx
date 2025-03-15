import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import  { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    // Use MUI's useScrollTrigger hook to detect when page is scrolled
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 50, // Show button when scrolled 100px or more
    });
  
    // Effect to update button visibility
    useEffect(() => {
      setShowButton(trigger);
    }, [trigger]);
  
    // Function to scroll back to top
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    };
  
    return (
      <Zoom in={showButton}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    );
}
