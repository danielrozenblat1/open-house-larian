import React from 'react';
import styles from './WhoServices.module.css';

import larian from "../../images/לריאן לרמן.png"
import Button from '../button/Button';
const WhoServices = () => {
  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.title} id="מי אני">קצת עלי</h2>
      
      <div className={styles.founders}>
        <div className={styles.founder}>
          <h1 className={styles.founderName}>לריאן זוסינו לרמן</h1>
          <img src={larian} alt="לריאן לרמן" className={styles.founderImage} />
        </div>
        {/* <div className={styles.founder}>
          <h1 className={styles.founderName}>יוגב לרמן</h1>
          <img src={yogev} alt="יוגב לרמן" className={styles.founderImage} />
        </div> */}
      </div>
          <p className={styles.description}>
          אני לריאן זוסינו לרמן,  נשואה ליוגב ואמא לאנליה ואלה-יה. 
          כשאנליה נולדה זכיתי לתואר ״אמא״ וזה מה שסלל עבורי את הדרך בה אני נמצאת היום, קיבלתי את הזכות להאיר ולאחד לבבות של הורים וילדים.
</p>

<p className={styles.description}>מדריכת הורים מוסמכת מכון אדלר, יועצת שינה לתינוקות, פעוטות וילדים, יועצת גמילה (חיתולים מוצצים ועוד)  ומסיימת את הכשרתי בליווי התפתחותי לגילאי לידה עד שלוש שנים.

</p>
<p className={styles.description}>
החיבור בין הורים וילדים ובניית מערכת יחסים מיטיבה ואיכותית ביניהם זה הדבר הקסום והמרתק ביותר עבורי, זו שליחות חיי ואני ברת מזל לחיות מדי יום את מה שאני הכי אוהבת לעשות.
</p>
<p className={styles.description}>
יש לי קליניקה בשכונת אחיסמך החדשה בה אני מלווה ומדריכה הורים מידי יום.
</p>

  <Button text="לחצ/י כאן לעוד פרטים"/>
    </div>
  );
};

export default WhoServices;