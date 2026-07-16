import React, { Component } from 'react';

// Exercise 11: HOL - Event Handling
// eventexamplesapp - Handle various HTML form events

// Counter with Increment and Decrement
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => { this.setState(s => ({ count: s.count + 1 })); };
  decrement = () => { this.setState(s => ({ count: s.count - 1 })); };

  // Multiple methods invoked by Increase button
  sayHello = () => { alert('Hello! This is a static message from sayHello()'); };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  // sayWelcome with argument
  sayWelcome = (msg) => { alert(msg); };

  // Synthetic event - OnPress
  handleOnPress = (event) => {
    alert('I was clicked! (Synthetic event: ' + event.type + ')');
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2 style={{ color: '#1565c0' }}>Counter: {this.state.count}</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button onClick={this.increment} style={btnStyle('#4caf50')}>Increment</button>
          <button onClick={this.decrement} style={btnStyle('#f44336')}>Decrement</button>
          <button onClick={this.handleIncrease} style={btnStyle('#ff9800')}>Increase (Multiple Methods)</button>
          <button onClick={() => this.sayWelcome('welcome')} style={btnStyle('#9c27b0')}>Say Welcome</button>
          <button onClick={this.handleOnPress} style={btnStyle('#00897b')}>OnPress (Synthetic Event)</button>
        </div>
        <CurrencyConverter />
      </div>
    );
  }
}

// CurrencyConverter component - Click event handles Indian Rupees to Euro conversion
class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euro: '' };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value, euro: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (this.state.rupees / 89.5).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h3 style={{ color: '#2e7d32' }}>💱 Currency Converter (INR → Euro)</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in Rupees (₹)"
            style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '220px' }}
          />
          <button type="submit" style={btnStyle('#1565c0')}>Convert</button>
        </form>
        {this.state.euro && (
          <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#2e7d32' }}>
            ₹{this.state.rupees} = €{this.state.euro}
          </p>
        )}
      </div>
    );
  }
}

const btnStyle = (color) => ({
  backgroundColor: color,
  color: 'white',
  border: 'none',
  padding: '10px 18px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
});

function App() {
  return (
    <div style={{ maxWidth: '700px', margin: '30px auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>⚡ Event Examples App</h1>
      <Counter />
    </div>
  );
}

export default App;
