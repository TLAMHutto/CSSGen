// src/pages/Resize.jsx
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import '../App.css'
// ResizableBox Component
const ResizableBoxComponent = ({ onResize }) => {
  const [size, setSize] = useState({ width: 200, height: 200 });

  const handleResize = (e, { size }) => {
    setSize(size);
    onResize(size);
  };

  return (
    <ResizableBox
      width={size.width}
      height={size.height}
      minConstraints={[50, 50]}
      maxConstraints={[600, 600]}
      onResize={handleResize}
      style={{ border: '1px solid black', background: '#f0f0f0' }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <p>Width: {Math.round(size.width)}px</p>
        <p>Height: {Math.round(size.height)}px</p>
      </div>
    </ResizableBox>
  );
};

// CodeDisplay Component
const CodeDisplay = ({ size }) => {
  const { width, height } = size;
  const cssCode = `
    .resizable-box {
      width: ${Math.round(width)}px;
      height: ${Math.round(height)}px;
    }
  `;

  return (
    <div>
      <h3>Generated CSS Code:</h3>
      <pre>{cssCode}</pre>
    </div>
  );
};

// Combined Component
const Resize = () => {
  const [size, setSize] = useState({ width: 200, height: 200 });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pixel Size Generator</h1>
      <ResizableBoxComponent onResize={setSize} />
      <CodeDisplay size={size} />
    </div>
  );
};

export default Resize;
