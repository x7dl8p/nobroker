import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import './App.css'; 
import Card from './components/Card';
import Routing from './components/Routing';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Card />
        <Card />
        <Card />
        <Routing />
      </div>
    </Router>
  );
}

export default App;