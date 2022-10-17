import { BUY_ICECREAM } from "./icecreamTypes";

const initialState={
    numOfIcecream:100
};
const icecreamReducer=(state=initialState,actions)=>{

    switch (actions.type) {
        case BUY_ICECREAM:{
            return {...state,numOfIcecream:state.numOfIcecream-actions.payload}
        };
    
        default:{
            return state;
        };
    }

};
export default icecreamReducer;