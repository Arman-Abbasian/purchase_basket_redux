import { useSelector,useDispatch } from "react-redux";
import { incrementNumber,decrementNumber } from "../redux/counter/counterActions";

const Counter = () => {
    const counter=useSelector((state)=>state.counter.counter);
    const wohle=useSelector(state=>state)
    const dispatch=useDispatch();
    console.log(counter);
    console.log(wohle)
    return ( 
        <div>
            <button onClick={()=>dispatch({type:"DECREMENT_NUMBER",payload:1})}>-</button>
            <p>{counter}</p>
            <button onClick={()=>dispatch(incrementNumber())}>+</button>
        </div>
     );
}
 
export default Counter;