import React from 'react';

import facebook from '../../assets/images/global/facebook.svg';
import linkedin from '../../assets/images/global/linkedin.svg';
import instagram from '../../assets/images/global/instagram.svg';
import youtube from '../../assets/images/global/youtube.svg';
import spotify from '../../assets/images/global/spotify.svg';
import tiktok from '../../assets/images/global/tiktok.svg';

const socialNetworks = [
  { name: 'Facebook', icon: facebook, url: '#' },
  { name: 'LinkedIn', icon: linkedin, url: '#' },
  { name: 'Instagram', icon: instagram, url: '#' },
  { name: 'YouTube', icon: youtube, url: '#' },
  { name: 'Spotify', icon: spotify, url: '#' },
  { name: 'TikTok', icon: tiktok, url: '#' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Follow us</p>

      <div className="footer-container">
        <div className="social-networks">
          {socialNetworks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <img src={icon} alt={name} />
            </a>
          ))}
        </div>

        <a href="#">© 2025 Qargo Coffee. All rights reserved.</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};
