
import React from 'react'
import Myslider from './Slider';
import Footer from './Footer';
import Prod from './Catig';
function Home() {
    return (
      <div>
        <Myslider/>
        <div className="container w-70% h-150px border rounded">
        <h3>Summer Accessories & Footwear 😎</h3>
        <p>Shop Now</p>
      </div>
      <div className="container">
        <div className="row row-cols-4 justify-content-center">
          <Prod />
        </div>
      </div>
        <Footer/>
      </div>
    );
  }
  export default Home;