import React, { useState } from 'react';
import 'C:/Users/SAINATH/Documents/Year_3/SEM2/React/my-react/src/CSS/FocusBlur.css';

function FocusBlur() {
  const [message, setMessage] = useState('Click inside the input box');

  const handleFocus = () => {
    setMessage('Input is focused!');
  };

  const handleBlur = () => {
    setMessage('Input lost focus!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>{message}</h2>
      <input
        type="text"
        placeholder="Type something..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ padding: '10px', fontSize: '16px' }}
      />

      <p className="blur-text">Hover over this text to blur it</p>
    </div>
  );
}

export default FocusBlur;
