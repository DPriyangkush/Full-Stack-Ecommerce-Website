import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:1337/api/new-collections?populate=image')
    .then((res) => {
      const fetchedProducts = res?.data?.data?.map((item) => ({
        name: item?.name,
        price: item?.price,
        originalPrice: item?.originalPrice,
        category: item?.category,
        imageUrl: item?.image?.formats?.medium?.url
          ? `http://localhost:1337${item.image.formats.medium.url}`
          : item?.image?.url
            ? `http://localhost:1337${item.image.url}`
            : null,
      }));
      setProducts(fetchedProducts);
    })
    .catch((err) => {
      console.error('Failed to fetch products:', err);
    });
}, []);


  
  return (
    <section className="lux-collection">
      <div className="lux-header">
        <div className="lux-info">
          <p>New Collection</p>
          <h2>Threads of Royalty</h2>
        </div>
        <button className="view-all">See All Products</button>
      </div>
      <div className="divider"></div>
      <div className="lux-products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info">
              <div className="product-meta">
                <span className="product-name">{product.name}</span>
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-price">
                <span>{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
