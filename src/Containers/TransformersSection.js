import React, { Component } from 'react';
import Transformer from '../Components/Transformer';
import '../App.css'
class TransformersSection extends Component {
  state = {
    transformerIndex: 0
  }

  getEachTransformer = () => {
    return this.props.proptimusii.map(proptimus => {
      return <Transformer transformer={ proptimus }/>
    })
  }
  displayOneTransformer = () => {
    return <Transformer transformer={this.props.proptimusii[this.state.transformerIndex]} onClick = {this.cycleTransformers}
            />
  }

  cycleTransformers = () => {
    (this.state.transformerIndex < (this.props.proptimusii.length - 1))
    ? this.setState(prevState => ({transformerIndex: prevState.transformerIndex + 1}))
    : this.setState({transformerIndex: 0})
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.displayOneTransformer()}
      </section>
    );
  }
}
export default TransformersSection;