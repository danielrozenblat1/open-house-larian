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
            <strong className={styles.emphasis}>לריאן זוסמן מציגה</strong>
          </div>
          <p className={styles.description}>
            הפתרון לכל הורה שנמצא עם התינוק בבית ומחפש זמן איכות עם הורים נוספים בסביבה בטוחה ומהנה:
          </p>
        </div>
        <h1 className={styles.title}>קבוצות ההורים והתינוקות בגני איילון</h1>
        <div className={styles.arrowWrapper}>
          <MoveDown className={styles.arrow} size={32} />
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;