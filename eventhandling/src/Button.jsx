import React from 'react';

const Button = ({ boxColor }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          boxColor();
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Button;