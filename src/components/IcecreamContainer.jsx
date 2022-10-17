import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

const IcecreamContainer = () => {
    const numOfIcecream=useSelector((state)=>state.icecream.numOfIcecream);
    const dispatch=useDispatch();
    console.log(dispatch)
    const [number,setNumber]=useState(1)
    return ( 
        <div>
            <h2>number of icecream in store :{numOfIcecream}</h2>
            <button onClick={()=>dispatch(buyIcecream(number))}>buy {number}  icecream </button>
            <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
        </div>
     );
}
 
export default IcecreamContainer;