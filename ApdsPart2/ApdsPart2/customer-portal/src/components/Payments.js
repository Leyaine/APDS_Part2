// src/components/Payments.js
import React, { useState } from 'react';
import './Payments.css';

function Payments() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate payment processing
    setSuccess('Payment processed successfully!');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="container">
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <button type="submit">Pay Now</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default Payments;
