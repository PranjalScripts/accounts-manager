import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAccount.css';

const AddAccount = () => {
  const [option, setOption] = useState('predefined');
  const [accountName, setAccountName] = useState('');
  const [accountFor, setAccountFor] = useState('');
  const [profileName, setProfileName] = useState('');
  const [loginUrl, setLoginUrl] = useState('');

  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (option === 'predefined') {
      console.log({ accountName, accountFor });
    } else {
      console.log({ profileName, loginUrl });
    }
  };

  const handleAccountClick = (platform) => {
    navigate(`/redirect/${platform}`); // Redirect to your internal redirect page
  };

  return (
    <div className="container">
      <h1>Add New Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="predefined"
              checked={option === 'predefined'}
              onChange={() => setOption('predefined')}
            />
            Predefined Account
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="custom"
              checked={option === 'custom'}
              onChange={() => setOption('custom')}
            />
            Custom Profile
          </label>
        </div>

        {option === 'predefined' && (
          <>
            <div>
              <label htmlFor="accountName">Account Name:</label>
              <input
                type="text"
                id="accountName"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="accountFor">Account For:</label>
              <select
                id="accountFor"
                value={accountFor}
                onChange={(e) => setAccountFor(e.target.value)}
                required
              >
                <option value="">Select a platform</option>
                <option value="facebook">Facebook</option>
                <option value="x">X (formerly Twitter)</option>
                <option value="instagram">Instagram</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
          </>
        )}

        {option === 'custom' && (
          <>
            <div>
              <label htmlFor="profileName">Profile Name:</label>
              <input
                type="text"
                id="profileName"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="loginUrl">Login URL:</label>
              <input
                type="url"
                id="loginUrl"
                value={loginUrl}
                onChange={(e) => setLoginUrl(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <button type="submit">Add Account</button>

        {/* Button to navigate to the Instagram login redirect */}
        <button type="button" onClick={() => handleAccountClick('instagram')}>
          Go to Instagram Login
        </button>
      </form>
    </div>
  );
};

export default AddAccount;
