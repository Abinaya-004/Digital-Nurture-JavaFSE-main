import React, { Component } from 'react';

// Exercise 12: HOL - Conditional Rendering
// ticketbookingapp - Guest vs Logged-in user view with Login/Logout

// Guest page component
function GuestPage() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', borderRadius: '10px', margin: '20px 0' }}>
      <h2 style={{ color: '#e65100' }}>✈️ Welcome, Guest!</h2>
      <p>Browse our available flights below. Please <strong>login</strong> to book tickets.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
          <tr style={{ backgroundColor: '#ff9800', color: 'white' }}>
            <th style={{ padding: '10px' }}>Flight No</th>
            <th style={{ padding: '10px' }}>From</th>
            <th style={{ padding: '10px' }}>To</th>
            <th style={{ padding: '10px' }}>Date</th>
            <th style={{ padding: '10px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#f9f9f9' }}><td style={{ padding: '10px' }}>AI202</td><td>Delhi</td><td>Mumbai</td><td>2024-03-15</td><td>₹4,500</td></tr>
          <tr><td style={{ padding: '10px' }}>6E310</td><td>Bangalore</td><td>Chennai</td><td>2024-03-16</td><td>₹3,200</td></tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}><td style={{ padding: '10px' }}>SG412</td><td>Hyderabad</td><td>Kolkata</td><td>2024-03-17</td><td>₹5,800</td></tr>
        </tbody>
      </table>
    </div>
  );
}

// User (logged-in) page component
function UserPage() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '10px', margin: '20px 0' }}>
      <h2 style={{ color: '#1b5e20' }}>🎫 Book Your Ticket</h2>
      <p>Welcome back! You can now book tickets.</p>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginTop: '10px' }}>
        <h3>Available Flights for Booking</h3>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {['AI202 Delhi→Mumbai ₹4,500', '6E310 Bangalore→Chennai ₹3,200', 'SG412 Hyderabad→Kolkata ₹5,800'].map((flight, i) => (
            <div key={i} style={{ border: '1px solid #4caf50', borderRadius: '8px', padding: '12px', minWidth: '180px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{flight.split(' ')[0]}</p>
              <p style={{ margin: '5px 0', color: '#555' }}>{flight.split(' ').slice(1, -1).join(' ')}</p>
              <p style={{ margin: '0 0 10px 0', color: '#2e7d32', fontWeight: 'bold' }}>{flight.split(' ').pop()}</p>
              <button style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogin = () => { this.setState({ isLoggedIn: true }); };
  handleLogout = () => { this.setState({ isLoggedIn: false }); };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>✈️ Ticket Booking App</h1>
        <div style={{ textAlign: 'right', marginBottom: '10px' }}>
          {/* Conditional Rendering for Login/Logout button */}
          {isLoggedIn ? (
            <button onClick={this.handleLogout}
              style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Logout
            </button>
          ) : (
            <button onClick={this.handleLogin}
              style={{ backgroundColor: '#1565c0', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Login
            </button>
          )}
        </div>

        {/* Conditional Rendering of Guest or User page */}
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </div>
    );
  }
}

export default App;
