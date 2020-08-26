import React from 'react';

function Transformer({ transformer }) {

  return (
    <img
      className = 'transformer'
      src = { transformer.url }
      alt = { transformer.name }
    />
  );
}

export default Transformer;
