import React, { useState, useRef } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { RoundedButton, GradientBackground } from './style';
import theme from '../theme';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  // States and refs
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const formRef = useRef<HTMLFormElement>(null);// 
  return (
    <div>ContactForm</div>
  )
}


export  function ContactForm1() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate email sending (replace with actual EmailJS implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await emailjs.send(
        'service_pdhg2tk',
        'template_zobhky7',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          message: formData.message
        },
        'UoSLPJs6195T-SvLs'
      );
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      setSnackbar({
        open: true,
        message: 'Your message has been sent! I will get back to you soon.',
        severity: 'success'
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <Grid container sx={{
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        //overflow: 'hidden',
      }}>
        {/* Left Section - Info Panel */}
        <Grid item xs={12} md={6}>
          <Paper sx={{
            ...GradientBackground,
            color: 'white',
            padding: theme.spacing(4),
            height: '100%',
            borderRadius: 0,
          }}>
            <Typography variant="h4" fontWeight="300" gutterBottom>
              Let's collaborate
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              I stand by the principle "When one teaches, two learn"–Robert Heinlein.<br/>
              So I love to learn from others as well as guiding others toward goals.
            </Typography>
            
            <Typography variant="h5" fontWeight="500" gutterBottom>
              What can I do for you?
            </Typography>
            <List>
              {['Project', 'Study plan', 'Join your group', 'Cook up a feast'].map((item, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: 'white' }}>
                    <CheckCircleOutlineIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            
            {/* Contact information */}
            <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <Typography variant="body1" sx={{ 
                display: 'flex', 
                alignItems: 'center',
                mb: 1
              }}>
                <EmailIcon sx={{ mr: 1 }} /> john.d17029@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1 }} /> +64 27 440 8865
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        {/* Right Section - Form Fields */}
        <Grid item xs={12} md={6}>
          <Paper sx={{
            padding: theme.spacing(4),
            height: '100%',
            borderRadius: 0,
          }}>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
              Your Message goes here
            </Typography>
            
            <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    margin="normal"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    margin="normal"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    margin="normal"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    margin="normal"
                    disabled={isSubmitting}
                  />
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <RoundedButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{
                    ...GradientBackground,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </RoundedButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Notification for form submission status */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled" 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
