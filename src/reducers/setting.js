const initialState = {
  analyticsMode: 'GA'
};

const setting = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANALYTICS_MODE':
      return Object.assign({}, state, {
        analyticsMode: action.analyticsMode
      });
    default:
      return state;
  }
};

export default setting;
