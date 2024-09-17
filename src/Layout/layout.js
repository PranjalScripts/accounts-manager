import React, { useState } from 'react';
import { Button, Menu, MenuItem, Dialog } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ManageAccount from '../pages/manageAccount'; // Adjust the path as needed

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    if (path === '/manage-account') {
      // Open the manage account dialog
      setIsDialogOpen(true);
    } else {
      // Navigate to the given path
      navigate(path);
    }
    handleClose();
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
        <h3> Your Account Manager</h3>
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Manage
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleMenuItemClick('/')}>Homepage</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/manage-account')}>Manage Account</MenuItem>
          </Menu>
        </div>
      </header>

      <div className="content-container">
        {children}
      </div>

      {/* ManageAccount dialog pop-up */}
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md"
      >
        <ManageAccount open={isDialogOpen} onClose={handleDialogClose} />
      </Dialog>
    </div>
  );
};

export default Layout;
