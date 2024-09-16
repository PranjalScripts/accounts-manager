import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import './homepage.css'; // Import CSS
import AddAccount from './AddAccount.js'; 
const HomePage = () => {
  const [open, setOpen] = useState(false);  
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLoadAccount = () => {
    navigate('/load-account');
  };

  const handleManageAccount = () => {
    navigate('/manage-account');
  };

  return (
    <div className="page-container">
      <div className="inner-container">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Add Account Card */}
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card-container">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  Add Account
                </Typography>
                <div className="icon-box">
                  <PersonAddAltOutlinedIcon fontSize="large" />
                </div>
                <div className="button-box">
                  <Button variant="contained" onClick={handleOpen}>
                    Add New Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Load Accounts Card */}
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card-container">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  Load Accounts
                </Typography>
                <div className="icon-box">
                  <PersonOutlinedIcon fontSize="large" />
                </div>
                <div className="button-box">
                  <Button variant="contained" onClick={handleLoadAccount}>
                    Load Accounts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Manage Accounts Card */}
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card-container">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  Manage Accounts
                </Typography>
                <div className="icon-box">
                  <ManageAccountsOutlinedIcon fontSize="large" />
                </div>
                <div className="button-box">
                  <Button variant="contained" color="primary" onClick={handleManageAccount}>
                    Manage Accounts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Add Account Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Account</DialogTitle>
        <DialogContent>
          <AddAccount />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default HomePage;