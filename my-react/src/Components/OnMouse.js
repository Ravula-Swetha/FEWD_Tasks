import React, { useState } from 'react';

function OnMouse() {
  const [message, setMessage] = useState('Hover over the box below');

  const handleMouseEnter = () => {
    setMessage('Mouse is inside the box!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the box.');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hover Me!</h1>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          margin: '20px auto',
          width: '300px',
          height: '300px',
          backgroundColor: '#7444c',
          border: '2px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default OnMouse;
