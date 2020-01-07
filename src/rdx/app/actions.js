export const actName = {
  SET_LANG: 'SET_LANG_APP'
}

export default {
  setLanguage: (lang) => {
		return (dispatch) => {
			dispatch({
        type: actName.SET_LANG,
        lang
      });
		}
  }
};
