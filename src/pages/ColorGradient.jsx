import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  height: 300px;
  background: ${(props) => props.gradient};
  box-shadow: ${(props) => props.boxShadow};
  margin: 20px auto;
`;

const GradientGenerator = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [angle, setAngle] = useState(45);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div>
      <Box gradient={gradient} />

      <div>
        <label>Color 1:</label>
        <input
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
      </div>

      <div>
        <label>Color 2:</label>
        <input
          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </div>

      <div>
        <label>Angle:</label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default GradientGenerator;
