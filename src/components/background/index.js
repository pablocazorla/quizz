import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from 'data';
import BgParticles from './particles';

class BgVisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'none',
      backgroundColor: '#FFF'
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.status === 'in' && prevProps.status !== 'in'){
      this.setState({ status: 'in'});
      this.setIn();
    }
    if(this.props.status === 'out' && prevProps.status !== 'out'){
      this.setState({ status: 'out'});
    }
  }
  setIn = () => {
    const step = data[this.props.currentStep];
    this.setState({ backgroundColor: step.backgroundColor });
  }
  render() {
    const {backgroundColor} = this.state;
    return <div className="main-background" style={{'backgroundColor':backgroundColor}}>
      <div className="main-background-gradient"></div>
      <BgParticles/>
    </div>;
  }
};

/* REDUX ***************************/
function mapStateToProps(state) {
  const {currentStep} = state.UI;
  return {currentStep};
}
const Bg = connect(
  mapStateToProps,null
)(BgVisual);

export default Bg;