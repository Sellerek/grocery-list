import React from 'react';

const Footer = ({ length, title }) => {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? 'item' : 'items'}
      </p>
      <p>{title}</p>
    </footer>
  );
};

export default Footer;
