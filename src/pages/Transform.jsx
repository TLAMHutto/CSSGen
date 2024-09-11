import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the preview box
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightblue;
  transform: ${(props) => props.transform};
  transition: transform 0.3s ease;
  margin: 20px auto;
`;

// Main component for the transformation generator
const TransformGenerator = () => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  // Combine transformations into a single string
  const transform = `rotate(${rotate}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg)`;

  return (
    <div style={{ padding: '20px' }}>
      
      {/* Preview Box */}
      <Box transform={transform}/>

      {/* Rotate Slider */}
      <div>
        <label>Rotate:</label>
        <input
          type="range"
          min="-360"
          max="360"
          value={rotate}
          onChange={(e) => setRotate(e.target.value)}
        />
        <span>{rotate}°</span>
      </div>

      {/* Scale Slider */}
      <div>
        <label>Scale:</label>
        <input
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        />
        <span>{scale}</span>
      </div>

      {/* Translate X Slider */}
      <div>
        <label>Translate X:</label>
        <input
          type="range"
          min="-500"
          max="500"
          value={translateX}
          onChange={(e) => setTranslateX(e.target.value)}
        />
        <span>{translateX}px</span>
      </div>

      {/* Translate Y Slider */}
      <div>
        <label>Translate Y:</label>
        <input
          type="range"
          min="-500"
          max="500"
          value={translateY}
          onChange={(e) => setTranslateY(e.target.value)}
        />
        <span>{translateY}px</span>
      </div>

      {/* Skew X Slider */}
      <div>
        <label>Skew X:</label>
        <input
          type="range"
          min="-90"
          max="90"
          step="1"
          value={skewX}
          onChange={(e) => setSkewX(e.target.value)}
        />
        <span>{skewX}°</span>
      </div>

      {/* Skew Y Slider */}
      <div>
        <label>Skew Y:</label>
        <input
          type="range"
          min="-90"
          max="90"
          step="1"
          value={skewY}
          onChange={(e) => setSkewY(e.target.value)}
        />
        <span>{skewY}°</span>
      </div>

      {/* Generated CSS Code */}
      <div>
        <h3>Generated CSS:</h3>
        <pre>{`transform: ${transform};`}</pre>
      </div>
    </div>
  );
};

export default TransformGenerator;
