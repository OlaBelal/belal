import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import WemanProduct from './WemanProduct';

function Weman() {
  return (
    <>
      <div>
        <Col className='d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded' style={{ width: '90%', margin: 'auto' }}>
          <Image src="/assets/images/we2.webp" alt="Image 1" fluid style={{ height: '500px', width: '100%' }} />
        </Col>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <WemanProduct />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Weman;