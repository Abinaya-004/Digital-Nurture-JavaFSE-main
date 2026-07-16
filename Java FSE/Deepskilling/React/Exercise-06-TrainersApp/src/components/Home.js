import React from 'react';

// Exercise 6: HOL - React Router - Home component
function Home() {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#333' }}>Welcome to Cognizant Trainers Portal</h2>
      <p style={{ color: '#666', fontSize: '1.1em' }}>
        This portal maintains a list of trainers along with their expertise.
      </p>
      <p style={{ color: '#888' }}>
        Click on "Trainers" in the navigation menu to view the list of trainers.
      </p>
    </div>
  );
}

export default Home;
