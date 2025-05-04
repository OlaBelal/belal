import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../rtk/slices/Cart-slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Product(props) {
  const dispatch = useDispatch();
  const { product, buttonshow, inCart } = props;
  const sizes = ['XS','S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="product-card">
      <Card className="h-100">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <p>Price: {product.price}</p>
          {buttonshow && (
            <>
              <Form.Group controlId="productSize">
                <Form.Label>Size:</Form.Label>
                <Form.Control as="select" style={{ width: '60px' }}>
                  {sizes.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <br />
              <div className="d-flex justify-content ">
                <Link className="btn btn-primary" to={`/product/${product.id}`}>
                  Details
                </Link>
                {inCart ? (
                  <Button variant="danger" onClick={handleRemoveFromCart}>
                    Remove from Cart
                  </Button>
                ) : (
                  <Button variant="success" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                )}
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;