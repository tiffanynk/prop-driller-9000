import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({
      isActive: true
    })
  }

  showTransformers = () => {
    return this.props.proptimusii.map(transformer => {
      return (
        <Transformer 
          key={transformer.id}
          url={transformer.url} 
          name={transformer.name}
        />
      )
    })
  }

  render() {
    return (
      <section onClick={this.handleClick} className = "transformers-section">
        {this.state.isActive ? this.showTransformers() : null}
      </section>
    );
  }
}

export default TransformersSection;
