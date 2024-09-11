import React, { useEffect } from 'react';
import styles from './Shape.module.css';
import ScrollReveal from 'scrollreveal';

const Shape = ({ title, description }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
        duration: 600,
        distance: "40px",
        origin: "left",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 200,
        delay: 100,
        scale: 1,
      });
      ScrollReveal().reveal(`.${styles.description}`, {
        duration: 600,
        distance: "40px",
        origin: "left",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 200,
        delay: 100,
        scale: 1,
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Shape;