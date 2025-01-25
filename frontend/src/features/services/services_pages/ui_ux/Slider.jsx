import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css"; // Import CSS module

const images = [
  "/src/features/services/services_pages/ui_ux/img/slider_image_6.webp",
  "/src/features/services/services_pages/ui_ux/img/slider_image_5.webp",
  "/src/features/services/services_pages/ui_ux/img/slider_image_3.webp",
  "/src/features/services/services_pages/ui_ux/img/slider_image_2.webp",
  "/src/features/services/services_pages/ui_ux/img/slider_image_1.webp",
  "/src/features/services/services_pages/ui_ux/img/slider_image_4.webp",
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
