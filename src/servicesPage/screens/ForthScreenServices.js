import React from 'react';
import styles from './ForthScreenServices.module.css';
import ester from "../../images/אסתר סולימן.png"
import nofar from "../../images/נופר אבידן.jpeg"
import shira from "../../images/שירה בן טל.jpeg"
import miran from "../../images/מירן גבאי.jpeg"
import libar from "../../images/ליבר מזרחי.jpeg"
import michal from "../../images/מיכל מורוז.jpeg"
import neta from "../../images/נטע אזולאי.jpeg"
const Testimonials = () => {
  const testimonials = [
    {
      name: "אסתר סולימן",
      text: "לריאני שלי לא מאמינה שמחר נגמרו 2 סדנאות מושלמות. בחיי שכל מי שרק רואה את הסטורי שלי או שאני אצלך מקבל ישר המלצה. אין שמחה ממני שהצלחתי להגיע אליך ושזכינו בך. את לא מבינה כמה כיף מהצד לראות איך את נותנת יחס אישי לכל ילד וילד למרות שאנחנו בכלל קבוצה את מתאימה לכל אחד את מה שהוא צריך באמת. למדתי ממך המון ועדיין לומדת אוריה מתפתחת לי כל רגע מחדש וזה הכי מרגש בעולם אז שוב תודה על הכל אהובה שלי תודה שאת מאמינה בילדה שלי וגם בי וגורמת לי להיות הגירסה היותר טובה שלי עבורה",
      highlight: "״כל ילד צריך מבוגר אחד שיאמין בו״",
      image: ester
    },
    {
      name: "נטע אזולאי מנשורי",
      text: "הגעתי ללריאן דרך פוסט באינסטגרם, עוד לפני שנפגשנו הגישה והתקשורת שלה היו מדהימים וגרמו לי להרשם לסדנא. כל מפגש מחדש היה הרבה מעבר למעשי, לטכני, להתפתחות (שלשם כך התכנסנו). היא ראתה קודם כל אותנו האמהות, הרגישה אותנו עזרה לנו ושוב- כשיש לאדם גישה יחסי אנוש ותקשורת כזו, כל השאר זה בונוס. אז אחרי סדנא ראשונה נרשמתי גם לשנייה.",
      highlight: "והמפגשים האלו זה הזמן הכי כיף שיש לי עם הילדה שלי💗 בזכות לריאן. תודה עלייך!!!🙏🏽",
      image: neta
    },
    {
      name: "מיכל מורוז",
      text: "לפני כמה חודשים, הפכתי לאמא בפעם הראשונה, אחרי לידה לא פשוטה – הבת שלי נולדה פגה בשבוע 28, במשקל 630 גרם בלבד. בתוך כל חוסר הוודאות, הגעתי ללריאן והשתתפתי בשתי סדנאות התפתחות מדהימות. אין לי מילים לתאר כמה הן תרמו לי ולבת שלי. לריאן לימדה אותי המון תרגילים פשוטים ליישום אבל עם השפעה אדירה – גם על ההתפתחות של הילדה וגם על תחושת הביטחון שלי כאמא. הרגישות, הידע והחום שהיא מביאה איתה לכל מפגש הם משהו נדיר.",
      highlight: "זו אחת המתנות הכי גדולות שנתתי לעצמי ולבת שלי. ממליצה מכל הלב לכל הורה, ובמיוחד לאמהות צעירות אחרי לידה מאתגרת",
      image: michal
    },
    {
      name: "נופר אבידן",
      text: "את ימי רביעי בבוקר אני משקיעה בסדנת ליווי התפתחותי עם שינה. עשיתי סקר שוק ממש רציני ומצאתי את הסדנא הכי טובה, מקצועית, נעימה, אינטימית וכייפית. מעבירה אותה לריאן, אדיבה ורחבת לב שהיא ממש אינציקלופדיה לתינוקות. אנחנו כל כך נהנות להגיע אליה בכל יום רביעי כדי ללמוד עוד על הגיל של הניובורן וברור שכבר נרשמנו לסדנת ההמשך.",
      highlight: "אישה קסומה שהפכה את המקצוע לשליחות שלה, אישה מוכשרת מלאה בנתינה, סבלנות לאימהות צעירות ותינוקות רכים",
      image: nofar
    },
    {
      name: "שירה בן טל",
      text: "הגעתי לליראן ממש במקרה ולצערי לא היה מקום בסדנא של הקבוצות, לשמחתי לריאן הציעה לנו סדרה של מפגשים פרטים בבית- אחרי התלבטות החלטנו שכן ואין מרוצה ממני על ה״כן״הזה❤️ הוקסמנו מלריאן, מהרגוע והשקט הפנימי שלה ומהדרך שבה היא הנגישה את הכל, בהתחלה זה היה לנו כל כך מוזר מפגש אחד על אחד בבית שלנו והגישה שלה פשוט להביאה לנו את כל הנינוחות והכייף שבדבר הזה ובהחלט וזה היה הדבר הכי נכון שעשינו עבור עצמנו ולילדה שלנו!! כהורים לילדה ראשונה לא כ״כ היה לנו ידע והיא לימדה אותנו כל כך הרבה!! , עזרה לנו לקדם התפתחותית את הילדה שלנו והעניקה לנו חיבור עמוק יותר להורות שלנו.",
      highlight: "נתנה לנו ביטחון בכמה שאנחנו עושים ועודדה את האינטואיציה ההורית שלנו - ״להזיז את כל רעשי הרקע״ ולהיות קשובים לעצמנו",
      image: shira
    },
    {
      name: "ליבר מזרחי",
      text: "את לריאן אהוב ליבי הכרתי לאחר לידת בני השני וזכיתי לעבור איתה תהליך משמעותי, אפשר לתת לתהליך את הכותרת ״הדרכת הורים״ אבל היא לא תשקף את מה שעברנו כי היה בתהליך איתה כל כך הרבה מעבר! התפתחתי לאורך כל הדרך כל מפגש טמן כל כך הרבה ידע מעשיר ומעשי. היא לימדה אותי לשנות את החשיבה מהשורש ועזרה לי להוציא את המיטב מעצמי ובכך השפיעה לא רק על ההתנהלות ההורית אלא על כל חיי. הדבר שהכי חשוב לי להדגיש זו העובדה שאין תהליך אחד שאותו היא מעבירה לכולם, לאורך כל הדרך דייקנו ושינינו את התהליך באופן אישי ומותאם אלינו כמשפחה תוך הקשבה מלאה לצרכים שלי ושל ילדיי וזו בעצם הייחודיות שלה בעיניי.",
      highlight: "מתוך זמינות מלאה ותחושה שיש מי שמחזיק לי את היד גם מרחוק ותמיד ממלא את סל הכלים שלי במקצועיות רבה ובעיקר מהלב",
      image: libar
    },
    {
      name: "מירן גבאי",
      text: "הגעתי ללריאן אחרי שהייתי אצל יועצת שינה אחרת שחוויתי אצלה חוויה הכי לא נעימה בעולם והכי לא שירותית שיש. התינוק שלי היה בן 10 חודשים, לא ישן לילה שלם אחד, וכל לילה היה נגמר כשהוא עבר אלינו למיטה ואז לא היינו ישנים בכלל. ואז הפלא קרה, הכרתי את לריאן!!! אחרי החוויה הקשה שעברתי בניסיון הראשון שלנו הייתי כל כך חצויה והתלבטתי שבוע אם לעשות שוב תהליך כי כבר הייתי חסרת אמונה ביועצות שינה. החלטתי לנסות שוב, נפגשנו, והחיבור היה מדהים! הרגשתי מהרגע הראשון שהיא אשת מקצוע שאני צריכה ושיש לי תקווה שהפעם זה יצליח. לריאני, הגעת עם הקול הנעים שלך והמרגיע והורדת לי את כל הרוחות, נתת לי ביטחון, רוגע ובעיקר אמונה בעצמי ואמון בתהליך. נתת לי המון ידע, שילוות גם הדרכת הורים וגם ליווי התפתחותי וזה פשוט יצר מעטפת לכל התהליך שלנו.",
      highlight: "אחרי שבוע בלבד זו פעם ראשונה שהשלמתי שעות שינה!!!! וחשוב לציין שלא ישנתי 7 חודשים! חזרתי לשתות נס קפה רותח בבוקר. חזרתי לחיים!",
      image: miran
    }
  ];

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>המלצות</h2>
        <p className={styles.subtitle}>מה אומרות האמהות שלנו</p>
      </div>
      
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.imageContainer}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.quoteIcon}>❝</div>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              {testimonial.highlight && (
                <p className={styles.highlightText}>{testimonial.highlight}</p>
              )}
            </div>
            <div className={styles.authorSection}>
              <div className={styles.authorName}>{testimonial.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;