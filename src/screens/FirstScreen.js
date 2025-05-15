import React from 'react';
import { MoveDown } from 'lucide-react';
import styles from "./FirstScreen.module.css";

const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.emphasisWrapper}>
            <strong className={styles.emphasis}>לריאן זוסינו לרמן</strong>
          </div>
          {window.innerWidth>750 && <p className={styles.description}>
          סדנאות בוטיק לתינוקות 
           מגיל לידה ועד גיל שנה
          </p>}
          {window.innerWidth<750 && <p className={styles.description}>
          סדנאות בוטיק לתינוקות <br/> 
           מגיל לידה ועד גיל שנה
          </p>}
        </div>
        {/* <h1 className={styles.title}>BABY . LOVE</h1> */}
        <div className={styles.arrowWrapper}>
          <MoveDown className={styles.arrow} size={32}  strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;