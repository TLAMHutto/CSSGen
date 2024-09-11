// src/BoxShadowGenerator.js

import React, { useState } from 'react';

const BoxShadowGenerator = () => {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');

  const boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#f0f0f0',
          boxShadow: boxShadow,
          margin: '20px auto',
          transition: 'box-shadow 0.3s ease'
        }}
      ></div>

      <div>
        <label>
          Horizontal Offset:
          <input
            type="range"
            min="-100"
            max="100"
            value={horizontal}
            onChange={(e) => setHorizontal(e.target.value)}
          />
          {horizontal}px
        </label>
      </div>

      <div>
        <label>
          Vertical Offset:
          <input
            type="range"
            min="-100"
            max="100"
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
          />
          {vertical}px
        </label>
      </div>

      <div>
        <label>
          Blur Radius:
          <input
            type="range"
            min="0"
            max="100"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          {blur}px
        </label>
      </div>

      <div>
        <label>
          Spread Radius:
          <input
            type="range"
            min="-50"
            max="50"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
          {spread}px
        </label>
      </div>

      <div>
        <label>
          Shadow Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>

      <div>
        <p>CSS Code:</p>
        <pre>{`box-shadow: ${boxShadow};`}</pre>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
