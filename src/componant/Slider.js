import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // استيراد Link
import './Myslider.css';

function Myslider() {
  return (
    <div className="fashion-carousel">
      <Carousel interval={3000} pause={false} fade>
        <Carousel.Item>
          <img 
            src="https://www.rivafashion.com/media/wysiwyg/2-Summer-NEW_IN-Fullsize.jpg" 
            className="d-block w-100 carousel-image"
            alt="Women's Fashion Collection"
          />
          <Carousel.Caption className="caption-overlay">
            
            <Link to="/Weman" className="btn btn-light btn-lg shop-now-btn">
              SHOP NOW
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            src="https://teeshoppen.com/cdn/shop/articles/mens-clothing-in-bari-833068.jpg?v=1723269291" 
            className="d-block w-100 carousel-image"
            alt="Men's Fashion Collection"
          />
          <Carousel.Caption className="caption-overlay">
            <h3 className="display-4">MEN'S PREMIUM STYLE</h3>
            <p className="lead">Elevate your wardrobe with luxury</p>
            <Link to="/men" className="btn btn-light btn-lg shop-now-btn">
              EXPLORE COLLECTION
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            src="https://cdn.prod.website-files.com/660d2f5487880c4b5e088ca2/660d2f5487880c4b5e089bd2_nYM6FbomEKwXEhHcrwgzIULTtC6eHuxg8YwlHSmuBTP-I5vGE909uY9-g9ZJHE80f0heZvrctwvCrtO_7jYpiQCM8oQF5oNqyhcjqYGlDr5RXSbbCnQ0t9Zik6QCaWr5C_tQeUmrufjLusH0ilBh0Yg.jpeg" 
            className="d-block w-100 carousel-image"
            alt="jewelry"
          />
          <Carousel.Caption className="caption-overlay">
            <h3 className="display-4">jewelry</h3>
            <p className="lead">Must-have Jewelries for Ladies</p>
            <Link to="/Accessories" className="btn btn-light btn-lg shop-now-btn">
              VIEW COLLECTION
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Myslider;
