import React from 'react';

function Header(props) {
  
  return (
    <header>
      <img
        onClick={props.handleHiddenProps}
        src = {props.src}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
