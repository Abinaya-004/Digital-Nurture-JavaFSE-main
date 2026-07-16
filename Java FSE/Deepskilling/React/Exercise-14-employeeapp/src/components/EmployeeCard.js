import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

// Exercise 14: HOL - Context API - EmployeeCard component
// Uses useContext() to retrieve theme from context instead of props
function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext); // Retrieve theme from Context

  const buttonClass = theme === 'dark' ? 'btn-dark' : 'btn-light';

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px',
    width: '220px',
    display: 'inline-block',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    verticalAlign: 'top'
  };

  const btnStyle = {
    backgroundColor: theme === 'dark' ? '#555' : '#1565c0',
    color: 'white',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%'
  };

  return (
    <div style={cardStyle} className={buttonClass}>
      <h4 style={{ margin: '0 0 8px 0' }}>👤 {employee.name}</h4>
      <p style={{ margin: '4px 0', fontSize: '0.9em' }}>ID: {employee.id}</p>
      <p style={{ margin: '4px 0', fontSize: '0.9em' }}>Role: {employee.role}</p>
      <p style={{ margin: '4px 0', fontSize: '0.9em' }}>Dept: {employee.department}</p>
      <button style={btnStyle} className={buttonClass}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
