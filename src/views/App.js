import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions from '../../redux/item/actions';
import Quest from './quest';

class AppVisual extends Component {
  // constructor(props) {
  //   super(props);    
  // }
  //static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  //}
  //componentDidMount(){
  //}
  render() {
   // const {currentView} = this.props;

    return <div id="quizz-app">
      <Quest/>
    </div>;
  }
};

/* REDUX ***************************/

// const {  
//   toggleSidebar
// } = actions;

function mapStateToProps(state) {
  const {currentView} = state.UI;
  return {currentView};
}
/*
const mapDispatchToProps = dispatch => {
	return {
    toggleSidebar: (lang) => {
      dispatch(toggleSidebar(lang))
    }
	}
}
*/
const App = connect(
  mapStateToProps,null
  //mapDispatchToProps
)(AppVisual);

export default App;