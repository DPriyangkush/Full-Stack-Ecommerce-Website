import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>SHOP</h4>
          <ul>
            <li>Timeless Classics</li>           
            <li>Regal Silks</li>                 
            <li>Breezy Cottons</li>              
            <li>Sharodiya Exclusive</li>               
            <li>Shaadi Edit</li>                 
            <li>Festive Aangan</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>NAVIGATION</h4>
          <ul>
            <li>Home</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Refund & Returns</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>SOCIAL</h4>
          <ul>
            <li>X (Twitter)</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div className="footer__column newsletter">
          <h4>SUBSCRIBE TO NEWSLETTER</h4>
          <div className="newsletter__form">
            <input type="email" placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>Copyright 2025, Priyangkush Debnath</span>
        <span>Made with Love</span>
      </div>

      <div className="footer__brand">
        <h1>SHARODIYA</h1>
        <h1>SAREES</h1>
      </div>

      
    </footer>
  );
};

export default Footer;
