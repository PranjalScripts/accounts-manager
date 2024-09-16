import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
        <h3>All in one Account Manager</h3>
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
    </div>
  );
};

export default Layout;
