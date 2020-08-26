import React from 'react';

import './App.css';

import Header from './Components/Header';

export default class App extends React.Component {
  state = {
    proptimusLogo: 'https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png',
    proptimusii: {
      alpha: 'https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726',
      beta: 'https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png',
      omega: 'http://pngimg.com/uploads/transformers/transformers_PNG3.png'
    }
  }

  render() {
    return (
      <div className="App">
        <Header logo = { this.state.proptimusLogo } />
      </div>
    );
  }
}
