import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, handleRemove, incrementQuantity } from '../../features/Slice';
import "./display.css";

const Display = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  const totalQuantity = products.reduce((total, product) => total + product.quantity || 1, 0);
  const totalAmount = products.reduce((total, product) => total + product.price * product.quantity || 1, 0);

  return (
     <div className="container-fluid  py-4 ">
          <h1 className="text-center mb-4 one">Your Cart Awaits: Let's Shop! <i class="fa-solid fa-cart-shopping"></i></h1>
            <h3 className="text-center mb-4 one">Enjoy Free Shipping <i class="fa-regular fa-face-laugh-wink"></i></h3>
          <h4 className="card-text text-center mb-4">Total Quantity: {totalQuantity}</h4>
          <h4 className="card-text text-center mb-4">Total Amount: ${totalAmount}</h4>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                {products.map(product => (
                  <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center bg-white mb-3">
                    <div className='one'>
                      <h2>{product.title}</h2>
                      <h5>Price: ${product.price}</h5>
                      <h5>Discount: {product.discountPercentage}%</h5>
                      <h5>Rating: {product.rating}</h5>
                      <h5>Brand: {product.brand}</h5>
                      <h5>Stock: {product.stock}</h5>
                      <div className="d-flex justify-content-center">
  <div className="btn-group" role="group">
    <button className="btn btn-primary m-2" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
    <h4 className='p-2'>{product.quantity}</h4>
    <button className="btn btn-primary m-2 " onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
    <button className="btn btn-danger m-2" onClick={() => dispatch(handleRemove(product.id))}>Remove</button>
  </div>
</div>

                    </div>
                    <div className="d-flex align-items-center">
                      <img src={product.thumbnail} alt={product.title} className="img-fluid" style={{ maxWidth: "200px" ,height:"200px"}} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  );
};

export default Display;
