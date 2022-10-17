import { BUY_CAKE } from "./cakeTypes";

const initialState={
    numOfCakes:56
};

const cakeReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case BUY_CAKE:{
            return {...state,numOfCake:state.numOfCakes-actions.payload}
        };
            
        default:{
            return state;
        };
    }
};
export default cakeReducer;