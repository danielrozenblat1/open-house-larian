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
     </div>

     <p className={styles.description}>
       אני לריאן זוסינו לרמן, נשואה ליוגב ואמא לאנליה ואלה-יה. 
       כשבנותיי נולדו הרגשתי שבכל לידה שלהן נולדה מתוכי אישה נוספת, כל אחת מהן יצקה לחיי משמעות והובילה חלקים בתוכי להתפתחות אישית.
       המונח ״הולדת של אם״ השתקף בחיי וקיבל תוקף ממשי אל מול המציאות וכך בנתיב ההורי שלי, מתוך האמא שבי
       התחיל מסע הגילוי והיצמדות לתשוקת הלב שלי כעשייה ושליחות מתוך אהבה בחיי היומיום.
       ההורות סללה את דרכי לקבל את הזכות להאיר ולהאחד לבבנות של הורים וילדים.
     </p>

     <p className={styles.description}>
       אני מדריכת הורים מוסמכת מכון אדלר, מלווה התפתחותית מגיל לידה ועד 3 שנים, יועצת שינה לתינוקות, פעוטות וילדים,
       מנחת גמילה (חיתולים, מוצצים ועוד), מלווה ומנחת NLP, מנחת קבוצות מוסמכת מכון אדלר, מלווה ומנחה מעגלי נשים
       וקבוצות הורים ומלווה תהליכי התפתחות אישית וזוגית.
     </p>

     <p className={styles.description}>
       אני מאמינה שהמטרה העיקרית בהורות היא לרקום מערכת יחסים מיטיבה ואיכותית עם הילדים שלנו, 
       מערכת יחסים מבוססת אמון, אהבה, כבוד, הקשבה, אמפתיה, נראות, ערך, משמעות ושייכות.
       ככל שמערכת היחסים מיטיבה ואיכותית יותר כך נוכל לחוות רגעים בהורות של תקשורת איכותית, שיתוף, 
       אינטימיות ריגשית, שיתוף פעולה וכבוד הדדי.
       השליחות שלי היא להיות מתווכת בין הצרכים הרגשיים של הילדים שלא נשמעים בקול רם לבין החזון ההורי של ההורה,
       יצירת הגשר והחיבור בין ההורה לילד מתוך הבנה שמובילה לחמלה ועיניים טובות זו שליחות חיי
       ואני ברת מזל לחיות מדי יום את מה שאני הכי אוהבת לעשות.
     </p>

     <p className={styles.description}>
       הקליניקה שלי נמצאת בשכונת אחיסמך החדשה בה אני מלווה ומדריכה הורים מידי יום.
     </p>

     <Button text="לחצ/י כאן לעוד פרטים"/>
   </div>
 );
};

export default WhoServices;