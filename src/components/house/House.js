import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './House.module.css';

const MinimalistBox = ({ title, description }) => {
  useEffect(() => {

      ScrollReveal().reveal(`.${styles.title}`, {
        duration: 800,
        distance: "60px",
        origin: "right",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 200,
        delay: 100,
        scale: 1,
      });
      ScrollReveal().reveal(`.${styles.description}`, {
        duration: 800,
        distance: "60px",
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
    <div className={styles.minimalistBox}>
      <div className={styles.roof}></div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MinimalistBox;