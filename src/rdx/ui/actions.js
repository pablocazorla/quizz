export const actName = {
  RESET_STEP: 'RESET_STEP',
  NEXT_STEP: 'NEXT_STEP',
  GOTO_VIEW: 'GOTO_VIEW'
}

export default {
  reset: () => {
		return (dispatch) => {
			dispatch({
        type: actName.RESET_STEP
      });
		}
  },
  nextStep: () => {
		return (dispatch) => {
			dispatch({
        type: actName.NEXT_STEP
      });
		}
  },
  gotoView: (viewNum) => {
		return (dispatch) => {
			dispatch({
        type: actName.GOTO_VIEW,
        viewNum
      });
		}
  }
};
