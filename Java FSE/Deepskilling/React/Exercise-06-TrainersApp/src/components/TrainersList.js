import React from 'react';
import { Link } from 'react-router-dom';
import TrainersMock from '../TrainersMock';

// Exercise 6: HOL - React Router - TrainersList component
function TrainersList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#333' }}>Trainers List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {TrainersMock.map(trainer => (
          <li key={trainer.TrainerId} style={{
            margin: '10px 0',
            padding: '10px',
            backgroundColor: '#f0f4f8',
            borderRadius: '6px',
            borderLeft: '4px solid #667eea'
          }}>
            <Link
              to={`/trainers/${trainer.TrainerId}`}
              style={{ textDecoration: 'none', color: '#667eea', fontWeight: 'bold', fontSize: '1.1em' }}
            >
              {trainer.Name} — {trainer.Technology}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
