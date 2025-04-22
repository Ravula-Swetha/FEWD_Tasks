import React, { useState } from 'react';

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
    </div>
  );
}

export default FocusBlur;
