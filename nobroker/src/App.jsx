import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card';
import RelatedLinks from './components/RelatedLinks';
import Routing from './components/Routing';
import './components/Home'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Routing />
      </div>
    </Router>
  );
}

export default App;