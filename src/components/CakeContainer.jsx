import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = () => {
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes);
    const dispatch=useDispatch();
    const [number,setNumber]=useState(1)
    return ( 
        <div>
            <h2>number of cakes in store :{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake(number))}>buy {number}  cakes </button>
            <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
        </div>
     );
}
 
export default CakeContainer;