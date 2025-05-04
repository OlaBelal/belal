import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearch, BsPhone } from 'react-icons/bs';
import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

function AppNavbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="sticky-top bg-dark">
      {/* Top Strip */}
      

    {/* Main Navigation */}
<div className="header-upper py-3">
  <div className="container">
    <div className="row align-items-center">

      {/* Logo */}
      <div className="col-auto">
        <h1 className="mb-0">
          <Link to="/" className="text-white text-decoration-none">
            <span className="fw-bold">AL RASLAN </span>
          </Link>
        </h1>
      </div>

      {/* Categories with larger space from logo */}
      <div className="col-auto ms-auto d-none d-lg-block">
        <div className="d-flex gap-4">
          <Link to="/Weman" className="text-white text-decoration-none text-uppercase fs-6">
            Women
          </Link>
          <Link to="/men" className="text-white text-decoration-none text-uppercase fs-6">
            Men
          </Link>
          <Link to="/Accessories" className="text-white text-decoration-none text-uppercase fs-6">
          jewelry
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="col-lg-3 col-md-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2 px-3 fs-6 border-0"
            placeholder="Search for products, brands..."
            aria-label="Search"
          />
          <button className="btn btn-light px-3" type="button">
            <BsSearch className="fs-5" />
          </button>
        </div>
      </div>

      {/* User Links */}
      <div className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center justify-content-end gap-4">
          

          <Link to="/wishlist" className="text-white text-decoration-none">
            <div className="d-flex flex-column align-items-center position-relative">
              <FiHeart className="fs-5" />
              <span className="fs-6 mt-1">Wishlist</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </div>
          </Link>

          <Link to="/cart" className="text-white text-decoration-none">
            <div className="d-flex flex-column align-items-center position-relative">
              <FiShoppingCart className="fs-5" />
              <span className="fs-6 mt-1">Cart</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartItems.length}
              </span>
            </div>
          </Link>
          <Link to="/Signup" className="text-white text-decoration-none">
            <div className="d-flex flex-column align-items-center">
              <FiUser className="fs-5" />
              <span className="fs-6 mt-1">SignUp</span>
            </div>
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>


     
    </div>
  );
}

export default AppNavbar;
