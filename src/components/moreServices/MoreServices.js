import React, { useState, useRef, useEffect } from 'react';
import { Users, Clock, Gift, Home, Calendar, Coffee } from 'lucide-react';
import styles from './MoreServices.module.css';
import Button from '../button/Button';

const WorkshopCard = ({ type, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const getMessage = (title) => {
    return `היי לריאן, אשמח לקבל עוד פרטים בנוגע ל${title}`;
  };

  return (
    <div className={styles.container} id="סוגי הסדנאות">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        <div className={styles.buttonContent}>
          <div className={styles.iconWrapper}>
            {type === 'group' && <Users className={styles.mainIcon} />}
            {type === 'private' && <Home className={styles.mainIcon} />}
            {type === 'gift' && <Gift className={styles.mainIcon} />}
          </div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.subtitle}>{content.subtitle}</p>
          </div>
        </div>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div 
        style={{ height: `${height}px` }}
        className={styles.contentWrapper}
      >
        <div ref={contentRef} className={styles.content}>
          <div className={styles.detailsSection}>
            {content.details && (
              <>
                {type !== 'gift' && <h3 className={styles.sectionTitle}>{type === 'private' ? 'התהליך כולל:' : 'הסדנה כוללת:'}</h3>}
                <ul className={styles.detailsList}>
                  {content.details.map((detail, index) => (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.bullet}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {content.ages && (
            <div className={styles.agesSection}>
              <h3 className={styles.sectionTitle}>{type === 'group' ? 'הסדנאות מחולקות לפי סגמנטים ושלבי התפתחות:' : 'גילאים:'}</h3>
              <ul className={styles.agesList}>
                {content.ages.map((age, index) => (
                  <li key={index} className={styles.ageItem}>
                    <span className={styles.bullet}>•</span>
                    {age}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.cta && (
            <div className={styles.ctaSection}>
              <Button 
                text={content.cta} 
                message={getMessage(content.title)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkshopCards = () => {
  const workshopContents = {
    group: {
      title: "סדנאות קבוצתיות",
      subtitle: "סדנאות בקבוצות קטנות ליצירת אינטימיות, יחס אישי, תמיכה והעשרה",
      details: [
        "4 מפגשי הדרכה וליווי",
        "פעם בשבוע",
        "למשך שעה וחצי",
        "אפרטיף בוקר"
      ],
      ages: [
        'סדנת "מגלים את העולם" - גילאי לידה עד 3 חודשים',
        'סדנת "מתגלגלים בעולם" - גילאי 3-6 חודשים',
        'סדנת "נעים בעולם" - זוחלים +'
      ],
      cta: "אני אשמח לפרטים!"
    },
    private: {
      title: "תהליך פרטני",
      subtitle: "תהליך אישי באווירה אינטימית ומותאמת עבור מי שאוהב תהליכי ליווי והדרכה פרטנית",
      details: [
        "תהליך ליווי נבנה ומותאם באופן אישי וייחודי עבור ההורה והילד ולשלב ההתפתחותי בו הילד נמצא",
        "קבלת ידע לעידוד התפתחות וליצירת חיבור עמוק ועשיר יותר עם הילד",
        "מתאים גם להורה שרוצה תהליך פרטני ו/או להורה שילדו בעיכוב התפתחותי מאובחן ורוצה לקבל מענה, כלים וידע על מנת לעודד התפתחות מיטבית ואיכותית",
        "מספר המפגשים נקבע באופן אישי ובהתאם לצורך",
        "משך כל מפגש הינו כשעה",
        "המפגש מתקיים אצלי בקליניקה"
      ],
      ages: ["לגילאי לידה עד 3 שנים"],
      cta: "אני אשמח לפרטים!"
    },
    gift: {
      title: "שובר מתנה ליולדות/להורים בקהילה הגאה",
      subtitle: "רוצים להעניק מתנה ייחודית ויוצאת דופן?",
      details: [
        "הענקת שובר מתנה לאחת מהסדנאות שלי זו הזדמנות אדירה להעניק מתנה עם משמעות וערך עליון",
        "בשובר ניתן לרשום את שם מקבל המתנה ולמי המתנה מוענקת",
        "השובר נשלח אל הלקוח באופן אישי"
      ],
      cta: "אני רוצה להעניק שובר מתנה"
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <WorkshopCard type="group" content={workshopContents.group} />
      <WorkshopCard type="private" content={workshopContents.private} />
      <WorkshopCard type="gift" content={workshopContents.gift} />
    </div>
  );
};

export default WorkshopCards;