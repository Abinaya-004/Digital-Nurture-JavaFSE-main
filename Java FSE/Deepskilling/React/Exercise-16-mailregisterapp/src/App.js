import React, { Component } from 'react';

// Exercise 16: HOL - React Form Validation
// mailregisterapp - Register form with name, email, password validation

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {},
      success: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errors: {}, success: false });
  };

  // Validate on change (eventHandle)
  validateField = (name, value) => {
    const errors = { ...this.state.errors };

    if (name === 'name') {
      if (value.length < 5) {
        errors.name = 'Name must have at least 5 characters';
      } else {
        delete errors.name;
      }
    }

    if (name === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        errors.email = 'Email must contain @ and .';
      } else {
        delete errors.email;
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        errors.password = 'Password must have at least 8 characters';
      } else {
        delete errors.password;
      }
    }

    this.setState({ errors });
  };

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.validateField(name, value);
  };

  // Validate on submit (eventSubmit)
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const errors = {};

    if (name.length < 5) errors.name = 'Name must have at least 5 characters';
    if (!email.includes('@') || !email.includes('.')) errors.email = 'Email must contain @ and .';
    if (password.length < 8) errors.password = 'Password must have at least 8 characters';

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState({ success: true, errors: {} });
    alert('Registration successful! Welcome, ' + name);
  };

  render() {
    const { name, email, password, errors, success } = this.state;

    const inputStyle = (field) => ({
      width: '100%',
      padding: '10px',
      borderRadius: '6px',
      border: errors[field] ? '2px solid red' : '1px solid #ddd',
      fontSize: '1em',
      boxSizing: 'border-box',
      marginTop: '4px'
    });

    return (
      <div style={{ maxWidth: '480px', margin: '40px auto', padding: '30px',
        backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontFamily: 'Arial' }}>
        <h2 style={{ textAlign: 'center', color: '#1565c0', marginTop: 0 }}>📧 Register</h2>

        {success && (
          <div style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '8px',
            marginBottom: '20px', color: '#1b5e20', border: '1px solid #4caf50' }}>
            ✅ Registration successful!
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleFieldChange}
              placeholder="Enter your name (min 5 chars)"
              style={inputStyle('name')}
            />
            {errors.name && <p style={{ color: 'red', margin: '4px 0 0 0', fontSize: '0.85em' }}>⚠️ {errors.name}</p>}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleFieldChange}
              placeholder="Enter your email (must have @ and .)"
              style={inputStyle('email')}
            />
            {errors.email && <p style={{ color: 'red', margin: '4px 0 0 0', fontSize: '0.85em' }}>⚠️ {errors.email}</p>}
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleFieldChange}
              placeholder="Enter password (min 8 chars)"
              style={inputStyle('password')}
            />
            {errors.password && <p style={{ color: 'red', margin: '4px 0 0 0', fontSize: '0.85em' }}>⚠️ {errors.password}</p>}
          </div>

          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#1565c0', color: 'white', border: 'none',
              padding: '12px', borderRadius: '8px', fontSize: '1.1em', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📋 Mail Register App</h1>
      <Register />
    </div>
  );
}

export default App;
