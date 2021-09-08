import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Words from './Words/Words';

function App() {
  return (
    <Router>
    <div className="App">
    <Words />
    </div>
    </Router>
  );
}

export default App;
