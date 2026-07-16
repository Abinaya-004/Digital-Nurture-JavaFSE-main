import React from 'react';

// Exercise 9: HOL - ES6 Features (map, arrow functions, destructuring, spread)
// cricketapp

// ListofPlayers component - uses map() and arrow functions
function ListofPlayers() {
  // Declare array of 11 players with names and scores using ES6 map feature
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 60 },
    { name: 'KL Rahul', score: 90 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'Hardik Pandya', score: 72 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'MS Dhoni', score: 80 },
    { name: 'Jasprit Bumrah', score: 15 },
    { name: 'Mohammed Shami', score: 20 },
    { name: 'Yuzvendra Chahal', score: 10 },
    { name: 'Rishabh Pant', score: 68 }
  ];

  // Filter players with score below 70 using arrow functions
  const lowScoringPlayers = players.filter(player => player.score < 70);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#1565c0', borderBottom: '2px solid #1565c0', paddingBottom: '8px' }}>
        🏏 ListofPlayers (All 11 Players)
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#1565c0', color: 'white' }}>
            <th style={{ padding: '10px' }}>Player Name</th>
            <th style={{ padding: '10px' }}>Score</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} style={{ backgroundColor: player.score < 70 ? '#ffebee' : '#e8f5e9' }}>
              <td style={{ padding: '10px' }}>{player.name}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{player.score}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                {player.score < 70 ? '⚠️ Below 70' : '✅ Above 70'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ color: '#c62828' }}>Players with Score Below 70 (filtered using arrow function):</h3>
      <ul>
        {lowScoringPlayers.map((player, i) => (
          <li key={i}>{player.name} — Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

// IndianPlayers component - uses Destructuring and Spread (merge) features of ES6
function IndianPlayers() {
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya', 'MS Dhoni'];
  const RanjiTrophysplayers = ['Cheteshwar Pujara', 'Wriddhiman Saha', 'Mayank Agarwal', 'Hanuma Vihari', 'Shubman Gill'];

  // Destructuring - get odd and even team players
  const [player1, player2, player3, player4, player5] = T20players;
  const oddTeamPlayers = [player1, player3, player5];
  const evenTeamPlayers = [player2, player4];

  // Merge two arrays using spread operator (ES6 feature)
  const mergedPlayers = [...T20players, ...RanjiTrophysplayers];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#6a1b9a', borderBottom: '2px solid #6a1b9a', paddingBottom: '8px' }}>
        🏆 IndianPlayers (Destructuring + Spread)
      </h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f3e5f5', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: '#6a1b9a' }}>Odd Team Players</h3>
          <ul>{oddTeamPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
        <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#e8eaf6', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: '#283593' }}>Even Team Players</h3>
          <ul>{evenTeamPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e0f7fa', padding: '15px', borderRadius: '8px' }}>
        <h3 style={{ color: '#00695c' }}>Merged Players (T20 + Ranji — Spread Operator)</h3>
        <ul>{mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
      </div>
    </div>
  );
}

// App component - uses simple if/else flag variable to toggle between components
function App() {
  const flag = true; // Change to false to see IndianPlayers component

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', backgroundColor: '#1565c0', color: 'white', padding: '20px', margin: 0 }}>
        🏏 Cricket App — ES6 Features Demo
      </h1>
      <p style={{ textAlign: 'center', color: '#666', padding: '10px' }}>
        Current flag = {flag ? 'true (showing ListofPlayers)' : 'false (showing IndianPlayers)'}
      </p>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
      <hr />
      {/* Showing both for complete demo */}
      <IndianPlayers />
    </div>
  );
}

export default App;
