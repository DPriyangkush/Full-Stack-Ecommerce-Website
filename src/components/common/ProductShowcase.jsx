import React, {useState} from "react";
import "./ProductShowcase.scss";
import saree3 from "../../assets/saree3.jpeg"
import saree2 from "../../assets/saree2.jpeg"
import saree1 from "../../assets/saree1.jpeg"
import lock from "../../assets/online-shopping.png"
import delivery from "../../assets/delivery-truck.png"
import parcel from "../../assets/express-delivery.png"

const images = [saree1, saree2, saree3, saree1]; // or use a unique list



const ProductShowcase = () => {

  const [selectedImage, setSelectedImage] = useState(saree3);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("Floral");

  return (
    <div className="product-page">
      {/* LEFT: Images */}
      <div className="product-images">
        <img className="main-image" src={selectedImage} alt="Dress" />
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
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
              {["L", "S", "XS"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="color">
            <p>Color</p>
            <div className="options">
              {["Floral", "Beige", "Black"].map((color) => (
                <button
                  key={color}
                  className={selectedColor === color ? "selected" : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="quantity">
          <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>


        <div className="divider"></div>

         <div className="info">
          
          <div className="info-one info__column">
            <img src={lock} alt="" srcset="" />
            <span>Safe Payment</span>
          </div>
          <div className="info-two info__column">
            <img src={delivery} alt="" srcset="" />
            <span>Free Shipping</span>
          </div>
          <div className="info-three info__column">
            <img src={parcel} alt="" srcset="" />
            <span>Delivery in 2-5 days</span>
          </div>
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
