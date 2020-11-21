import React from 'react';
import Header from './Components/Header';
import TransformersSection from './Containers/TransformersSection';

import './App.css';


export default class App extends React.Component {
  state = {
    isActive: false,
    proptimusLogo: 'https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png',
    proptimusii: [
      {
        id: 93,
        isClicked: false,
        name: 'alpha',
        url: 'https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726'
      },
      {
        id: 307,
        isClicked: false,
        name: 'beta',
        url: 'https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png' },
      {
        id: 9001,
        isClicked: false,
        name: 'omega',
        url: 'http://pngimg.com/uploads/transformers/transformers_PNG3.png'
      }
    ],
  }

  toggleDisplay = () => {
    this.setState(previousState => ({
      isActive : !previousState.isActive
    }))
  }

  toggleImage = () => {
    this.state.proptimusii.isClicked === false
    ? this.setState({ isClicked: true })
    : this.setState({ isClicked: false })
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          toggleDisplay={this.toggleDisplay} 
          proptimusii={this.state.proptimusii} 
          isActive={this.state.isActive} 
          logo={this.state.proptimusLogo}
        />
        <p>Click on the Proptimus Logo above to see the Proptimussii. Then click on the Proptimus to see more!</p>
        {this.state.isActive 
          ? <TransformersSection proptimusii={this.state.proptimusii} isClicked={this.toggleImage} /> 
          : null}
      </div>
    )
  }

}
