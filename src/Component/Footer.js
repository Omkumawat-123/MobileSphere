import { Link } from 'phosphor-react';
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };


  return (
    <footer style={footerStyle}>
      <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">

      </div>
      
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Contact Us</h4>
          <ul class="list-unstyled">
            <li>Contact :<a href="tel:+91 123456789">+91 7768928706</a></li>
            
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <h4>Follow Us</h4>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{' '}
          |{' '}
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{' '}
          |{' '}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
                 
    </div>
    </div>
  <div class="row">
    <div class="col-md-12 copy">
      <p class="text-center">&copy; Copyright 2024 - Om kumawat .  All rights reserved.</p>
    </div>
  </div>


  </div>
  </div>
    </footer>
  );
};

export default Footer;
