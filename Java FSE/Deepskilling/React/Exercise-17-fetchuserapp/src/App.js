import React, { Component } from 'react';

// Exercise 17: HOL - REST API with Fetch
// fetchuserapp - Fetch user from https://api.randomuser.me/ and display title, firstname, image

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  // Asynchronous componentDidMount - invokes randomuser API using fetch
  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const user = data.results[0];
      this.setState({ user, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
          <div style={{ fontSize: '3em' }}>⏳</div>
          <h2>Fetching user data from API...</h2>
          <p style={{ color: '#666' }}>GET https://api.randomuser.me/</p>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ textAlign: 'center', padding: '50px', color: 'red', fontFamily: 'Arial' }}>
          <h2>Error fetching user: {error}</h2>
        </div>
      );
    }

    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          minWidth: '280px'
        }}>
          <img
            src={user.picture.large}
            alt={`${user.name.title} ${user.name.first}`}
            style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover',
              border: '4px solid #667eea', marginBottom: '15px' }}
          />
          <h2 style={{ margin: '0 0 5px 0', color: '#333' }}>
            {user.name.title}. {user.name.first} {user.name.last}
          </h2>
          <p style={{ color: '#666', margin: '5px 0' }}>📍 {user.location.city}, {user.location.country}</p>
          <p style={{ color: '#888', margin: '5px 0' }}>📧 {user.email}</p>
          <p style={{ color: '#888', margin: '5px 0' }}>📞 {user.phone}</p>
          <span style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.85em',
            marginTop: '10px',
            display: 'inline-block'
          }}>
            {user.gender.toUpperCase()}
          </span>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ backgroundColor: 'linear-gradient(135deg, #667eea, #764ba2)', minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', paddingTop: '30px', fontFamily: 'Arial' }}>
        👤 Fetch User App
      </h1>
      <p style={{ textAlign: 'center', color: '#666', fontFamily: 'Arial' }}>
        Fetching random user from <code>api.randomuser.me</code>
      </p>
      <Getuser />
    </div>
  );
}

export default App;
