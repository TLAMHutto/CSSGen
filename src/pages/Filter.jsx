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

// Preview Component
const Preview = ({ filterValues }) => {
  const { brightness, contrast, saturate, blur } = filterValues;
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) blur(${blur}px)`,
  };

  return (
    <div className="preview">
      <div className="image" style={filterStyle}>
        <img src="https://via.placeholder.com/300" alt="Preview" />
      </div>
    </div>
  );
};

// App Component
const FilterGenerator = () => {
  const [filterValues, setFilterValues] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    blur: 0,
  });

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <div className="sliders">
        <Slider name="brightness" label="Brightness" min={0} max={200} value={filterValues.brightness} onChange={handleSliderChange} />
        <Slider name="contrast" label="Contrast" min={0} max={200} value={filterValues.contrast} onChange={handleSliderChange} />
        <Slider name="saturate" label="Saturate" min={0} max={200} value={filterValues.saturate} onChange={handleSliderChange} />
        <Slider name="blur" label="Blur" min={0} max={10} value={filterValues.blur} onChange={handleSliderChange} />
      </div>
      <Preview filterValues={filterValues} />
    </div>
  );
};

export default FilterGenerator;
