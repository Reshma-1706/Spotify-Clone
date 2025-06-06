import React from 'react';
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="footerBannerContainer">
      <div className="footerBannerText">
        <strong>Preview of Spotify</strong><br />
        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
      </div>
      <button className="footerBannerBtn" onClick={handleSignupClick}>
        Sign up free
      </button>
    </div>
  );
};

export default Footer;
