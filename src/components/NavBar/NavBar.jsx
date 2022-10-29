import styles from './navBar.module.css';
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/products/productActions';

const NavBar = () => {
    const products=useSelector(state=>state.products);
    const {loading,data,error}=products;
    const dispatch=useDispatch();
    console.log(products)
    
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    return ( 
        <>
        {
            
            loading ?<p>loading</p>
            :
            <div className={styles.container}>
            <h2 className={styles.title}>My shopping cart</h2>

                <div className={styles.productNumber}>
                    <div><HiShoppingCart /></div>
                    <div className={styles.number}>{data.length}</div>
                </div>
        </div>
        
            
        }
        </>
     );
}
 
export default NavBar;