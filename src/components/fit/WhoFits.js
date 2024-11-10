import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import fit from "../../Icons/wired-flat-1527-baby-day-care-hover-pinch.json"

import ScrollReveal from "scrollreveal";
import Button from "../button/Button";

const WhoFits = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.header}`, {
      duration: 600,
      distance: "60px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  }, [])

  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };

  const playerRef = useRef(null);

  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapY}>
          <h1 className={styles.header}>למי מתאימות הסדנאות?</h1>
          <Player icon={fit} ref={playerRef} size="30%" loop={true} onComplete={handleComplete}></Player>
          
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            הורים שמחפשים סביבה אינטימית ומאפשרת
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            הורים שמחפשים עוד ידע לגבי עולם הילדות והתינוק
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            הורים שמחפשים מרחב לאינטרקציה עם עוד הורים
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            הורים שמעודדים ומסוקרנים מהתפתחות התינוק

            </div>
          </div>

        </div>
      </div>
 
      <Button text="נשמע לי מדהים, בואי נדבר"/>
    </>
  )
}

export default WhoFits