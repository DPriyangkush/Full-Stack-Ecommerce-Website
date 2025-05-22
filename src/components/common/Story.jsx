import React, { useEffect, useState } from 'react';
import './Story.scss';
import axios from 'axios';

const Story = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/our-stories?populate=*');
        const imagePath = res.data.data[0]?.ourstory?.url;

        if (imagePath) {
          setImageUrl(`http://localhost:1337${imagePath}`);
        } else {
          console.warn('Image URL not found in response.');
        }
      } catch (err) {
        console.error('Error fetching hero image:', err);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <section className="story">
      {imageUrl && (
        <img className="story__video" src={imageUrl} alt="Hero Background" />
      )}

      <div className="story__overlay">
        <div className="story__left">
          <p className="story__est">EST. 2023</p>
          <h1 className="story__title">
            Woven with purpose.<br /> Worn with pride.
          </h1>
        </div>
        <div className="story__right">
          <button className="story__button">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
