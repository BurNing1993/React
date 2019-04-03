// action
const INCREASE = "increase";
const DECREASE = "decrease";

// actionCreator
export const increase = () =>({
  type: INCREASE
}) 
export const decrease = () => ({
  type: DECREASE
});

export const increaseAsync =()=>{
  return dispatch=>{
    setTimeout(()=>{
      dispatch(increase())
    },1000)
  }
}

// state
const defaultState = {
  num: 10
};

// reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        num: state.num + 1
      };
    case DECREASE:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
};
