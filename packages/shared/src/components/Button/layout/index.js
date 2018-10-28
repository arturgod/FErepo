import React from 'react';

const defaultStyles = {
  padding: '10px',
  background: 'white',
  borderRadius: '20px',
  border: '1px solid #aaa',
};

const ButtonLayout = ({ children, onClick, style }) => (
  <button
    onClick={onClick}
    style={{
      ...defaultStyles,
      ...style,
    }}
  >
    {children}
  </button>
);

export { ButtonLayout };
