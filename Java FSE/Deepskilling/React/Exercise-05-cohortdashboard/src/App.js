import React from 'react';
import CohortDetails from './CohortDetails';
import CohortData from './Cohort';

// Exercise 5: HOL - Styling React Components with CSS Modules
// cohortdashboard - Dashboard for ongoing and completed cohorts
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Cohort Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Ongoing cohorts are shown in green, completed in blue</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {CohortData.map(cohort => (
          <CohortDetails key={cohort.code} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
