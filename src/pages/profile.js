import React, { useState, useEffect, useMemo } from 'react';
import { Tabs, Tab, Box, Grid, IconButton, Tooltip, Avatar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout/layout';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public'; // Icon for custom URLs
import Footer from '../Layout/Footer';
const Profiles = () => {
  const location = useLocation();
  const { profileName, platform, shortcutName } = location.state || {};

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
        const newProfiles = [...profiles, { profileName, platform, shortcutName }];
        setProfiles(newProfiles);
        localStorage.setItem('profiles', JSON.stringify(newProfiles));
      }
    }
  }, [profileName, platform, shortcutName, profiles]);

  const [currentTab, setCurrentTab] = useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Platform URLs and Icons
  const platformUrls = useMemo(() => ({
    Instagram: {
      url: 'https://www.instagram.com/accounts/login/',
      icon: <InstagramIcon style={{ fontSize: 40 }} />
    },
    WhatsApp: {
      url: 'https://web.whatsapp.com/',
      icon: <WhatsAppIcon style={{ fontSize: 40 }} />
    },
    Facebook: {
      url: 'https://www.facebook.com/',
      icon: <FacebookIcon style={{ fontSize: 40 }} />
    },
    LinkedIn: {
      url: 'https://www.linkedin.com/login/',
      icon: <LinkedInIcon style={{ fontSize: 40 }} />
    },
    Reddit: {
      url: 'https://www.reddit.com/login/',
      icon: <RedditIcon style={{ fontSize: 40 }} />
    },
    Pinterest: {
      url: 'https://www.pinterest.com/login/',
      icon: <PinterestIcon style={{ fontSize: 40 }} />
    },
    Youtube: {
      url: 'https://www.youtube.com/account',
      icon: <YouTubeIcon style={{ fontSize: 40 }} />
    },
    X: {
      url: 'https://twitter.com/login',
      icon: <TwitterIcon style={{ fontSize: 40 }} />
    },
  }), []);

  // Open platform or custom URL in a new window
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>

      <Box>
        {/* Tabs for profiles */}
        <Tabs value={currentTab} onChange={handleChange} aria-label="profiles tabs">
          {profiles.map((profile, index) => (
            <Tab key={index} label={profile.profileName} />
          ))}
        </Tabs>

        {/* Tab content area */}
        {profiles.map((profile, index) => (
          <TabPanel value={currentTab} index={index} key={index}>
            <Box sx={{ p: 2, height: '80vh' }}>
              {/* Grid layout for shortcuts */}
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4} sm={3} md={2}>
                  <Tooltip title={`Open ${profile.platform}`} arrow>
                    <IconButton
                      onClick={() => openInNewWindow(platformUrls[profile.platform]?.url || profile.platform)} // Use custom URL if platform not found
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <Avatar sx={{ bgcolor: '#e0e0e0', width: 80, height: 80 }}>
                        {platformUrls[profile.platform]?.icon || <PublicIcon style={{ fontSize: 40 }} />} {/* Default icon for custom URLs */}
                      </Avatar>
                      <Box sx={{ mt: 1 }}>
                        {profile.platform.startsWith('http') ? profile.shortcutName || 'Custom URL' : profile.platform} {/* Show shortcut name if provided */}
                      </Box>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        ))}
      </Box>
      <Footer />
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
