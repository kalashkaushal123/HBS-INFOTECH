import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css"; // Import CSS module

const images = [
  "https://images.unsplash.com/photo-1725120344808-420e96dd8fdf?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724931282671-2d3bcd6de8f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724875299388-7257f4af1cf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724770646663-2a806ed04ca4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723675510074-6e9f59fd3af0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724690416953-c787bc34b56f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let autoSlideInterval;

  const showSlide = (index) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  useEffect(() => {
    autoSlideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex]);

  return (
    <div className={styles.background}>
      
      <div
        className={styles.sliderContainer}
        onMouseEnter={() => clearInterval(autoSlideInterval)}
        onMouseLeave={() => (autoSlideInterval = setInterval(nextSlide, 4000))}
      >
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className={styles.slide} key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
        <button className={styles.next} onClick={nextSlide}>&#10095;</button>
      </div>
      <div className={styles.dotsContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            src={img}
            alt={`Dot ${index + 1}`}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
