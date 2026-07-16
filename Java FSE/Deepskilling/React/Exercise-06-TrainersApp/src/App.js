import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TrainersList from './components/TrainersList';
import TrainerDetails from './components/TrainerDetails';

// Exercise 6: HOL - React Router
// TrainersApp with BrowserRouter, Routes, Route and Link
function App() {
  const navStyle = {
    backgroundColor: '#667eea',
    padding: '15px 25px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '4px'
  };

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={navStyle}>
          <span style={{ color: 'white', fontSize: '1.3em', marginRight: '20px' }}>🏫 TrainersApp</span>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/trainers" style={linkStyle}>Trainers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
