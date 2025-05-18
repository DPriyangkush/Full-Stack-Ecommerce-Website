import React from 'react';
import {useEffect, useRef, useState } from 'react';
import '../common/Header.scss';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import gsap from 'gsap';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileNavRef.current, {
        height: '100vh',
        duration: 0.4,
        ease: 'power2.out',
        display: 'flex',
      });

      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(mobileNavRef.current, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.3,
        ease: 'power2.in',
        
        onComplete: () => {
          gsap.set(mobileNavRef.current, { 
            display: 'none',
            ease: 'power3.in',
            delay: 1,
            
          });
        },
      });
    }
  }, [menuOpen]);


  const handleLinkHover = (e) => {
    const underline = e.currentTarget.querySelector('.underline');
    gsap.fromTo(
      underline,
      { width: 0 },
      { width: '100%', duration: 0.1, ease: 'power2.out' }
    );
  };

  return (
    <header className="header">
      <div className="logo">Sunita Sarees</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <nav className="nav">
        <a href="#"><span>Shop</span></a>
        <a href="#"><span>Mens</span></a>
        <a href="#"><span>Womens</span></a>
        <a href="#"><span>Our Story</span></a>
        <a href="#"><span>Blog</span></a>
        <a href="#"><span>Contact</span></a>
      </nav>

      {/* Mobile Nav */}
      <nav ref={mobileNavRef} className="mobile-nav">
        {['Shop', 'Mens', 'Womens', 'Our Story', 'Blog', 'Contact'].map((text, i) => (
          <a
            key={i}
            href="#"
            ref={(el) => (linksRef.current[i] = el)}
            onClick={() => setMenuOpen(false)}
          >
            {text}
          </a>
        ))}
      </nav>


      <div className="icons">
        <div className="search-icon">
          <FiSearch />
        </div>
        <div className="cart-icon">
          <FiShoppingCart />
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
