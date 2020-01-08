import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions from '../../redux/item/actions';
import TextType from 'components/textType';
import data from 'data';

class QuestBoxVisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'none',
      enabled: false,
      textQuestion:'',
      answersArray:[]
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.status === 'in' && prevState.status !== 'in'){
  //     this.setIn();
  //     return { status: 'in'};
  //  }
  //  else return null;
  // }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.status === 'in' && prevProps.status !== 'in'){
      //Perform some operation here
      
      setTimeout(this.setIn,500);
      //this.setIn();
    }
    if(this.props.status === 'out' && prevProps.status !== 'out'){
      //Perform some operation here
      this.setState({ status: 'out',enabled:false});
    }
  }
  setIn = () => {
    this.setState({ status: 'in'});
    const step = data[this.props.currentStep];
    this.setState({ textQuestion: step.question, answersArray: step.answers });
    const setEnabled = () => {
      this.setState({enabled:true});
    }
    setTimeout(setEnabled.bind(this),1400);
  }
  //componentDidMount(){
  //}
  render() {

    const {status,enabled,textQuestion,answersArray} = this.state;

    const onClick = this.props.onClick || function(){};

    const answerWidth = 100 / answersArray.length;


    return <div className={"main-questbox " + status + (enabled ? ' enabled' : '')}>
      <div className="main-questbox-center">
        <div className="main-questbox-wrap">
          <div className="main-questbox-question">
            <TextType
              text={status === 'in' ? textQuestion : ''}
              duration={700}
            />
          </div>
          <div className="main-questbox-answers">
            {answersArray.map((a,k) => {
              
              return <div
                className="main-questbox-ans"
                key={k} style={{'width':answerWidth + '%'}}
                onClick={() => onClick(a.value)}
              >
                <TextType
                  text={status === 'in' ? a.text : ''}
                  delay={700 + (k * 400)}
                />
              </div>
            })}
          </div>

          <div className="line-h-t"></div>
          <div className="line-h-m"></div>
          <div className="line-h-b"></div>

          <div className="line-v-l"></div>
          <div className="line-v-r"></div>

          {answersArray.map((a,k) => {
            if(k === 0){
              return null;
            }
            return <div className="line-v-c" key={k} style={{'left': (answerWidth * k) + '%'}}></div>;
          })}
        </div>
      </div>
    </div>
  }
};

/* REDUX ***************************/
/*
const {  
  toggleSidebar
} = actions;


const mapDispatchToProps = dispatch => {
	return {
    toggleSidebar: (lang) => {
      dispatch(toggleSidebar(lang))
    }
	}
}
*/

function mapStateToProps(state) {
  const {currentStep} = state.UI;
  return {currentStep};
}

const QuestBox = connect(
  mapStateToProps,null
  //mapDispatchToProps
)(QuestBoxVisual);

export default QuestBox;