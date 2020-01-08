import React, { Component } from 'react';

//const speed = 50;

export default class TextType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letterVisible:-1,
      textArray: []
    }
    this.timeoutTypeWriter = null;
    this.timeoutUntypeWriter = null;
    this.timeoutTypeWriterDelay = null; 
  }
  
  //static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  //}
  componentDidUpdate(prevProps, prevState) {
    if(this.props.text !== prevProps.text){
      //Perform some operation here
      if(this.props.text === ''){
        this.untypeText();
      }else{
        this.typeText(this.props.text);
      }      
    }
  }
  untypeText = () => {
    clearTimeout(this.timeoutTypeWriter);
    clearTimeout(this.timeoutUntypeWriter);
    clearTimeout(this.timeoutTypeWriterDelay);
    let {letterVisible/*,textArray*/} = this.state;
    let self = this;

   // const textArrayLength = textArray.length || 400;

    const speed = 15;//Math.round(400 / textArrayLength);

    const untypeWriter = () => {      
      if (letterVisible >= 0) {
        
        letterVisible--;
        self.setState({ letterVisible });
        self.timeoutTypeWriter = setTimeout(untypeWriter, speed);
      }
    }
    untypeWriter();
  }
  typeText = (newText) => {
    clearTimeout(this.timeoutTypeWriter);
    clearTimeout(this.timeoutUntypeWriter);
    clearTimeout(this.timeoutTypeWriterDelay);
    let textArray = [];

    for(let i = 0; i < newText.length; i++){
      textArray.push(newText.charAt(i));
    }

    this.setState({ textArray,letterVisible:-1});

    const duration = this.props.duration || 500;
    const delay = this.props.delay || 1;
    let self = this;
    let letterVisible = -1;

    const speed = Math.round(duration / newText.length);

    const typeWriter = () => {      
      if (letterVisible < newText.length) {
        self.setState({ letterVisible });
        letterVisible++;
        self.timeoutTypeWriter = setTimeout(typeWriter, speed);
      }else{
        if(self.props.onFinish){
          self.props.onFinish();
        }
      }
    }
    this.timeoutTypeWriterDelay = setTimeout(typeWriter, delay);
  }
  componentDidMount(){
    const {text} = this.props;
    if(text && text !== ''){
      this.typeText(text);
    }
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutTypeWriter);
    clearTimeout(this.timeoutUntypeWriter);
    clearTimeout(this.timeoutTypeWriterDelay);
  }
  render() {
    const {textArray,letterVisible} = this.state;

    return <span className="text-type">{textArray.map((l,k) => {
      return <span key={k} style={{'opacity': k <= letterVisible ? '1' : '0'}}>{l}</span>;
    })}</span>;
  }
};