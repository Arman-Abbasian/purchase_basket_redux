import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "./counterTypes"

export const incrementNumber=(number=1)=>{
    return{
        type:INCREMENT_NUMBER,
        payload:number
    }
};
export const decrementNumber=(number=1)=>{
    return{
        type:DECREMENT_NUMBER,
        payload:number
    }
}