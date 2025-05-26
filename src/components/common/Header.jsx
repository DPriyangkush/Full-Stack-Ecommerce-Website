import React from 'react';
import {useEffect, useRef, useState } from 'react';
import '../common/Header.scss';
import { FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';
import gsap from 'gsap';
import CartItems from '../cart/CartItems';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const linksRef = useRef([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const emptyCartNavRef = useRef(null);
  const emptyCartLinksRef = useRef([]);

  const isCartEmpty = true;

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  useEffect(() => {
  document.body.style.overflow = searchOpen ? 'hidden' : 'auto';
}, [searchOpen]);


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


  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(emptyCartNavRef.current, {
        height: '100vh',
        duration: 0.4,
        ease: 'power2.out',
        display: 'flex',
      });

      gsap.fromTo(
        emptyCartLinksRef.current,
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
      gsap.to(emptyCartNavRef.current, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.3,
        ease: 'power2.in',
        
        onComplete: () => {
          gsap.set(emptyCartNavRef.current, { 
            display: 'none',
            ease: 'power3.in',
            delay: 1,
            
          });
        },
      });
    }
  }, [cartOpen]);



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

      {!searchOpen && (

        <>

      <div className="logo">Sharodiya</div>

      <div className="right-section">
        <div className="icons">
          <div className="search-icon" onClick={() => setSearchOpen(true)}>
            <FiSearch />
          </div>

          <div className="cart-icon">
            {cartOpen ? (
              <FiX onClick={() => setCartOpen(!cartOpen)} style={{ transform: 'translateY(2px)' }}  /> ) : (
                <FiShoppingCart onClick={() => {
              setCartOpen(!cartOpen);
            }} />
              )}
              
            
            <span className="cart-count">0</span>
            
          </div>
        </div>

        
        <div className="divider" />
        
        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX style={{ transform: 'translateY(2px)' }}  /> ) : (
              <div className="custom-hamburger">
                <span className="line line1" />
                <span className="line line2" />
              </div>
            )}
        </div>
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

      {isCartEmpty && (
        <nav ref={emptyCartNavRef} className="empty-cart-nav">
          <a
            href="#"
            ref={(el) => (emptyCartLinksRef.current[0] = el)}
            onClick={(e) => e.preventDefault()}
            style={{ cursor: 'default', pointerEvents: 'none' }} // disables clicking
          >
            Your cart is currently empty.
          </a>
        </nav>

        
      )}

      


      <div className="icons">
        <div className="search-icon" onClick={() => setSearchOpen(true)}>
          <FiSearch />
        </div>

        <div className="cart-icon">
          {cartOpen ? (
              <FiX onClick={() => setCartOpen(!cartOpen)} style={{ transform: 'translateY(2px)' }}  /> ) : (
                <FiShoppingCart onClick={() => {
              setCartOpen(!cartOpen);
            }} />
              )}
          <span className="cart-count">0</span>
        </div>
      </div>

      </>
      )}

     {searchOpen &&  (
  <div className="search-overlay-wrapper">
    <div className="search-overlay-backdrop" onClick={() => setSearchOpen(false)} />
    <div className="search-bar">
      <input
  type="text"
  placeholder="Search"
  className="HeaderSearch"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

{searchQuery.trim() === '' ? (
  <FiX className="close-icon" onClick={() => {
    setSearchOpen(false);
    setSearchQuery('');
  }} />
) : (
  <FiSearch className="search-icon" onClick={() => {
    // trigger search logic here
    console.log('Searching for:', searchQuery);
  }} />
)}

    </div>
  </div>
)}



      
      
    
    </header>
  );
};

export default Header;
