import React, { useState } from 'react';
import { ChevronDown, Heart, Moon, Brain, Baby } from 'lucide-react';
import styles from './ThirdScreenServices.module.css';
import Button from '../../components/button/Button';  // מייבא את קומפוננטת הכפתור שלך

const ServiceBox = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.serviceWrapper}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.serviceButton} ${isOpen ? styles.active : ''}`}
        dir="rtl"
      >
        <div className={styles.titleContent}>
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
        />
      </button>
      
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`} dir="rtl">
        <div className={styles.content}>
          {children}
          <div className={styles.buttonContainer}>
            <Button 
              text="לפרטים נוספים" 
              message={`היי לריאן, אשמח לשמוע עוד על ${title}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.container} dir="rtl">
      <ServiceBox 
        title="הדרכת הורים בגישה האדלריאנית" 
        icon={Heart}
      >
        <div className={styles.serviceContent}>
          <p className={styles.description}>
            גישה שמתמחה בפסיכולוגיה האינדווידיאלית - שמה דגש על שוויון ערך בין בני המשפחה, יצירת שיתוף פעולה וחיזוק תחושת השייכות והמשמעות של הילד בתוך החיק המשפחתי
          </p>
          <div className={styles.methodBox}>
            <h3 className={styles.methodTitle}>בעזרת השיטה נדע:</h3>
            <ul className={styles.methodList}>
              <li>לראות את הילד כמו שהוא</li>
              <li>לתת יחס אישי ומותאם לילד</li>
              <li>לדעת להבין את הצרכים הרגשיים</li>
              <li>לענות על כל צורך רגשי</li>
              <li>לעודד בטחון רגשי וחוסן</li>
            </ul>
          </div>
        </div>
      </ServiceBox>

      <ServiceBox 
        title="ייעוץ שינה לתינוקות, פעוטות וילדים" 
        icon={Moon}
      >
        <div className={styles.serviceContent}>
          <p className={styles.description}>
            תהליך אינטימי הכולל שאלון פיזי והגעה לתצפית של שעה במהלך היום. "זום אין לתוך התפיסה של ההורה בכל הקשור לשינה"
          </p>
          <div className={styles.methodBox}>
            <h3 className={styles.methodTitle}>בעזרת השיטה נדע:</h3>
            <ul className={styles.methodList}>
              <li>לזהות את הצרכים של הילד</li>
              <li>לתת מענה מותאם לילד באופן ספציפי</li>
              <li>להעניק לילד שינה בריאה בטווחי השינה הנכונים</li>
              <li>לשנות דפוסי התנהגות של ההורה שישפיעו על שינת התינוק</li>
            </ul>
          </div>
        </div>
      </ServiceBox>

      <ServiceBox 
        title="ליווי התפתחותי מגיל לידה עד גיל 3 שנים" 
        icon={Brain}
      >
        <div className={styles.serviceContent}>
          <p className={styles.description}>
            כולל שאלון ממוקד ותצפית - הערכה התפתחותית. עבודה משולבת עם ההורה והילד, תוך הבנת השלב ההתפתחותי והצרכים הייחודיים.
          </p>
          <div className={styles.methodBox}>
            <h3 className={styles.methodTitle}>בעזרת השיטה נדע:</h3>
            <ul className={styles.methodList}>
              <li>לקבל כלים לשלב ההתפתחות של הילד</li>
              <li>על מה יש לעבוד עם הילד</li>
              <li>התמקדות בתחומים: חושים, תנועתיות, קוגניטיביות, שפתי, תקשורתי, חברתי, משחק</li>
            </ul>
          </div>
        </div>
      </ServiceBox>

      <ServiceBox 
        title="ייעוץ גמילה (חיתולים, מוצץ..)" 
        icon={Baby}
      >
        <div className={styles.serviceContent}>
          <p className={styles.description}>
            כולל שאלון, תצפית לפי הצורך, ובדיקת מיומנויות תקשורתיות ורגשיות. מתן מענה מותאם אישית להתמודדות עם תהליך הגמילה.
          </p>
          <div className={styles.methodBox}>
            <h3 className={styles.methodTitle}>התהליך כולל:</h3>
            <ul className={styles.methodList}>
              <li>בדיקת קשיים ומשברים אפשריים</li>
              <li>מתן מענה לצרכים הספציפיים</li>
              <li>פיתוח דרכים לויסות רגשי ללא תלות באובייקט חיצוני</li>
              <li>ליווי והדרכת ההורים לאורך התהליך</li>
            </ul>
          </div>
        </div>
      </ServiceBox>
    </div>
  );
};

export default Services;