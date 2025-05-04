import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../rtk/slices/Cart-slice';
import Product from './product';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="mt-5">
      {cartItems.length > 0 ? (
        <div>
          <Row>
            {cartItems.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4} className="my-3">
                <Card className="shadow-sm rounded-lg">
                  <Product product={item} buttonshow={false} />
                  <Card.Footer className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove from Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="total-price-bar text-center my-4">
            <h4>Total Price:</h4>
            <h5 className="fw-bold text-primary">${totalPrice.toFixed(2)}</h5>
            <Button variant="success" className="mt-3 px-5">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mb-4">Your Cart is Empty</h1>
          <h5>Start adding products to your cart from the shop!</h5>
          <Button variant="primary" className="mt-3" href="/Weman">
            Continue Shopping
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Cart;
