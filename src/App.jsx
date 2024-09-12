import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import BasicSpeedDial from './components/SpeedDialComponent';
import BoxShadowGenerator from './pages/BoxShadow';
import GradientGenerator from './pages/ColorGradient';
import TransformGenerator from './pages/Transform';
import FilerGenerator from './pages/Filter'

const App = () => {
  return (
    <Router>
      <div>
        <BasicSpeedDial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/box-shadow" element={<BoxShadowGenerator />} />
          <Route path="/color-gradient" element={<GradientGenerator />} />
          <Route path="/transform" element={<TransformGenerator />} />
          <Route path="/filter" element={<FilerGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
