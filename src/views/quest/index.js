import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'rdx/ui/actions';

//import Menu from 'components/menu';
import Background from 'components/background';
//import Pagination from 'components/pagination';
import Questbox from './questbox';

class QuestVisual extends Component {
  constructor(props) {
   super(props);
    this.state = {
      status: 'none'
    }

    

  }
  //static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  //}
  componentDidMount(){
    this.props.reset();
    const initStep0 = () => {
      this.setState({status: 'in'});
    }
    setTimeout(initStep0.bind(this),400);
  }
  onClickAnswer = value => {
    this.setState({status: 'out'});
    this.props.nextStep();

    const initNextStep = () => {
      this.setState({status: 'in'});
    }
    setTimeout(initNextStep.bind(this),1200);
  }
  render() {
    const {status} = this.state;

    return <div className="main-quest main-menu-white">
      <Background/>
      {/* <Menu
        tl={<a href="/">Creative Types</a>}
        tr={<a href="/">Share</a>}
        bl={<Pagination/>}
      /> */}
      <Questbox
        status={status}
        onClick={this.onClickAnswer}
      />
    </div>
  }
};

/* REDUX ***************************/

const {  
  reset,
  nextStep
} = actions;

// function mapStateToProps(state) {
//   const {openedSidebar} = state.Item;
//   return {openedSidebar};
// }
const mapDispatchToProps = dispatch => {
	return {
    reset: () => {
      dispatch(reset())
    },
    nextStep: () => {
      dispatch(nextStep())
    },
	}
}

const Quest = connect(
  null,
  //mapStateToProps,
  mapDispatchToProps
)(QuestVisual);

export default Quest;