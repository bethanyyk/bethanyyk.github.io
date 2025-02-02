import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import './ProjectPopupContent.css';

const ACMWorkshops = () => (
  <div className="popup-content">
    <div className="popup-first-line"><h2>Instagram Posts</h2></div>
    <div className="ig-grid">
      <InstagramEmbed url="https://www.instagram.com/p/DDldi0CxaVQ/" width={328} />
      <InstagramEmbed url="https://www.instagram.com/p/DB9z9KNSLHe/" width={328} />
      <InstagramEmbed url="https://www.instagram.com/p/DBrUDeWyXol/" width={328} />
    </div>
    <h2>Instagram Post Drafts</h2>
    <div className="drafts-grid">
      <img src="/projects/acm-design-requests/cyber-studio-game.png" alt="Cyber x Studio Game Night" />
      <img src="/projects/acm-design-requests/hoth-xii.png" alt="HOTH XII" />
    </div>
  </div>
);

export default ACMWorkshops;