import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="your-logo-path.png" alt="Bharathi E Service Centre" />
        </div>
        <div className="time">
          <p>{currentTime}</p>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/videos">VIDEOS</Link></li>
          <li><Link to="/testimonials">TESTIMONIALS</Link></li>
          <li><Link to="/contact-us">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
