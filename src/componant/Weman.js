import React from 'react';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import WemanProduct from './WemanProduct';
import { Button, Form } from 'react-bootstrap';

function Weman() {
  return (
    <>
      {/* Full-width Banner Image */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/assets/images/we8.jpg"
          alt="Fashion Banner"
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
          <h1 className="fw-bold text-dark">Elegant Styles for Every Woman</h1>
          <p className="text-muted fs-5">Shop the latest arrivals now</p>
          
        </div>
      </div>

      {/* Header Text */}
      <div className="text-center my-5">
        <h2 className="fw-bold">Women's Fashion</h2>
        <hr style={{ width: '100px', margin: 'auto', borderTop: '3px solid #000' }} />
        <p className="text-muted fs-5 mt-3">Explore the latest trends in women's clothing, accessories, and more!</p>
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
                <Form.Check type="checkbox" label="Dresses" />
                <Form.Check type="checkbox" label="Tops" />
                <Form.Check type="checkbox" label="Pants" />
                <Form.Check type="checkbox" label="Accessories" />
              </Form.Group>

              {/* Size Filter */}
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Form.Select>
              </Form.Group>

             
              <Button variant="dark" className="mt-3 w-100">Apply Filters</Button>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-9">
            <div className="row justify-content-center">
              <WemanProduct />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Weman;
