import React from 'react';

// Exercise 10: HOL - JSX and React.createElement()
// officespacerentalapp - demonstrates JSX elements, attributes, expressions, and inline CSS

const officeSpaces = [
  { id: 1, name: 'Tech Hub Downtown', rent: 55000, address: '123 MG Road, Bangalore', image: 'https://via.placeholder.com/300x200?text=Tech+Hub' },
  { id: 2, name: 'Silicon Valley Office', rent: 75000, address: '456 Whitefield, Bangalore', image: 'https://via.placeholder.com/300x200?text=Silicon+Valley' },
  { id: 3, name: 'Startup Space', rent: 40000, address: '789 Electronic City, Bangalore', image: 'https://via.placeholder.com/300x200?text=Startup+Space' },
  { id: 4, name: 'Corporate Tower', rent: 90000, address: '101 BKC, Mumbai', image: 'https://via.placeholder.com/300x200?text=Corporate+Tower' },
  { id: 5, name: 'Co-working Zone', rent: 30000, address: '202 Koramangala, Bangalore', image: 'https://via.placeholder.com/300x200?text=Co-working' },
];

// JSX App component
function App() {
  // Heading element using JSX
  const heading = <h1 style={{ textAlign: 'center', color: '#333', fontFamily: 'Arial' }}>
    🏢 Office Space Rental Portal
  </h1>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* JSX element - heading */}
      {heading}

      <p style={{ textAlign: 'center', color: '#666' }}>
        Find your perfect office space. Rent shown in <span style={{ color: 'red' }}>Red</span> is below ₹60,000;{' '}
        <span style={{ color: 'green' }}>Green</span> is above ₹60,000.
      </p>

      {/* JSX list - loop through office space items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {officeSpaces.map(office => (
          <div key={office.id} style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            width: '300px'
          }}>
            {/* JSX attribute - src for image */}
            <img
              src={office.image}
              alt={office.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{office.name}</h3>
              <p style={{ margin: '0 0 5px 0', color: '#777' }}>📍 {office.address}</p>
              {/* JSX inline CSS: conditional color based on rent */}
              <p style={{
                margin: '0',
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: office.rent < 60000 ? 'red' : 'green'
              }}>
                ₹{office.rent.toLocaleString()}/month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
