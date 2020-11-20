import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

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
      <section className = "transformers-section">
        {this.showTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
