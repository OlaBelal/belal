import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function KidsProduct() {
  const api_url = "http://localhost:9003/Kids";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={3} className="my-3" key={product.id}>
            <Card className="p-3">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" className="me-2">Details</Button>
                <Button variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default KidsProduct;