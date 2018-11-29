import { fromJS } from "immutable";
import { GET_USER_INFO } from "../action/user";

const initState = fromJS({
  userInfo: {
    name: "Joey"
  }
});

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return state.merge({
        userInfo: action.data
      });
    default:
      return state;
  }
};
