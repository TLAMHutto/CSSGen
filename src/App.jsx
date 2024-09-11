import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicSpeedDial from './components/SpeedDialComponent';
import BoxShadowGenerator from './pages/BoxShadow';
import HomePage from './pages/Home'; // Import HomePage component

const App = () => {
  return (
    <Router>
      <div>
        <BasicSpeedDial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/box-shadow" element={<BoxShadowGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
