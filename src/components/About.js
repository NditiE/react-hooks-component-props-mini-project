import React from 'react';

const About = (props) => {
  return (
    <aside>
      <img
        src={props.image || 'https://via.placeholder.com/215'}
        alt="blog logo"
      />
      <p>{props.aboutText}</p>
    </aside>
  );
};

export default About;
