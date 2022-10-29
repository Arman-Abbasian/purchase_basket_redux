import { DECREMENT_PRODUCTS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, INCREMENT_PRODUCTS, REMOVE_PRODUCTS } from "./productsTypes"
import axios from 'axios';


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

export function incrementProducts(id){
  return{
    type:INCREMENT_PRODUCTS,
    payload:id
  }
};

export function decrementProducts(id){
  return{
    type:DECREMENT_PRODUCTS,
    payload:id
  }
};
export function removeProducts(id){
  return{
    type:REMOVE_PRODUCTS,
    payload:id
  }
};

export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest());
      axios.get("http://localhost:4000/products")
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

  