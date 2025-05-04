import React from 'react';
import Myslider from './Slider';
import Footer from './Footer';
import Prod from './Catigories';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      {/* Slider (Hero Section) */}
      <Myslider />

      {/* Welcome Banner */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold display-5 mb-3">Welcome to FASHIONSTORE </h2>
        <p className="text-muted fs-5">
          Discover your style with the latest collections and best deals.
        </p>
      </section>

      {/* Summer Accessories Section */}
      <section className="container my-5">
  <div className="row align-items-center bg-light shadow rounded p-4">
    <div className="col-md-6 mb-3 mb-md-0">
      <img
        src="https://www.swashaa.com/cdn/shop/collections/woMen_s_Bracelet_Banner__-min.jpg?v=1739770474&width=1600" 
        alt="Summer Accessories"
        className="img-fluid rounded"
      />
    </div>
    <div className="col-md-6 text-center text-md-start">
      <h3 className="fw-bold mb-2">Summer Accessories & Footwear☀️ </h3>
      <p className="text-muted mb-3">Complete your summer look with stylish accessories and comfy footwear!</p>
      <Link to="/Accessories" className="btn btn-primary px-4 py-2">
        Shop Now
      </Link>
    </div>
  </div>
</section>

      {/* Category Products */}
      <section className="container my-5">
        <h4 className="text-center fw-bold mb-4">Shop by Category</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <Prod />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
