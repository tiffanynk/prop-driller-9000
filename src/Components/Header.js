import React from 'react';

function Header(props) {
  
  const handleClick = () => {
    props.toggleDisplay()
  }

  return (
    <header>
      <img
        onClick = {handleClick}
        src = {props.logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
