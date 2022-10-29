import axios from "axios";
import { DECREMENT_PRODUCTS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, INCREMENT_PRODUCTS, REMOVE_PRODUCTS } from "./productsTypes";

 const initialState={
    loading:false,
    data:[],
    error:''
 }

export const productsReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case FETCH_USERS_REQUEST:{
            return {...state,loading:true}
        };
        case FETCH_USERS_SUCCESS:{
            return {...state,loading:false,data:actions.payload}
        };
        case FETCH_USERS_FAILURE:{
            return {...state,loading:false,data:actions.payload}
        }; 
        case INCREMENT_PRODUCTS:{
            const index=state.data.findIndex(item=>item.id===actions.payload);
            const cloneObject={...state.data[index]};
            cloneObject.productNumber++;
            axios.put(`http://localhost:4000/products/${actions.payload}`,cloneObject)
            .then(res=>{
                axios.get(`http://localhost:4000/products`)
                .then(res=> {
                    return {...state,loading:false,data:res.data}
                })
            })
            .catch(err=>console.log(err.message))
            return state;
        }; 
        case DECREMENT_PRODUCTS:{
            const index=state.data.findIndex(item=>item.id===actions.payload);
            const cloneObject={...state.data[index]};
            if (cloneObject.productNumber===1) {
                axios.delete(`http://localhost:4000/products/${actions.payload}`)
                .then(res=>{
                    axios.get(`http://localhost:4000/products`)
                    .then(res=> {
                        return {...state,data:res.data}
                    })
                })
                .catch(err=>console.log(err.message))
                return state;
            }else{
                cloneObject.productNumber--;
            axios.put(`http://localhost:4000/products/${actions.payload}`,cloneObject)
            .then(res=>{
                axios.get(`http://localhost:4000/products`)
                .then(res=> {
                    return {...state,data:res.data}
                })
            })
            .catch(err=>console.log(err.message))
            return state;
            }
        } ;
        case REMOVE_PRODUCTS:{
            const index=state.data.findIndex(item=>item.id===actions.payload);
            const cloneObject={...state.data[index]};
            axios.delete(`http://localhost:4000/products/${actions.payload}`)
                .then(res=>{
                    axios.get(`http://localhost:4000/products`)
                    .then(res=> {
                        return {...state,data:res.data}
                    })
                })
                .catch(err=>console.log(err.message))
                return state;

        };
        default:{
            return state;
        }
           
    }
 }