import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './components/EmployeeList';

// Exercise 14: HOL - React Context API
// employeeapp - Employee management with light/dark theme via Context

const employees = [
  { id: 'E001', name: 'Alice Johnson', role: 'Developer', department: 'Engineering' },
  { id: 'E002', name: 'Bob Smith', role: 'Designer', department: 'UX' },
  { id: 'E003', name: 'Carol Davis', role: 'Manager', department: 'HR' },
  { id: 'E004', name: 'David Lee', role: 'Analyst', department: 'Finance' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  toggleTheme = () => {
    this.setState(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' }));
  };

  render() {
    const { theme } = this.state;

    return (
      // Wrap in ThemeContext.Provider - value from state
      <ThemeContext.Provider value={theme}>
        <div style={{
          minHeight: '100vh',
          backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
          color: theme === 'dark' ? '#fff' : '#333',
          fontFamily: 'Arial',
          padding: '20px',
          transition: 'all 0.3s'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1>👥 Employee Management App</h1>
            <div>
              <span style={{ marginRight: '10px' }}>Current Theme: <strong>{theme}</strong></span>
              <button
                onClick={this.toggleTheme}
                style={{
                  backgroundColor: theme === 'dark' ? '#ffd700' : '#333',
                  color: theme === 'dark' ? '#333' : '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
              </button>
            </div>
          </div>
          {/* EmployeeList receives employees but NOT theme (theme comes from Context) */}
          <EmployeeList employees={employees} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
