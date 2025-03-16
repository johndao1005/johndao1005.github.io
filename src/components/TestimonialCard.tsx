import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  image: string;
}

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const QuoteBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
  color: 'black',
  position: 'relative',
  width: '100%',
  maxWidth: '700px',
}));

const ProfileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  border: '4px solid white',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
}));

const QuoteIcon = styled(FormatQuoteIcon)({
  fontSize: '1.5rem',
  verticalAlign: 'top',
  marginRight: '4px',
});

const EndQuoteIcon = styled(FormatQuoteIcon)({
  fontSize: '1.5rem',
  verticalAlign: 'bottom',
  marginLeft: '4px',
});

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, role, image }) => {
  return (
    <CardContainer>
      <QuoteBox>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          <QuoteIcon color="primary" />
          {text}
          <EndQuoteIcon color="primary" />
        </Typography>
      </QuoteBox>
      
      <ProfileBox>
        <LargeAvatar src={image} alt={name} />
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
          {role}
        </Typography>
      </ProfileBox>
    </CardContainer>
  );
};

export default TestimonialCard;