import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import AccessoriesProduct from './AccessoriesProduct';
import { Button, Form } from 'react-bootstrap';

function Accessories() {
  const api_url = "https://fakestoreapi.com/products/category/jewelery";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Banner */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="https://i.shgcdn.com/b559c107-8082-42b9-9171-11fa3659b710/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Accessories Banner"
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
          <h1 className="fw-bold text-dark">Elegant Accessories</h1>
          <p className="text-muted fs-5">Add a touch of style to your look</p>
        </div>
      </div>

      {/* Header */}
      <div className="text-center my-5">
        <h2 className="fw-bold">Accessories Collection</h2>
        <hr style={{ width: '100px', margin: 'auto', borderTop: '3px solid #000' }} />
        <p className="text-muted fs-5 mt-3">Explore rings, necklaces, and more fashion jewelry!</p>
      </div>

      {/* Layout */}
      <div className="container mb-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 mb-4">
            <div className="p-3 shadow-sm rounded border bg-white">
              <h5 className="fw-bold mb-3">Filter By</h5>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Check type="checkbox" label="Necklaces" />
                <Form.Check type="checkbox" label="Rings" />
                <Form.Check type="checkbox" label="Bracelets" />
                <Form.Check type="checkbox" label="Earrings" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price Range</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>Under $50</option>
                  <option>$50 - $100</option>
                  <option>Over $100</option>
                </Form.Select>
              </Form.Group>

              <Button variant="dark" className="mt-3 w-100">Apply Filters</Button>
            </div>
          </div>

          {/* Product List */}
          <div className="col-md-9">
            <div className="row justify-content-center">
              <AccessoriesProduct />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Accessories;
