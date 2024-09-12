import React, { useState } from 'react';
import '../App.css';
import fire from '../filter.png'
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
      <span>{value}</span>
    </div>
  );
};

// ColorPicker Component
const ColorPicker = ({ color, onChange }) => {
  return (
    <div className="color-picker">
      <label htmlFor="color">Color</label>
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
const Preview = ({ filterValues, color }) => {
  const { brightness, contrast, saturate, blur, dropShadow, grayscale, hueRotate } = filterValues;
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) blur(${blur}px) drop-shadow(${dropShadow}px ${dropShadow}px ${dropShadow}px rgba(0, 0, 0, 0.5)) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg)`,
    backgroundColor: color,
  };

  return (
    <div className="preview" style={filterStyle}>
        <img src={fire} alt="fire" />
    </div>
  );
};

// FilterGenerator Component
const FilterGenerator = () => {
  const [filterValues, setFilterValues] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    blur: 0,
    dropShadow: 0,
    grayscale: 0,
    hueRotate: 0,
  });
  const [color, setColor] = useState("#ffffff"); // Default to white

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Generate CSS filter string
  const cssFilter = `filter: brightness(${filterValues.brightness}%) contrast(${filterValues.contrast}%) saturate(${filterValues.saturate}%) blur(${filterValues.blur}px) drop-shadow(${filterValues.dropShadow}px ${filterValues.dropShadow}px ${filterValues.dropShadow}px rgba(0, 0, 0, 0.5)) grayscale(${filterValues.grayscale}%) hue-rotate(${filterValues.hueRotate}deg);`;

  return (
    <div className="app">
      <h1>Filter Generator</h1>
      <div className="controls">
        <div className="sliders">
          <Slider name="brightness" label="Brightness" min={0} max={200} value={filterValues.brightness} onChange={handleSliderChange} />
          <Slider name="contrast" label="Contrast" min={0} max={200} value={filterValues.contrast} onChange={handleSliderChange} />
          <Slider name="saturate" label="Saturate" min={0} max={200} value={filterValues.saturate} onChange={handleSliderChange} />
          <Slider name="blur" label="Blur" min={0} max={10} value={filterValues.blur} onChange={handleSliderChange} />
          <Slider name="dropShadow" label="Drop Shadow" min={0} max={50} value={filterValues.dropShadow} onChange={handleSliderChange} />
          <Slider name="grayscale" label="Grayscale" min={0} max={100} value={filterValues.grayscale} onChange={handleSliderChange} />
          <Slider name="hueRotate" label="Hue Rotate" min={0} max={360} value={filterValues.hueRotate} onChange={handleSliderChange} />
        </div>
        <ColorPicker color={color} onChange={handleColorChange} />
      </div>
      <Preview filterValues={filterValues} color={color} />
      <div className="css-code">
        <p>CSS Code:</p>
        <pre>{cssFilter}</pre>
      </div>
    </div>
  );
};

export default FilterGenerator;
