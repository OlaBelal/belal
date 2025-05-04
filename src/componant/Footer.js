import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-light text-dark pt-5 pb-3 border-top'>
      <div className='container'>
        <div className='row g-4'>
          {/* Corporate Information */}
          <div className='col-md-3 col-6'>
            <h5 className="text-uppercase mb-4" style={{ letterSpacing: '1px', color: '#333' }}>AL RASLAN Fashion</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">About Us</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Careers</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sustainability" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Sustainability</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/press" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Press Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className='col-md-3 col-6'>
            <h5 className="text-uppercase mb-4" style={{ letterSpacing: '1px', color: '#333' }}>Customer Care</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Contact Us</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">FAQs</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Returns & Exchanges</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="text-muted hover-dark text-decoration-none d-flex align-items-center">
                  <span className="hover-underline">Shipping Info</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='col-md-3 col-6'>
            <h5 className="text-uppercase mb-4" style={{ letterSpacing: '1px', color: '#333' }}>Connect With Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FiPhone className="me-2 text-secondary" />
                <a href="tel:+201033455858" className="text-muted hover-dark text-decoration-none">
                  +20 10 3345 5858
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaWhatsapp className="me-2 text-secondary" />
                <a href="https://wa.me/201033455858" className="text-muted hover-dark text-decoration-none">
                  WhatsApp Chat
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FiMail className="me-2 text-secondary" />
                <a href="mailto:info@defacto.com" className="text-muted hover-dark text-decoration-none">
                  info@defacto.com
                </a>
              </li>
              <li className="mt-4">
                <div className="d-flex">
                  <a href="https://www.facebook.com/" className="text-secondary me-3 social-icon">
                    <FaFacebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/" className="text-secondary me-3 social-icon">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://twitter.com/" className="text-secondary me-3 social-icon">
                    <FaTwitter size={20} />
                  </a>
                  <a href="https://www.linkedin.com/" className="text-secondary social-icon">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='col-md-3 col-6'>
            <h5 className="text-uppercase mb-4" style={{ letterSpacing: '1px', color: '#333' }}>Newsletter</h5>
            <p className="text-muted small mb-3">
              Subscribe for exclusive offers and fashion updates
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control border" 
                placeholder="Your email" 
                aria-label="Email"
              />
              <button className="btn btn-dark" type="button">
                Subscribe
              </button>
            </div>
            <div className="mt-4">
              <img 
                src="https://via.placeholder.com/150x50?text=Payment+Methods" 
                alt="Payment methods" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className='row'>
          <div className='col-md-6 text-center text-md-start'>
            <p className="small text-muted mb-0">
              &copy; {new Date().getFullYear()} DeFacto Fashion. All rights reserved.
            </p>
          </div>
          <div className='col-md-6 text-center text-md-end'>
            <Link to="/privacy" className="text-muted small me-3 hover-dark text-decoration-none">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted small me-3 hover-dark text-decoration-none">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-muted small hover-dark text-decoration-none">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;