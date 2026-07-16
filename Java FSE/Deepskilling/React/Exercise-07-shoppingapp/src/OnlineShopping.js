import React, { Component } from 'react';

// Exercise 7: HOL - Props
// Cart class representing a shopping cart item
class Cart {
  constructor(Itemname, Price) {
    this.Itemname = Itemname;
    this.Price = Price;
  }
}

// OnlineShopping class component displaying cart items using Props
class OnlineShopping extends Component {
  render() {
    const cartItems = [
      new Cart('Laptop', 75000),
      new Cart('Smartphone', 45000),
      new Cart('Headphones', 5000),
      new Cart('Keyboard', 2500),
      new Cart('Mouse', 1500),
    ];

    const total = cartItems.reduce((sum, item) => sum + item.Price, 0);

    return (
      <div style={{ fontFamily: 'Arial', maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
        <h1 style={{ color: '#333', textAlign: 'center', borderBottom: '2px solid #667eea', paddingBottom: '10px' }}>
          🛒 Online Shopping Cart
        </h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#667eea', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Item Name</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={{ padding: '10px 12px' }}>{item.Itemname}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right' }}>₹{item.Price.toLocaleString()}</td>
              </tr>
            ))}
            <tr style={{ backgroundColor: '#e8f5e9', fontWeight: 'bold' }}>
              <td style={{ padding: '12px' }}>Total</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>₹{total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
