import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import image from './pizeonflyfull.png'
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', padding: '40px 0', marginTop: 'auto' }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Logo and Address */}
        <Grid item xs={12} md={4}>
        <img src={image} alt="Logo" height={40} />
          <Typography variant="h6" color="primary" gutterBottom>
            
          </Typography>
          <Typography variant="body2">
            88, Sant Nagar, <br />
            East of Kailash, New Delhi 110025, <br />
            INDIA
          </Typography>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">Social Media Marketing</Link><br />
            <Link href="#" color="inherit" underline="none">Pay Per Click - PPC</Link><br />
            <Link href="#" color="inherit" underline="none">Web Design & Development</Link><br />
            <Link href="#" color="inherit" underline="none">Search Engine Optimization</Link><br />
            <Link href="#" color="inherit" underline="none">Online Reputation Management</Link><br />
            <Link href="#" color="inherit" underline="none">Graphic Designing</Link><br />
            <Link href="#" color="inherit" underline="none">Content Writing</Link><br />
            <Link href="#" color="inherit" underline="none">Mobile App Development</Link><br />
            <Link href="#" color="inherit" underline="none">Video & Animations</Link><br />
            <Link href="#" color="inherit" underline="none">Email Marketing</Link>
          </Typography>
        </Grid>

        {/* Website Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Website
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">About Us</Link><br />
            <Link href="#" color="inherit" underline="none">Privacy Policy</Link><br />
            <Link href="#" color="inherit" underline="none">Terms of Use</Link><br />
            <Link href="#" color="inherit" underline="none">Refund Policy</Link><br />
            <Link href="#" color="inherit" underline="none">Contact Us</Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Payment Options and Copyright */}
      <Box textAlign="center" mt={3}>
        <Typography variant="body2" gutterBottom>
          &copy; 2022 <Link href="#" color="inherit" underline="none">MOHD AFZAL</Link> | All Rights Reserved
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          <img src="https://pizeonfly.com/wp-content/uploads/2022/08/payment_option_footer.png" alt="Visa" height={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
