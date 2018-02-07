import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({ icon, link, alt }) => {
  return (
    <a href={link}>{icon ? <img src={icon} alt={alt} /> : alt}</a>
  )
}

export default SocialIcon;