import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../rtk/slices/Cart-slice';
import Product from './product';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-4">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="card">
                <Product product={item} buttonshow={false} />
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove from Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div className="total-price-bar text-light ">
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <br /> <br /> <br />
          <h1>No products in your basket.</h1>
          <br /> <br /> <br />
          <h5>You can start shopping right away by checking the suggestions,</h5>
          <h5>or you can discover DeFacto with the category links.</h5>
        </div>
      )}
    </div>
  );
}

export default Cart;