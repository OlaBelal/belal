import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './product';

function MenProduct({ products }) {
  return (
    <div className="container">
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={3} className="my-3" key={product.id}>
            <Card className="p-3">
              <Product product={product} buttonshow={true} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MenProduct;