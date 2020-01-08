import React, { Component } from 'react';
import particles from './particles';

export default class BgParticles extends Component {
  constructor(props) {
   super(props);
   this.canvas = null;
  }
  //static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  //}
  // componentDidUpdate(prevProps, prevState) {
  //   if(this.props.status === 'in' && prevProps.status !== 'in'){
  //     //Perform some operation here
  //     this.setState({ status: 'in'});
  //     this.setIn('in');
  //   }
  //   if(this.props.status === 'out' && prevProps.status !== 'out'){
  //     //Perform some operation here
  //     this.setState({ status: 'out'});
  //     this.setIn('out');
  //   }
  // }
  componentDidMount(){
    if(window && document){
      this.canvas = document.getElementById('bg-particles');
        
      window.addEventListener('resize',this.resize);
      
      this.resize();

      particles({
        canvas: this.canvas
      });
    }
  }
  resize = () => {
    if(window){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }
  render() {
    return <canvas className="bg-particles" id="bg-particles"
      style={{'WebkitFilter':'blur(3px)'}}
    ></canvas>;
  }
};