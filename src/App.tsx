import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
      <div className="missions-frame">
        <Missions />
      </div>
    </>
  );
}

export default App;
