import { BUY_ICECREAM } from "./icecreamTypes";

export function buyIcecream(number=1){
    return {
        type:BUY_ICECREAM,
        payload:number
    }
}