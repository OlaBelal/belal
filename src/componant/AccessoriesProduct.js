import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Product from './product';

function AccessoriesProduct() {
  const api_url = "https://fakestoreapi.com/products/category/jewelery";
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
          <Col xs={12} sm={6} md={4} lg={3} className="my-3" key={product.id}>
            <Card className="p-3 h-100">
              <Product product={product} buttonshow={true} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AccessoriesProduct;
