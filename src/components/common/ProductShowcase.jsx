import React from "react";
import "./ProductShowcase.scss";
import saree3 from "../../assets/saree3.jpeg"
import saree2 from "../../assets/saree2.jpeg"
import saree1 from "../../assets/saree1.jpeg"

const ProductShowcase = () => {
  return (
    <div className="product-page">
      {/* LEFT: Images */}
      <div className="product-images">
        <img className="main-image" src={saree3} alt="Dress" />
        <div className="thumbnails">
          <img src={saree1} alt="thumb1" />
          <img src={saree2} alt="thumb2" />
          <img src={saree3} alt="thumb3" />
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="product-info">
        <div className="heading">
          <h1>Sharodiya Exclusive</h1>
          <button className="see-all">SEE ALL </button>
        </div>
        <div className="divider-heading"></div>
        <h2>Floral White Dress</h2>
        <div className="price-section">
          <span className="price">$79</span>
          <span className="old-price">$99</span>
          <span className="rating">⭐ 4.9 (12)</span>
        </div>

        <div className="selectors">
          <div className="size">
            <p>Size</p>
            <div className="options">
              <button className="selected">L</button>
              <button>S</button>
              <button>XS</button>
            </div>
          </div>

          <div className="color">
            <p>Color</p>
            <div className="options">
              <button className="selected">Floral</button>
              <button>Beige</button>
              <button>Black</button>
            </div>
          </div>
        </div>

        <div className="quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <div className="divider"></div>

         <div className="info">
          <span>🔒 Safe Payment</span>
          <span>🚚 Free Shipping</span>
          <span>📦 Delivery in 2-5 days</span>
        </div>

        <div className="actions">
          <button className="add-to-cart">ADD TO CART</button>
          <button className="buy-now">BUY NOW</button>
        </div>

        <div className="desc">
          <h4>Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem laboriosam omnis totam labore laborum tempora quos.</p>
        </div>
       
      </div>
    </div>
  );
};

export default ProductShowcase;
