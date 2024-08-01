import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <Link to="/cart" >Go to Cart Link</Link>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
