import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
};
function fetchUsersSuccess(data){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:data
    }
};
function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
};

export const fetchUsers = () => {
    //? recieves the dispach method as arguments
    return (dispatch) => {
      dispatch(fetchUsersRequest());
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // const users = response.data.map((user) => user.name);
          dispatch(fetchUsersSuccess(response.data));
          // dispatch({type:FETCH_USERS_SUCCESS,payload:response.data});
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };
  