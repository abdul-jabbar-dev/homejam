import React from 'react';
import './App.css';
import MidSection from './Components/MidSection';
import TopSection from './Components/TopSection';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0A0B1A' }}>
      <TopSection></TopSection>
      <MidSection></MidSection>
    </div>
  );
}

export default App;
