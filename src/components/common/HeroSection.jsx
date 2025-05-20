import React from 'react';
import './HeroSection.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [videoUrl, setVideoUrl] = useState('');

   useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/hero-sections?populate=BackgroundVideo');
        const videoPath = res.data.data[0]?.BackgroundVideo?.url;
        console.log(videoPath)
        if (videoPath) {
          setVideoUrl(`http://localhost:1337${videoPath}`);
        }
      } catch (err) {
        console.error('Error fetching hero video:', err);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="hero">
      {videoUrl && (
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      )}

      <div className="hero__overlay">
        <div className="hero__left">
          <p className="hero__est">EST. 2023</p>
          <h1 className="hero__title">FASHION THAT STANDS<br />THE TEST OF TIME</h1>
        </div>
        <div className="hero__right">
          <p className="hero__desc">
            We bring fashion that transcends time, a blend<br />of classic aesthetics with modern materials.
          </p>
          <button className="hero__button">
            SHOP NOW <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
