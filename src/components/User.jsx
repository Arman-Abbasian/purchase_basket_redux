import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';
const User = () => {
    const userData=useSelector(state=>state.user);
    const {data,error,loading}=userData;
    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    
    return ( 
        <div>
            {
            loading ? <p>loading...</p>
        :
        error ?
        <p>{error}</p>
        :
        userData && data
        
        }
        </div>
     );
}
 
export default User;