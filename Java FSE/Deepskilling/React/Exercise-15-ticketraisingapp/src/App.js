import React, { Component } from 'react';

// Exercise 15: HOL - React Forms
// ticketraisingapp - Complaint Register form with handleSubmit

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: '',
      submitted: false,
      referenceNo: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Generate a reference number
    const refNo = 'TKT-' + Math.floor(Math.random() * 90000 + 10000);
    this.setState({ referenceNo: refNo, submitted: true });
    alert(`Complaint submitted successfully!\nReference Number: ${refNo}\nFor future follow-ups, please use this number.`);
  };

  render() {
    const { employeeName, complaint, submitted, referenceNo } = this.state;

    return (
      <div style={{ maxWidth: '550px', margin: '40px auto', fontFamily: 'Arial', padding: '30px',
        backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
        <h2 style={{ textAlign: 'center', color: '#1565c0', marginTop: 0 }}>🎫 Complaint Register</h2>

        {submitted && (
          <div style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '8px', marginBottom: '20px',
            border: '1px solid #4caf50', color: '#1b5e20' }}>
            ✅ Complaint submitted! Reference No: <strong>{referenceNo}</strong>
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
              Employee Name
            </label>
            <input
              type="text"
              name="employeeName"
              value={employeeName}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd',
                fontSize: '1em', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
              Complaint
            </label>
            <textarea
              name="complaint"
              value={complaint}
              onChange={this.handleChange}
              placeholder="Describe your complaint in detail..."
              required
              rows={5}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd',
                fontSize: '1em', resize: 'vertical', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#1565c0', color: 'white', border: 'none',
              padding: '12px', borderRadius: '8px', fontSize: '1.1em', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Submit Complaint
          </button>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🛠️ Ticket Raising System</h1>
      <ComplaintRegister />
    </div>
  );
}

export default App;
