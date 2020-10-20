import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/styling.css'
import Machine from './Components/slotmac'

function App() {
  return (
    <div className="App">
      <div className="mac">
        <h4>🎰 slot machine</h4>
        <Machine x='😏' y='😭' z='👾'/>
        <Machine x='😏' y='😏' z='😏'/>
      </div>
    </div>
  );
}

export default App;
