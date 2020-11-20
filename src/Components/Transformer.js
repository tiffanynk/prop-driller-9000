import React from 'react';

function Transformer(props) {

  return (
    <img
      className = 'transformer'
      src = {props.url}
      alt = {props.name}
    />
  );
}

export default Transformer;
