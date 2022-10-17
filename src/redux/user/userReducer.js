import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

 const initialState={
    loading:false,
    data:[],
    error:''
 }

export const userReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case FETCH_USERS_REQUEST:{
            return {...state,loading:true}
        };
        case FETCH_USERS_SUCCESS:{
            return {...state,loading:false,data:actions.payload}
        }
        case FETCH_USERS_FAILURE:{
            return {...state,loading:false,data:actions.payload}
        }   
        default:{
            return state;
        }
           
    }
 }