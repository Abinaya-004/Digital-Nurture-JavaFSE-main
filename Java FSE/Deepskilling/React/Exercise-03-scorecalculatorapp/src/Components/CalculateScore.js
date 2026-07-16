import React from 'react';
import '../Stylesheets/mystyle.css';

// Exercise 3: HOL - Function Component with Props and CSS Styling
// CalculateScore functional component
function CalculateScore({ Name, School, Total, goal }) {
  const average = (Total / goal) * 100;

  return (
    <div className="score-container">
      <h1>Score Calculator</h1>
      <div className="score-card">
        <h2>Student: {Name}</h2>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Score:</strong> {Total}</p>
        <p><strong>Goal:</strong> {goal}</p>
        <div className="average-score">
          Average Score: {average.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}

export default CalculateScore;
