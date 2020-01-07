import React, { Component } from 'react';

export default class Menu extends Component {
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

    const {
      tl,
      tr,
      bl,
      br
    } = this.props;

    return <div className="main-menu">
      {tl ? <div className="main-menu-tl">
        {tl}
      </div> : null}
      {tr ? <div className="main-menu-tr">
        {tr}
      </div> : null}
      {bl ? <div className="main-menu-bl">
        {bl}
      </div> : null}
      {br ? <div className="main-menu-br">
        {br}
      </div> : null}
    </div>
  }
};