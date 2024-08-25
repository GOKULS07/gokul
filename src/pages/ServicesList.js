import React, { useState } from 'react';
import './ServicesList.css';

function ServicesList() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="services-list">
      <div className="category">
        <h2 onClick={() => toggleCategory('printing')}>Printing & Related Services</h2>
        {openCategory === 'printing' && (
          <ul>
            <li>Black & White Printing</li>
            <li>Color Printing</li>
            <li>Photocopying</li>
            <li>Lamination</li>
            <li>Binding</li>
          </ul>
        )}
      </div>

      <div className="category">
        <h2 onClick={() => toggleCategory('registrations')}>Registrations</h2>
        {openCategory === 'registrations' && (
          <ul>
            <li>Passport Registration</li>
            <li>Exam Registration</li>
            <li>Government Services</li>
          </ul>
        )}
      </div>

      <div className="category">
        <h2 onClick={() => toggleCategory('bookings')}>Bookings</h2>
        {openCategory === 'bookings' && (
          <ul>
            <li>Ticket Bookings</li>
            <li>Hotel Reservations</li>
            <li>Event Planning</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServicesList;
