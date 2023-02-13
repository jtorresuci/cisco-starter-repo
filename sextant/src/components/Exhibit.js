import React from 'react';
import './Exhibit.css';

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <div className="exhibit-heading">{heading}</div>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default Exhibit;
