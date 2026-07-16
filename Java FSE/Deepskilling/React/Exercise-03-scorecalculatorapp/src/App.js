import React from 'react';
import CalculateScore from './Components/CalculateScore';

// Exercise 3: HOL - Function Component with CSS Styling
// scorecalculatorapp - Calculate and display student average score
function App() {
  return (
    <div>
      <CalculateScore
        Name="John Doe"
        School="Cognizant Academy"
        Total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
