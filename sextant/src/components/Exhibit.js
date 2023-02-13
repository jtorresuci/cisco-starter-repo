import React, { useState } from 'react';
import './Exhibit.css';

const Exhibit = ({ heading, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="exhibit">
      <h2 className="exhibit-heading">{heading}</h2>
      <div className="exhibit-tabs">
        {React.Children.map(children, (child, index) => (
          <button
            className={`exhibit-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.tabTitle}
          </button>
        ))}
      </div>
      <div className="exhibit-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Exhibit;
