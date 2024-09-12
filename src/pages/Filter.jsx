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
  const { brightness, contrast, saturate, blur } = filterValues;
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) blur(${blur}px)`,
    backgroundColor: color,
  };

  return (
    <div className="preview" style={filterStyle}>
        <p>300 x 300</p>
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

  return (
    <div className="app">
      <div className="controls">
        <div className="sliders">
          <Slider name="brightness" label="Brightness" min={0} max={200} value={filterValues.brightness} onChange={handleSliderChange} />
          <Slider name="contrast" label="Contrast" min={0} max={200} value={filterValues.contrast} onChange={handleSliderChange} />
          <Slider name="saturate" label="Saturate" min={0} max={200} value={filterValues.saturate} onChange={handleSliderChange} />
          <Slider name="blur" label="Blur" min={0} max={10} value={filterValues.blur} onChange={handleSliderChange} />
        </div>
        <ColorPicker color={color} onChange={handleColorChange} />
      </div>
      <Preview filterValues={filterValues} color={color} />
    </div>
  );
};

export default FilterGenerator;
