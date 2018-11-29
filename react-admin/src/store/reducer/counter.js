import { INCREMENT, DECREMENT, RESET } from "../action/counter";
import { fromJS } from "immutable";

/*
 * 初始化state
 **/
const initState = fromJS({
  count: 0
});

export default (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      const count1 = state.toJS().count + 1;
      return state.merge({
        count: count1
      });
    case DECREMENT:
      let count2 = state.toJS().count - 1;
      if(count2<0){
        count2=0
      }
      return state.merge({
        count: count2
      });
    case RESET:
      return state.merge({
        count: 0
      });
    default:
      return state;
  }
};
