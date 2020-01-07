import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Item extends Component {
  //constructor(props) {
  //  super(props);
  //}
  //static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  //}
  //componentDidMount(){
  //}
  render() {
    return <CSSTransition
     // in={showMessage}
      timeout={300}
      classNames="view"
      // unmountOnExit
      // onEnter={() => setShowButton(false)}
      // onExited={() => setShowButton(true)}
    >  
      <div className="view main-loading">
        <div className="main-loading-center">
          Loading
        </div>
      </div>
    </CSSTransition>;
  }
};