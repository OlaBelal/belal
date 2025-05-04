import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='py-2 bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <h5 className="text-white mb-3">Corporate Information</h5>
            <div className="footer-link">
              <Link className="text-white py-1 mb-1" to="">DeFacto</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">About Us</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">Human Resources</Link>
            </div>
          </div>
          <div className='col-3'>
            <h5 className="text-white mb-3">Contact us</h5>
            <div>
              <address className="text-white fs-6">
                Contact Form
              </address>
              <a href="434" className="text-white d-block mb-2">Customer Services</a>
              <a href="434" className="text-white d-block mb-2">WhatsApp +2010 334 558 58</a>
              <div className="social-link">
                <a className="text-white me-2" href="https://www.facebook.com/"><FaFacebook /></a>
                <a className="text-white me-2" href="https://twitter.com/?lang=en"><FaTwitter /></a>
                <a className="text-white me-2" href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
                <a className="text-white me-2" href="https://www.instagram.com/"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h5 className="text-white mb-3">Help</h5>
            <div className="footer-link">
              <Link className="text-white py-1 mb-1" to="/About">About us</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">FAQs</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">Returns and Changes</Link>
            </div>
          </div>
          <div className='col-3'>
            <h5 className="text-white mb-3">Quick Links</h5>
            <div className="footer-link">
              <Link className="text-white py-1 mb-1" to="">Laptop</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">Headphone</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">Tablet</Link>
              <br />
              <Link className="text-white py-1 mb-1" to="">Watch</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center text-white mb-0 font-italic'>
              &copy; DeFacto Online Clothing Store
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;