import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to Bharathi E Service Centre</h1>
        <p>Your one-stop shop for all your printing and service needs.</p>
        <Link to="/services" className="services-button">Our Services</Link>
      </div>
      <div className="images-section">
        <img src="your-image-path-1.jpg" alt="Printing Service" />
        <img src="your-image-path-2.jpg" alt="Registration Service" />
        <img src="your-image-path-3.jpg" alt="Booking Service" />
      </div>
    </div>
  );
}

export default Home;
