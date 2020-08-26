import React from 'react';

function Header({ logo }) {

  return (
    <header>
      <img
        src={ logo }
        alt="logo"
      />
    </header>
  );
}

export default Header;
