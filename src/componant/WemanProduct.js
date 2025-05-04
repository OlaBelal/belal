import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchProducts } from '../rtk/slices/Product-slice';
import Product from './product';

function WemanProduct() {
  const api_url = "https://fakestoreapi.com/products/category/women's clothing";
  const [product, setProduct] = useState([]);
  const [categories, setcategories] = useState([]);
  
  const getproduct=()=>{
    fetch(api_url)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }
  const getcategories=()=>{
    fetch(`${api_url}/categories`)
    .then((res) => res.json())
    .then((data) => setcategories(data));
  }
  useEffect(() => {
    getproduct()
  }, []);

  return (
    <div className="container">
      <Row>
        {product.map((product) => (
          <Col xs={12} sm={6} md={3} className="my-3" key={product.id}>
            <Card className="p-3">
              <Product product={product}buttonshow={true} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default WemanProduct;