import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AddAccount = () => {
  const [profileName, setProfileName] = useState('');
  const [platform, setPlatform] = useState('');
  const [customUrl, setCustomUrl] = useState(''); // State for custom URL
  const [shortcutName, setShortcutName] = useState(''); // State for custom shortcut name

  const navigate = useNavigate();

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleCustomUrlChange = (e) => {
    setCustomUrl(e.target.value);
  };

  const handleShortcutNameChange = (e) => {
    setShortcutName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If "Custom URL" is selected, pass the custom URL and shortcut name
    const selectedPlatform = platform === 'Custom' ? customUrl : platform;
    // Pass the profile name, platform, and shortcut name to the Profiles page
    navigate('/profiles', { state: { profileName, platform: selectedPlatform, shortcutName } });
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
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="LinkedIn">LinkedIn</MenuItem>
          <MenuItem value="Reddit">Reddit</MenuItem>
          <MenuItem value="Pinterest">Pinterest</MenuItem>
          <MenuItem value="Youtube">Youtube</MenuItem>
          <MenuItem value="X">X (Twitter)</MenuItem>
          <MenuItem value="Custom">
customUrl
          </MenuItem>
        </Select>
      </FormControl>

      {/* Conditionally show custom URL and shortcut input if "Custom" platform is selected */}
      {platform === 'Custom' && (
        <>
          <TextField
            label="Enter Custom URL"
            value={customUrl}
            onChange={handleCustomUrlChange}
            fullWidth
            required
            type="url"
          />
          <TextField
            label="Shortcut Name"
            value={shortcutName}
            onChange={handleShortcutNameChange}
            fullWidth
            required
          />
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Create Profile
      </Button>
    </Box>
  );
};

export default AddAccount;
