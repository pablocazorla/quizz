import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from 'data';
//import actions from 'rdx/ui/actions';

const totalStep = data.length;

class PaginationVisual extends Component {
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

    

    const {currentStep} = this.props;

    let pags = [];
    for(let i = 0; i<totalStep; i++ ){
      pags.push(i);
    }

    return <div className="main-pagination">
      {pags.map((i,k)=>{
        const cl = i < currentStep ? ' past' : (i === currentStep ? ' current' : '');
        return <span key={k} className={'main-pagination-item' + cl}></span>
      })}
    </div>
  }
};

/* REDUX ***************************/

// const {  
//   toggleSidebar
// } = actions;

function mapStateToProps(state) {
  const {currentStep} = state.UI;
  return {currentStep};
}
// const mapDispatchToProps = dispatch => {
// 	return {
//     toggleSidebar: (lang) => {
//       dispatch(toggleSidebar(lang))
//     }
// 	}
// }

const Pagination = connect(
  mapStateToProps,null
  //mapDispatchToProps
)(PaginationVisual);

export default Pagination;