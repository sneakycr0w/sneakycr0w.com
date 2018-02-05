import React from 'react';

const SocialIcon = ({ icon, link, alt }) => {
  return (
    <a href={link}>{icon ? <img src={icon} alt={alt} /> : alt}</a>
  )
}

export default SocialIcon;