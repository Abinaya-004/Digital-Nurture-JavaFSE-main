import React from 'react';
import EmployeeCard from './EmployeeCard';

// Exercise 14: HOL - Context API - EmployeeList component
// No longer passes theme as props to EmployeeCard (uses Context)
function EmployeeList({ employees }) {
  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Employee List</h3>
      <div>
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
