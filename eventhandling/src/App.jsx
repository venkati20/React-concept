import React, { useState } from 'react';
import Button from './Button';

const App = () => {
  const[click,setClick]=useState(0)
  const [showInput, setShowInput] = useState(false);

  const clicks=()=>{
    setClick(c=>c+1)
  }

  const boxColor = () => {
    setShowInput(true);
  };

  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid black", padding: "10px" }} onClick={clicks}>
      <p>number of counts:{click}</p>
      <Button boxColor={boxColor} />
      {showInput && (
        <input
          type="color"
          onChange={(e) => {
            document.body.style.backgroundColor = e.target.value;
          }}
        />
      )}
    </div>
  );
};

export default App;