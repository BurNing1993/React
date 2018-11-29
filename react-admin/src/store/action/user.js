import request from "../../util/request";
export const GET_USER_INFO = "userInfo/GET_USER_INFO";

function setUserInfo(data) {
  return {
    type: GET_USER_INFO,
    data
  };
}

export function getUserInfo() {
  return dispatch => {
    request
      .get("http://localhost:3000/api/user.json")
      .then(res => {
        const data = res.data;
        dispatch(setUserInfo(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
