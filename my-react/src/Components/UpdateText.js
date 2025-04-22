import React, { useState } from 'react';

function UpdateText() {
  const [text, setText] = useState('Hello, welcome!');
  let [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }
  const handleClick = () => {
    increment();
    if(count % 2 == 0){
       setText('Thanks for clicking the button!');
    }
    else{
        setText('Hello, welcome!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>{text}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UpdateText;
