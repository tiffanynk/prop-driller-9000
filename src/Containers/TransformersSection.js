import React, { Component } from 'react';

import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  displayTransformers = () => {
    return this.props.transformers.map(transformer=> {
      return <Transformer key = {transformer.id} transformer = {transformer} />
    })
  }

  render() {
    return (
      <section className = "transformers-section">
        {/* Transformers here */}
        { this.displayTransformers() }
      </section>
    );
  }
}

export default TransformersSection;
