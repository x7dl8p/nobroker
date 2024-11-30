import React from 'react';
import './Styles/Main.css'; // Import Main.css here

const Main = () => {
  return (
    <div className="main-container">
      {/* Left Section: Filters */}
      <div className="left-filters">
        <h3>Filters</h3>
        {/* Add filter options here */}
      </div>

      {/* Middle Section: Content */}
      <div className="middle-content">
        <h3>Scrolling Content</h3>
        {/* Add your dynamic content here */}
      </div>

      {/* Right Section: Related Links */}
      <div className="right-links">
        <h3>Quick Links</h3>
        <ul>
          <li>Commercial Properties for rent in Iblur Village</li>
          <li>Commercial Properties for rent in Cauvery Colony</li>
          <li>Commercial Properties for rent in Bellandur Lake</li>
          <li>Commercial Properties for rent in Green Glen Layout</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;