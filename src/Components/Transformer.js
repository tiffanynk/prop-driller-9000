import React from 'react';

function Transformer(props) {
  const { transformer } = props
  const { url, name } = transformer

  return (
    <div>
      <img
        key = {transformer.id}
        className = 'transformer'
        src = {url}
        alt = {name}
        onClick={props.onClick}
      />
    </div>
  );
}

export default Transformer;
