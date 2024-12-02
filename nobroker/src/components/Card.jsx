import React, { useState } from 'react';
import '../components/Styles/Card.css';

const Card = () => {
  const data = [
    {
      title: 'Office Space In Bellandur, Bangalore For Rent',
      location: 'Green Glen Layout, ICICI Bank',
      exploreLink: 'Explore Nearby',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '₹6.66',
      deposit: '₹66.6 Lacs',
      area: '7,400 sqft',
      type: 'Office Space',
    },
    {
      title: '2 BHK Apartment For Rent in Whitefield, Bangalore',
      location: 'Whitefield Main Road, Infosys',
      exploreLink: 'Explore Nearby',
      image: 'https://images.pexels.com/photos/186078/pexels-photo-186078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '₹25,00',
      deposit: '₹50,000',
      area: '1,200 sqft',
      type: 'Apartment',
    },
    {
      title: 'Commercial Property in MG Road, Bangalore for Sale',
      location: 'MG Road, Bangalore',
      exploreLink: 'Explore Nearby',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '₹1500',
      deposit: '₹30,00',
      area: '5,000 sqft',
      type: 'Commercial',
    }
  ];

  return (
    <div className="property-cards-container">
      {data.map((item, index) => (
        <div className="property-card" key={index}>
          <div className="card-header">
            <h2>{item.title.toUpperCase()}</h2>
            <div className="location">
              <span>{item.location}</span>
              <a href="#" className="explore-link">{item.exploreLink}</a>
            </div>
          </div>

          <div className="price-details">
            <div className="price-item">
              <h3>{item.price}/M</h3>
              <p>Rent (Non-Negotiable)</p>
            </div>
            <div className="price-item">
              <h3>{item.deposit}</h3>
              <p>Deposit (Non-Negotiable)</p>
            </div>
            <div className="price-item">
              <h3>{item.area}</h3>
              <p>Builtup</p>
            </div>
          </div>

          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="property-features">
            <div className="feature">
              <div className="feature-icon">🏢</div>
              <div className="feature-details">
                <h4>{item.type}</h4>
                <p>Property Type</p>
              </div>
            </div>
            {/* Add other features here */}
          </div>

          <div className="card-actions">
            <button className="primary-button">Get Owner Details</button>
            <div className="secondary-actions">
              <button className="icon-button">❤️</button>
              <button className="icon-button">🚩</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
