import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

function AppNavbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="sticky-top">
      <div className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <p className="fs-6 mb-0">
                DOWNLOAD APP - 10% OFF YOUR FIRST ORDER | CODE: HEY10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/Home" className="text-white">
                  DeFacto
                </Link>
              </h2>
            </div>
            <div className="col-3">
              <p className="text-white fs-6 mb-0">
                <Link to="/Weman" className="text-white">
                  WOMAN
                </Link>{" "}
                /{" "}
                <Link to="/Men" className="text-white">
                  MEN
                </Link>{" "}
                /{" "}
                <Link to="/Kids" className="text-white">
                  KIDS and BABIES
                </Link>{" "}
              </p>
            </div>
            <div className="col-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-2 fs-6"
                  placeholder="Search: Jean Pants, Basic Body, Modern Fit Shirt"
                  aria-label="Search: Jean Pants, Basic Body, Modern Fit Shirt"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    className="d-flex align-items-center text-white fs-6"
                    to="/Acount"
                  >
                    <img src="/assets/images/user.svg" alt="img" />
                    <p className="mb-0">
                      Uesers <br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center text-white fs-6"
                    to="/About"
                  >
                    <img src="/assets/images/wishlist.svg" alt="img" />
                    <p className="mb-0">
                    About <br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white" to="/Cart">
                    <img src="/assets/images/cart.svg" alt="img" />
                    <div className="d-flex align-items-center flex-column">
                      <span className="badge bg-white text-dark fs-6">
                        {cartItems.length}
                      </span>
                      <p className="mb-0 fs-6">Shopping Cart</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;