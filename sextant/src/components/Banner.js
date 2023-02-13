import React from 'react';
import './Banner.css';

const Banner = ({ title }) => (
  <header className="banner">
    <h1 className="banner-title">{title}</h1>
  </header>
);

export default Banner;
