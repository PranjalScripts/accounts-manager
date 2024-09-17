import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageAccount = ({ onClose }) => {
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  // Function to delete a profile
  const handleDelete = (profileName, platform) => {
    const updatedProfiles = profiles.filter(profile => profile.profileName !== profileName || profile.platform !== platform);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Manage Accounts
      </Typography>
      {profiles.length === 0 ? (
        <Typography variant="body1">No profiles available.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Profile Name</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles.map((profile, index) => (
                <TableRow key={index}>
                  <TableCell>{profile.profileName}</TableCell>
                  <TableCell>{profile.platform}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDelete(profile.profileName, profile.platform)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ManageAccount;
