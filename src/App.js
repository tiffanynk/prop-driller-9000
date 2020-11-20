import React from 'react';
import Header from './Components/Header';
import TransformersSection from './Containers/TransformersSection';
// import Transformer from './Components/Transformer';

import './App.css';


export default class App extends React.Component {
  state = {
    isEmpty: true,
    proptimusLogo: 'https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png',
    proptimusii: [
      {
        id: 93,
        name: 'alpha',
        url: 'https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726'
      },
      {
        id: 307,
        name: 'beta',
        url: 'https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png' },
      {
        id: 9001,
        name: 'omega',
        url: 'http://pngimg.com/uploads/transformers/transformers_PNG3.png'
      }
    ],
  }

  // handleClick = () => {
  //   this.setState({
  //     hiddenProptimusii: false
  //   })
  //   return (this.state.hiddenProptimusii ? null : <TransformersSection proptimusii={this.state.proptimusii}/>)
  // }
  
  render() {
    return (
      <div className="App">
        <Header src={this.state.proptimusLogo}/>
        <TransformersSection proptimusii={this.state.proptimusii}/>
      </div>
    )
  }

}
