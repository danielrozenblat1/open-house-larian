import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";
import Button from "../button/Button";
import styles from "./WhoFits.module.css";
import fit from "../../Icons/wired-lineal-1529-parenting-parents-family-hover-pinch.json";

const WhyMe = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.header}`, {
      duration: 900,
      distance: "60px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.checkmark}`, {
        duration: 900,
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
        duration: 900,
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

  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 2500);
  };

  const playerRef = useRef(null);

  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapY}>
          <h1 className={styles.header}>אז למה לבחור בסדנה שלי?</h1>
          <Player
            icon={fit}
            ref={playerRef}
            size="30%"
            loop={true}
            onComplete={handleComplete}
          />

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              חוויה מעצימה ומשמעותית
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              מערכת יחסים מבוססת אמון
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              תחושות אהבה ובטחון
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
             יחס אישי
            </div>
          </div>
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              זכאות להחזר מסל להריון
            </div>
          </div>
        </div>
      </div>
      <Button text="לריאן, אני רוצה בואי נדבר!" />
    </>
  );
};

export default WhyMe;