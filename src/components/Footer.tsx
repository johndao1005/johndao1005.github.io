import { Box, Container, Typography, IconButton, Link, Divider, List, ListItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article'; // For Medium
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid2';

export default function Footer() {

 

  const FooterBottom = () => (
  
    <Grid container alignItems="center">
      <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="body2">
          &copy; Copyright {new Date().getFullYear()}, Simple Personal portfolio, Created by{' '}
          <Link href="https://www.linkedin.com/in/mrjohndao/" color="inherit" underline="hover">
            John Dao
          </Link>
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }} sx={{
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
    </Grid>);


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: 1,
        px: 2,
        pb: 0,
      }}
    >
        <FooterBottom />
    </Box>
  );
}