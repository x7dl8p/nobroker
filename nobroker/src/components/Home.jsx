import React from 'react';
import './Styles/Home.css';
import Card from './Card';
import RelatedLinks from './RelatedLinks';
import Filters from './Filters';

const Main = () => {
  return (
    <div className="main-layout">
    <div className="left-section">
    <Filters />
    </div>
    <div className="middle-section good-scroll">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="right-section">
      <RelatedLinks />
    </div>
  </div>
  );
};

export default Main;