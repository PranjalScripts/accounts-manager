import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ExternalRedirect = () => {
  const { platform } = useParams(); // capture platform from URL
  const navigate = useNavigate();
  
  // Declare the url variable outside useEffect so it can be used in JSX
  let url = '';

  useEffect(() => {
    // Set URL based on the platform
    switch (platform) {
      case 'instagram':
        url = 'https://www.instagram.com/accounts/login/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/login/';
        break;
      // Add other platforms
      default:
        url = '/'; // Redirect to home if platform not found
        break;
    }

    // Redirect to the external URL after a delay
    setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2 seconds delay for user notice
  }, [platform]);

  return (
    <div className="redirect-container">
      <h2>Redirecting to {platform} login...</h2>
      <p>Please wait a moment. If not redirected, <a href={url}>click here</a>.</p>
      {/* Optionally, you can add a loading spinner here */}
    </div>
  );
};

export default ExternalRedirect;
