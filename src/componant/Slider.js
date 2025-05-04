import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Myslider() {
  return (
    <div className="carousel-wrapper">
      <Carousel interval={3000} pause={false}>
        <Carousel.Item>
          <img src="/assets/images/weman2.webp" className="carousel-image" alt="..." />
          <Carousel.Caption>
            <h5>Wemans Wear</h5>
            <p>SHOP NOW</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/images/man2.webp" className="carousel-image" alt="..." />
          <Carousel.Caption>
            <h5>Mens Wear</h5>
            <p>SHOP NOW.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/images/kid.webp" className="carousel-image" alt="..." />
          <Carousel.Caption>
           <h5> KIDS and BABY</h5>
           <p>SHOP NOW.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Myslider;