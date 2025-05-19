import React, { useRef, useEffect } from 'react';
import "../common/EmptyCart.scss";

const EmptyCart = ({ cartRef }) => {
  const messageRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    // Example: Focus the link or animate something
    if (linkRef.current) {
      linkRef.current.focus();
    }
  }, []);

  return (
    <div ref={cartRef} className="empty-cart">
      <p ref={messageRef} className="message">
        Your cart is currently empty.
      </p>
      <a
        ref={linkRef}
        href="/shop"
        className="shop-link"
        onClick={() => console.log('Continue Shopping clicked')}
      >
        Continue Shopping
      </a>
    </div>
  );
};

export default EmptyCart;
