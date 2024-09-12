import React, { useState } from 'react';
import '../App.css';

// Slider Component
const Slider = ({ name, label, min, max, value, onChange }) => {
  return (
    <div className="slider">
      <label htmlFor={name}>{label}</label>
      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span>{value}px</span>
    </div>
  );
};

// ColorPicker Component
const ColorPicker = ({ color, onChange }) => {
  return (
    <div className="color-picker">
      <label htmlFor="color">Shadow Color</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={onChange}
      />
    </div>
  );
};

// Preview Component
const Preview = ({ boxShadow }) => {
  return (
    <div className="preview" style={{ boxShadow }}/>
  );
};

// BoxShadowGenerator Component
const BoxShadowGenerator = () => {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');

  const boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'horizontal':
        setHorizontal(value);
        break;
      case 'vertical':
        setVertical(value);
        break;
      case 'blur':
        setBlur(value);
        break;
      case 'spread':
        setSpread(value);
        break;
      default:
        break;
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="app">
      <Preview boxShadow={boxShadow} />
      <div className="controls">
        <div className="sliders">
          <Slider name="horizontal" label="Horizontal Offset" min="-100" max="100" value={horizontal} onChange={handleSliderChange} />
          <Slider name="vertical" label="Vertical Offset" min="-100" max="100" value={vertical} onChange={handleSliderChange} />
          <Slider name="blur" label="Blur Radius" min="0" max="100" value={blur} onChange={handleSliderChange} />
          <Slider name="spread" label="Spread Radius" min="-50" max="50" value={spread} onChange={handleSliderChange} />
        </div>
        <ColorPicker color={color} onChange={handleColorChange} />
      </div>
      
      <div className="css-code">
        <p>CSS Code:</p>
        <pre>{`box-shadow: ${boxShadow};`}</pre>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
