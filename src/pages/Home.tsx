import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PaperPlaneIcon from '@mui/icons-material/Send';
import CodeIcon from '@mui/icons-material/Code';
import DiamondIcon from '@mui/icons-material/Diamond';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Carousel from 'react-material-ui-carousel';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import { codingLanguages, frameworks } from 'constant/constant';
import theme from 'theme';
// import SkillsCarousel from '../components/SkillsCarousel';


const TestimonialSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(5, 0),
}));


export default function Home() {

  const WaveSvg = styled('svg')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  });

  // Scroll to contact section
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const HeroSection = () => (<Box sx={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    position: 'relative',
  }} >
    <Container>
      <Grid container alignItems="center" spacing={4}>
        <Grid size={{ xs: 12, md: 6, sm: 6 }} component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <img style={{
              borderRadius: '50%',
              width: '100%',
              maxWidth: '350px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            }} src="/img/john-dao.jpg" alt="John Dao" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, sm: 6 }} component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2 }}>
              John Dao
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 4 }}>
              Learning more about Dynamic 365, Power Platform, and Azure while also honing my skills in web development on the side. Love to complete any side quest heading my way
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={scrollToContact}
              endIcon={<ArrowDownwardIcon />}
              sx={{
                borderRadius: '50px',
                padding: '10px 25px',
                fontWeight: 'bold',
                '& .MuiButton-endIcon': {
                  marginLeft: theme.spacing(1),
                },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                }
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
      <path fill="#ffffff" fillOpacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,197.3C274.3,203,343,213,411,213.3C480,213,549,203,617,186.7C685.7,171,754,149,823,133.3C891.4,117,960,107,1029,101.3C1097.1,96,1166,96,1234,112C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </WaveSvg>
  </Box>)

  const SkillSection = () => (<Box component="section" id="topic" sx={{ py: 6 }}>
    <Container>
      <Box component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        textAlign="center"
      >
        <Typography sx={{
          fontWeight: 'bold',
          marginBottom: theme.spacing(1),
        }} variant="h4">My toolkit</Typography>
        <Divider sx={{
          width: '100px',
          height: '3px',
          margin: '0 auto',
          marginBottom: theme.spacing(5),
          backgroundColor: theme.palette.secondary.main,
        }} />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Coding languages
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {codingLanguages.map((lang, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index} component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper elevation={2} sx={{
                padding: theme.spacing(3),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}>
                <img src={lang.image} alt={lang.name} title={lang.name} style={{ maxWidth: '100%', maxHeight: '80px' }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Framework and other
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {frameworks.map((framework, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index} component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper sx={{
                padding: theme.spacing(3),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }} elevation={2}>
                <img src={framework.image} alt={framework.name} title={framework.name} style={{ maxWidth: '100%', maxHeight: '80px' }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>)

  const FeatureSection = () =>(<Container>
    <Box textAlign="center" mb={5} component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Typography sx={{
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
      }} variant="h3">A bit of me</Typography>
      <Divider sx={{
        width: '100px',
        height: '3px',
        margin: '0 auto',
        marginBottom: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,
      }} />
    </Box>

    {/* Vietnam Feature */}
    <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }} component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Box sx={{
            fontSize: '2rem',
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
          }}>
            <PaperPlaneIcon fontSize="inherit" />
          </Box>
          <Typography variant="h4" gutterBottom>Shipped from Vietnam</Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Always proud of my origin, Vietnam is my home country where I would suggest people to visit.
            All my friends who have been to Vietnam, fall in love with the country, people and especially the food.
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ textAlign: 'right' }}>
          <img
            src="/assets/images/feature/feature-1.jpg"
            alt="Vietnam"
            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
        </Box>
      </Grid>
    </Grid>

    {/* IT Feature */}
    <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }} component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ textAlign: 'left' }}>
          <img
            src="/assets/images/feature/feature-2.jpg"
            alt="IT"
            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Designed by <a href='https://www.freepik.com/free-photos-vectors/school'>stories</a>
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Box sx={{
            fontSize: '2rem',
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
          }}>
            <CodeIcon fontSize="inherit" />
          </Box>
          <Typography variant="h4" gutterBottom>Newbie in IT</Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Having just enter the industry after 4 years in hospitality, I decided to shift my career into IT
            in hope for better employment experience and being a part of the fastest growing market.
          </Typography>
        </Box>
      </Grid>
    </Grid>

    {/* Marriage Feature */}
    <Grid container spacing={4} alignItems="center" component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Box sx={{
            fontSize: '2rem',
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
          }}>
            <DiamondIcon fontSize="inherit" />
          </Box>
          <Typography variant="h4" gutterBottom>Super Married</Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Probably due to my appearance and vibe, most of my friends would not think I am married
            (Well, for now). My wife is also from Vietnam and I would say she is one of the best things
            ever happen to me.
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ textAlign: 'right' }}>
          <img
            src="/assets/images/feature/feature-3.jpg"
            alt="Marriage"
            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Designed by <a href='https://www.freepik.com/free-photos-vectors/wedding'>stories</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>)

  const ContactForm = ()=>(<Box component="section" id="contact" sx={{ py: 6 }}>
    <Container>
      <Box textAlign="center" mb={5} component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3">Send me a message</Typography>
        <Divider sx={{
          width: '100px',
          height: '3px',
          margin: '0 auto',
          marginBottom: theme.spacing(5),
          backgroundColor: theme.palette.secondary.main,
        }} />
        <Typography sx={{
          fontWeight: 'bold',
          marginBottom: theme.spacing(1),
        }}>Send me anything. I am a social bug (sometimes)</Typography>
      </Box>

      <ContactForm />
    </Container>
  </Box>)

  return (
    <>
      <HeroSection/>
      <Box m={0} p={0}>

        <SkillSection/>

        {/* About Me Section */}
        <Box component="section" id="services" sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
          <FeatureSection/>
        </Box>

        {/* Testimonials Section */}
        {/* <TestimonialSection component="section" id="testimonial">
        <Container>
        <Box textAlign="center" mb={5}>
        <SectionTitle variant="h3" sx={{ color: 'white' }}>Testimonials</SectionTitle>
        <Divider />
        <Typography variant="h6" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
        What others describe me
        </Typography>
        </Box>
        
        <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
        sx={{ maxWidth: 800, mx: 'auto' }}
        >
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
          ))}
          </Carousel>
          </Container>
          </TestimonialSection> */}

        {/* Contact Section */}
        <ContactForm/>
      </Box>
    </>
  );
};
