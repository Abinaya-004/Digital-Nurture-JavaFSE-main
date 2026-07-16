import React, { Component } from 'react';

// Exercise 8: HOL - React State
// CountPeople component demonstrating state management
class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // UpdateEntry method - increments entrycount
  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  // UpdateExit method - increments exitcount
  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    const { entrycount, exitcount } = this.state;
    const peoplInside = entrycount - exitcount;

    return (
      <div style={{ fontFamily: 'Arial', maxWidth: '500px', margin: '40px auto', textAlign: 'center' }}>
        <h1 style={{ color: '#333' }}>🏬 Mall People Counter</h1>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '30px 0',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          {/* Entry Count Card */}
          <div style={{
            backgroundColor: '#e8f5e9',
            padding: '20px',
            borderRadius: '10px',
            minWidth: '140px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>Entry Count</h3>
            <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#2e7d32', margin: '0' }}>
              {entrycount}
            </p>
            <p style={{ color: '#666', margin: '5px 0 0 0' }}>People Entered</p>
          </div>

          {/* Exit Count Card */}
          <div style={{
            backgroundColor: '#ffebee',
            padding: '20px',
            borderRadius: '10px',
            minWidth: '140px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#c62828', margin: '0 0 10px 0' }}>Exit Count</h3>
            <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#c62828', margin: '0' }}>
              {exitcount}
            </p>
            <p style={{ color: '#666', margin: '5px 0 0 0' }}>People Exited</p>
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ fontSize: '1.2em', color: '#555' }}>
            People Currently Inside: <strong style={{ color: '#1565c0', fontSize: '1.4em' }}>
              {peoplInside >= 0 ? peoplInside : 0}
            </strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button
            onClick={this.UpdateEntry}
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '12px 25px',
              borderRadius: '8px',
              fontSize: '1em',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Login (Entry)
          </button>
          <button
            onClick={this.UpdateExit}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '12px 25px',
              borderRadius: '8px',
              fontSize: '1em',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
