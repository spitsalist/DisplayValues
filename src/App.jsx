import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Value Tracker</h1>
        <input type="text" value={value} onChange={handleChange} />
        <ValueDisplay value={value} />
      </header>
    </div>
  );
}

export default App;