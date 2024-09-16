import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AddAccount = () => {
  const [profileName, setProfileName] = useState('');
  const [platform, setPlatform] = useState('');

  const navigate = useNavigate();

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the profile name and platform to the Profiles page
    navigate('/profiles', { state: { profileName, platform } });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5">Create New Profile</Typography>
      <TextField 
        label="Profile Name" 
        value={profileName} 
        onChange={handleProfileNameChange} 
        fullWidth 
        required 
      />
      <FormControl fullWidth>
        <InputLabel>Platform</InputLabel>
        <Select
          value={platform}
          onChange={handlePlatformChange}
          required
        >
          <MenuItem value="Instagram">Instagram</MenuItem>
          <MenuItem value="WhatsApp">WhatsApp</MenuItem>
          {/* Add more platforms as needed */}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Create Profile
      </Button>
    </Box>
  );
};

export default AddAccount;
