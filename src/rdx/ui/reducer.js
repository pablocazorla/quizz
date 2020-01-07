import { combineReducers } from 'redux';
import { actName } from './actions';
import data from 'data';

let reducers = {};

reducers.currentStep = (state = 0, action) => {
  switch (action.type) {
    case actName.NEXT_STEP:
      const nextStep = state + 1;
      if(nextStep <= (data.length - 1)){
        return nextStep;
      }
      return state;
    case actName.RESET_STEP:
      return 0;
    default:
      return state;
  }
};

reducers.currentView = (state = 0, action) => {
  switch (action.type) {
    case actName.GOTO_VIEW:      
      return action.viewNum;
    default:
      return state;
  }
};


const reducersCombined = combineReducers(reducers);

export default reducersCombined;