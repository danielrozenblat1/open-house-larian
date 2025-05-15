import React, { useEffect, useRef } from 'react';
import styles from './Why.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
const Why = ({ icon, title, description }) => {
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])
    useEffect(() => {
      ScrollReveal().reveal(`.${styles.icon}`, {
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
    <div className={styles.whyContainer}>
      <div className={styles.icon}>
      <Player icon={icon} ref={playerRef1} size="100%" onComplete={handleComplete}></Player>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Why;