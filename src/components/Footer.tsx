import { Box, Container, Typography, IconButton, Link, Divider,  List, ListItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article'; // For Medium
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid2';

export default function Footer() {

  const UsefulLinks = () =>( <Grid  size={{ xs: 12, sm: 4, lg:2 }} >
    <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
      Useful links
    </Typography>
    <Box 
      component="hr" 
      sx={{ 
        width: 60, 
        height: 3, 
        backgroundColor: 'white', 
        display: 'inline-block',
        mb: 2, 
        mt: 1,
        border: 0 
      }} 
    />
    <List sx={{ p: 0 }}>
      <ListItem sx={{ p: 0, mb: 1 }}>
        <Link href="https://www.freecodecamp.org/" target="_blank" rel="noopener" color="inherit" underline="hover">
          Free code camp
        </Link>
      </ListItem>
      <ListItem sx={{ p: 0, mb: 1 }}>
        <Link href="https://www.codecademy.com/" target="_blank" rel="noopener" color="inherit" underline="hover">
          Code academy
        </Link>
      </ListItem>
      <ListItem sx={{ p: 0, mb: 1 }}>
        <Link href="https://www.linkedin.com/learning/" target="_blank" rel="noopener" color="inherit" underline="hover">
          LinkedIn Learning
        </Link>
      </ListItem>
    </List>
  </Grid>)

  const ContactDetails = () =>(<Grid  size={{ xs: 12, sm: 4, lg:2 }} >
    <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
      Contact details
    </Typography>
    <Box 
      component="hr" 
      sx={{ 
        width: 60, 
        height: 3, 
        backgroundColor: 'white', 
        display: 'inline-block',
        mb: 2, 
        mt: 1,
        border: 0 
      }} 
    />
    <List sx={{ p: 0 }}>
      <ListItem sx={{ p: 0, mb: 1 }}>
        <Link href="tel:+64274408865" color="inherit" underline="hover">
          Call Me
        </Link>
      </ListItem>
      <ListItem sx={{ p: 0, mb: 1 }}>
        <Link href="mailto:john.d17029@gmail.com" color="inherit" underline="hover">
          Email me
        </Link>
      </ListItem>
    </List>
  </Grid>)

  const AboutMe = () =>(<Grid  size={{ xs: 12, sm: 4, lg:2 }}>
    <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
      John Dao
    </Typography>
    <Box 
      component="hr" 
      sx={{ 
        width: 60, 
        height: 3, 
        backgroundColor: 'white', 
        display: 'inline-block',
        mb: 2, 
        mt: 1,
        border: 0 
      }} 
    />
    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
      At the moment I am studying my Bachelor in IT as well as working as an admin for NISA 
      (Nelson IT Student Assosciate) but I will always give some room for side projects to 
      improve myself.
    </Typography>
  </Grid>)

  const FooterBottom = () => (<Box 
    sx={{ 
      pt: 3, 
      pb: 3,
      mt: 3,
      borderTop: '1px solid rgba(255,255,255,0.2)'
    }}
  >
    <Grid container alignItems="center">
      <Grid size={{ xs: 12, sm: 6 }}  sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="body2">
          &copy; Copyright {new Date().getFullYear()}, Simple Personal portfolio, Created by{' '}
          <Link href="https://www.linkedin.com/in/mrjohndao/" color="inherit" underline="hover">
            John Dao
          </Link>
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}   sx={{ 
        textAlign: { xs: 'center', md: 'right' },
        mt: { xs: 2, md: 0 } 
      }}>
        <IconButton href="https://www.facebook.com/John.dao95" target="_blank" rel="noopener" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://john-d1729.medium.com/" target="_blank" rel="noopener" color="inherit">
          <ArticleIcon />
        </IconButton>
        <IconButton href="https://github.com/johndao1005" target="_blank" rel="noopener" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/mrjohndao/" target="_blank" rel="noopener" color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Box>)

  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: 4,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Personal Info Column */}
              <AboutMe />
              <UsefulLinks />
              <ContactDetails />
          {/* Menu Column */}
        
          {/* Useful Links Column */}
          

          {/* Contact Details Column */}
          
        </Grid>

        {/* Footer Bottom */}
        
      </Container>
    </Box>
  );
}