import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import BasicSpeedDial from './components/SpeedDialComponent';
import BoxShadowGenerator from './pages/BoxShadow';
import GradientGenerator from './pages/ColorGradient';

const App = () => {
  return (
    <Router>
      <div>
        <BasicSpeedDial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/box-shadow" element={<BoxShadowGenerator />} />
          <Route path="/color-gradient" element={<GradientGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
