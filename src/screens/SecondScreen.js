import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import confident from "../Icons/wired-outline-529-boy-girl-children.json"
import brain from "../Icons/wired-outline-426-brain.json"
import memory from "../Icons/wired-outline-2353-horizontal-brain.json"
import sharp from "../Icons/wired-outline-458-goal-target.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.description}>אינטראקציה חברתית חשובה לתינוקות משום שהיא תורמת להתפתחות הרגשית, החברתית, והקוגניטיבית שלהם. הנה כמה סיבות מרכזיות לחשיבות האינטראקציה החברתית בגיל הרך:</div>
<div className={styles.row}>
<Why title="בטחון עצמי" description=" כאשר תינוקות נמצאים בסביבה תומכת ומגיבה, הם לומדים בהדרגה לבטא את הצרכים והרגשות שלהם. תגובה חיובית לסימני תקשורת מחזקת את תחושת הביטחון העצמי שלהם." icon={confident}/>
  <Why title="למידת יחסים חברתיים" description="דרך אינטראקציה עם אחרים, תינוקות מתחילים להבין מושגים כמו שיתוף פעולה, תור, ואמפתיה. הם לומדים לזהות את הרגשות של אנשים אחרים ולהגיב אליהם, מה שמניח את הבסיס ליחסים חברתיים בריאים בעתיד." icon={memory}/>
  </div>
  <div className={styles.row}>
<Why title="קידום למידה" description="תינוקות לומדים דרך חיקוי וסקרנות טבעית, ובאינטראקציה עם ילדים אחרים הם מקבלים השראה ללמוד ולחקור יותר. הם רואים איך אחרים פועלים ומתנהגים, ולומדים מהם כיצד לפעול בסיטואציות דומות." icon={brain}/>
  <Why title="פיתוח כישורי תקשורת" description="באמצעות אינטראקציה עם מבוגרים וילדים אחרים, תינוקות לומדים לתקשר, לפענח הבעות פנים, מחוות וג'סטות. האינטראקציה תורמת לפיתוח השפה ולכישורי תקשורת חברתיים בסיסיים." icon={sharp}/>
  </div>
  <Button text="לחצ/י כאן לעוד פרטים"/>
    </>
}
export default SecondScreen