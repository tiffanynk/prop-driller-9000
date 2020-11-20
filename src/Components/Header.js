import React from 'react';
// import TransformersSection from '../Containers/TransformersSection'
function Header(props) {
  
  // const showSection = props => {
  //   return (<TransformersSection proptimusii={props.proptimusii}/>)
  // }

  return (
    <header>
      <img
        // onClick = {this.showSection()}
        src = {props.src}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
