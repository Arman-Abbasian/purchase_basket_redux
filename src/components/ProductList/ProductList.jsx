import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product";
import {fetchProducts,decrementProducts,incrementProducts,removeProducts} from '../../redux/products/productActions';

const ProductList = () => {

    const products=useSelector(state=>state.products);
    const {loading,data,error}=products;
    const dispatch=useDispatch();
    console.log(data);

    useEffect(()=>{
        fetchProducts();
    });


    return ( 
        <>
        {
            loading ?
            <p>loading</p>
            :
            error ?
                <p>{error.message}</p>
            :
            <div>
            {data.map(product=>{
               return <Product key={product.id} productName={product.productName} 
                carName={product.carName} productNumber={product.productNumber}
                 productPrice={product.productPrice} productImage={product.productImage} 
                  onMinus={()=>dispatch(decrementProducts(product.id))} 
                  onAdd={()=>dispatch(incrementProducts(product.id))} 
                  onRemove={()=>dispatch(removeProducts(product.id))}
                />
            })}
        </div>
        }
        </>
     );
}
 
export default ProductList;