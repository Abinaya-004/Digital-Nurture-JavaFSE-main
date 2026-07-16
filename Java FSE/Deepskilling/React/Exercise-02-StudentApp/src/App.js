import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

// Exercise 2: HOL - Creating Class Components and Rendering Multiple Components
// StudentApp - Student Management Portal
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Student Management Portal</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
