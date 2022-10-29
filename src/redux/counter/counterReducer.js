import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "./counterTypes";

const initialState={
    counter:10
};

const counterReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case INCREMENT_NUMBER:{
            return {...state,counter:state.counter+actions.payload}
        };
        case DECREMENT_NUMBER:{
            if (state.counter===0) {
                return state;
            }else{
                return {...state,counter:state.counter-actions.payload}
            }
        };
            
        default:{
            return state;
        };
    }
};
export default counterReducer;