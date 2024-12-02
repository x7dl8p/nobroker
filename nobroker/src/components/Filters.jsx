import React, { useState } from 'react';
import './Styles/Filters.css';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCheckboxChange = (type) => {
    setPropertyTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const applyFilters = () => {
    console.log({
      location,
      propertyTypes,
      priceRange: { min: minPrice, max: maxPrice },
    });
  };

  return (
    <div className="filter-card">
      <div className="filter-section">
        <div className="filter-title">Location</div>
        <input
          type="text"
          className="filter-input"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <div className="filter-title">Property Type</div>
        <div className="checkbox-group">
          {['Apartment', 'House', 'Villa'].map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={propertyTypes.includes(type)}
                onChange={() => handleCheckboxChange(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Price Range</div>
        <div className="price-range">
          <input
            type="number"
            className="price-input"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            className="price-input"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <button className="filter-button" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
