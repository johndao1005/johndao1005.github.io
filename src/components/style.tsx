import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Section styling
export const SectionContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(6)} 0`,
}));

export const GradientBackground = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

// Typography styling
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

export const SectionDivider = styled(Divider)(({ theme }) => ({
  width: '100px',
  height: '3px',
  margin: '0 auto',
  marginBottom: theme.spacing(5),
  backgroundColor: theme.palette.secondary.main,
}));

// Button styling
export const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 25px',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(1),
  },
}));

// Feature icon styling
export const FeatureIconStyle = (theme: any) => ({
  fontSize: '2rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
});

// Card hover effect
export const hoverLiftEffect = {
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
};

// Animation defaults
export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};