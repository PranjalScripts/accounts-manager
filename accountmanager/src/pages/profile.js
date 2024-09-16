import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/layout';
import { useMemo } from 'react';

const Profiles = () => {
  const location = useLocation();
  const { profileName, platform } = location.state || {};

  // State to manage profiles
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  // Update profiles list with new profile
  useEffect(() => {
    if (profileName && platform) {
      const profileExists = profiles.some(profile => profile.profileName === profileName && profile.platform === platform);
      if (!profileExists) {
        const newProfiles = [...profiles, { profileName, platform }];
        setProfiles(newProfiles);
        localStorage.setItem('profiles', JSON.stringify(newProfiles));
      }
    }
  }, [profileName, platform, profiles]);

  const [currentTab, setCurrentTab] = useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Platform URLs
  const platformUrls = useMemo(() => ({
    Instagram: 'https://www.instagram.com/accounts/login/',
    WhatsApp: 'https://web.whatsapp.com/',
    // Add more platforms and their URLs here
  }), []);

  // Define the proxy URL
  const PROXY_URL = 'http://localhost:5500/proxy?url=';

  return (
    <Layout>
      <Box>
        <Tabs value={currentTab} onChange={handleChange} aria-label="profiles tabs">
          {profiles.map((profile, index) => (
            <Tab key={index} label={profile.profileName} />
          ))}
        </Tabs>
        {profiles.map((profile, index) => (
          <TabPanel value={currentTab} index={index} key={index}>
            <Typography variant="h6">Platform: {profile.platform}</Typography>
            <Typography variant="body1">Profile Name: {profile.profileName}</Typography>
            <Box sx={{ p: 2, height: '80vh' }}>
              <Paper elevation={3} sx={{ height: '100%', width: '100%' }}>
                {platformUrls[profile.platform] ? (
                  <iframe 
                    src={`${PROXY_URL}${encodeURIComponent(platformUrls[profile.platform])}`} 
                    title={`Login to ${profile.platform}`} 
                    style={{ border: 'none', height: '100%', width: '100%' }}
                    sandbox="allow-same-origin allow-scripts"
                    onError={() => {
                      alert('Embedding not supported. Please use the provided link.');
                    }}
                  />
                ) : (
                  <Typography variant="body1">Content not available for embedding.</Typography>
                )}
              </Paper>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Layout>
  );
};

// TabPanel component to handle tab content display
const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default Profiles;
