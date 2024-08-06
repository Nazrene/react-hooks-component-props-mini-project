import React from 'react';
import PropTypes from 'prop-types';

function About({ image = "https://via.placeholder.com/215", about = "No about text provided" }) {
  return (
    <aside>
      <img 
        src={image} 
        alt="blog logo" 
      />
      <p>{about}</p>
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;

