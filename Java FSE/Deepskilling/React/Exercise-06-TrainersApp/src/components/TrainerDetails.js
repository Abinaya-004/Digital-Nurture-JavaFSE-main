import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TrainersMock from '../TrainersMock';

// Exercise 6: HOL - React Router - TrainerDetails component using useParams hook
function TrainerDetails() {
  const { id } = useParams();
  const trainer = TrainersMock.find(t => t.TrainerId === parseInt(id));

  if (!trainer) {
    return (
      <div style={{ padding: '20px' }}>
        <h2 style={{ color: 'red' }}>Trainer not found</h2>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '20px auto' }}>
      <div style={{
        backgroundColor: '#f0f4f8',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#667eea', marginTop: 0 }}>{trainer.Name}</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Trainer ID</td><td>{trainer.TrainerId}</td></tr>
            <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Email</td><td>{trainer.Email}</td></tr>
            <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Phone</td><td>{trainer.Phone}</td></tr>
            <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Technology</td><td>{trainer.Technology}</td></tr>
            <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Skills</td><td>{trainer.Skills.join(', ')}</td></tr>
          </tbody>
        </table>
        <br />
        <Link to="/trainers" style={{ color: '#667eea', textDecoration: 'none' }}>← Back to Trainers List</Link>
      </div>
    </div>
  );
}

export default TrainerDetails;
