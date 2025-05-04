import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import MenProduct from './MenProduct';
import { Button, Form } from 'react-bootstrap';

function Men() {
  const api_url = "https://fakestoreapi.com/products/category/men's clothing";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Full-width Banner Image */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/assets/images/men22.jpg"
          alt="Men's Fashion Banner"
          fluid
          style={{ width: '100%', height: '480px', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '20px 40px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h1 className="fw-bold text-dark">Bold Styles for Every Man</h1>
          <p className="text-muted fs-5">Discover your perfect outfit</p>
        </div>
      </div>

      {/* Header Text */}
      <div className="text-center my-5">
        <h2 className="fw-bold">Men's Fashion</h2>
        <hr style={{ width: '100px', margin: 'auto', borderTop: '3px solid #000' }} />
        <p className="text-muted fs-5 mt-3">Shop the latest trends in men’s clothing and accessories!</p>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mb-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 mb-4">
            <div className="p-3 shadow-sm rounded border bg-white">
              <h5 className="fw-bold mb-3">Filter By</h5>

              {/* Category Filter */}
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Check type="checkbox" label="Shirts" />
                <Form.Check type="checkbox" label="T-Shirts" />
                <Form.Check type="checkbox" label="Jeans" />
                <Form.Check type="checkbox" label="Accessories" />
              </Form.Group>

              {/* Size Filter */}
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </Form.Select>
              </Form.Group>

              <Button variant="dark" className="mt-3 w-100">Apply Filters</Button>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-9">
            <div className="row justify-content-center">
              <MenProduct products={products} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Men;
