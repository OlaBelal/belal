import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import MenProduct from './MenProduct';

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
      <div>
        <Col className='d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded' style={{ width: '90%', margin: 'auto' }}>
          <Image src="/assets/images/menn1.webp" alt="Image 1" fluid style={{ height: '500px', width: '100%' }} />
        </Col>
      </div>
      <MenProduct products={products} />
      <Footer />
    </>
  );
}

export default Men;