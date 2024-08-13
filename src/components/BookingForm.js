import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    occasion:'',
    guests: '1'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
    setFormData({
    name: '',
    email: '',
    date: '',
    time: '',
    occasion:'',
    guests: '1'
      })
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <input 
            type="text" 
            id="occasion" 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <select 
            id="guests" 
            name="guests" 
            value={formData.guests} 
            onChange={handleChange} 
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Book Table</button>
      </form>
    </div>
  );
}

export default BookingForm;
