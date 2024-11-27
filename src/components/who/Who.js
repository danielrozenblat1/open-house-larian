import React from 'react';
import styles from './Who.module.css';

import larian from "../../images/לריאן לרמן.png"
import Button from '../button/Button';
const Who = () => {
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
<h1 className={styles.title} id="BABY . LOVE">BABY . LOVE</h1>
<div className={styles.description}>
ברוכים הבאים למקום בו הכל מתחיל - סדנאות הבוטיק שלי להורים ותינוקות מגיל לידה ועד שנה. כאן, תוכלו לגלות את הדרך המופלאה לבניית מערכת יחסים מיטיבה, איכותית, עמוקה ומרגשת ביותר ביניכם לבין התינוק שלכם.</div>
{/* <div className={styles.center}><img className={styles.image} src={larian1} alt="לריאן זוסינו לרמן"/></div> */}
<div className={styles.description}>
ההורות היא מסע מופלא של גילוי, אהבה ועשייה משותפת. בואו לגלות איך אתם יכולים ליצור השפעה משמעותית על חיי התינוק שלכם ולהניח יסודות איתנים למערכת יחסים חזקה ומלאת אהבה ובטחון רגשי כבר מהשנה הראשונה</div>
{/* <div className={styles.center}><img className={styles.image} src={larian2} alt="לריאן זוסינו לרמן"/></div> */}
<div className={styles.description}>
בואו יחד איתי לחוות את הכוח האמיתי של ההורות והשפעתה על תפיסת העולם של התינוק. הצטרפו אליי למסע של חיבורים מרתקים, מגע, עיסוי, פיתוח של יכולות קוגניטיביות, תקשורתיות, שפתיות, רגשיות והתפתחות המשחק של תינוקכם.</div>

  <Button text="לחצ/י כאן לעוד פרטים"/>
    </div>
  );
};

export default Who;