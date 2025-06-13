import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import confident from "../Icons/wired-lineal-1509-infant-massage-hover-pinch.json"
import brain from "../Icons/wired-lineal-1508-breastfeeding-hover-pinch.json"
import memory from "../Icons/wired-lineal-2511-artificial-intelligence-ai-hover-pinch.json"
import sharp from "../Icons/wired-outline-655-baby-girl-hover-happy.json"
import target from "../Icons/wired-lineal-1511-napping-hover-pinch.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.description}>כך תיהיה הורה מוביל, יוזם ומעודד התפתחות בסדנאות שלי</div>
<div className={styles.row}>
<Why title="קואורדינציה ותנועה" description="בתהליכי הלמידה שלי נלמד איך להוביל לתנועות פאסיביות שמתבצעות באופן יזום ומכוון על ידי ההורה, מה שמוביל לשיפור התנועות ושליטה עליהן בהמשך . התינוק לומד להרגיש איך חלקי הגוף שלו נעים בתגובה ללחץ ולכוונה." icon={confident}/>
  <Why title="חיזוק קשר עצבי" description="תהליכי הלמידה שלי יוצרים קשרים עצביים בין חלקי הגוף למוח הגורמים לו לשלוח ולקבל אותות מהאזורים השונים בגוף. זה מחזק את התקשורת בין המוח לשרירים, המפרקים והגידים מה שמגביר את התחושה של התינוק לגבי גופו." icon={memory}/>
  </div>
  <div className={styles.row}>
<Why title="מודעות הגוף" description="במגע עדין ועמוק ובתנועה ממוקדת של חלקי הגוף, נעודד את מערכת חישה עמוקה על מנת לעזור לתינוק להבין את הקשרים בין חלקי הגוף השונים. בעזרת העיסוי ועידוד מערכת חישה עמוקה התינוק מתחיל לזהות את חלקי גופו ואת מקומם ביחס לעצמם, ביחס לעצמו וביחס למרחב." icon={brain}/>
<Why title="שינה איכותית והכוח המרפא" description="תהליכי הלמידה שלי למודעות והתפתחות אצל הילד שלך הם כלים המשפיעים על איכות השינה שלו, באמצעות הובלת תנועה נכונה ומותאמת והבנת ההשפעה שלה על המערכת הוסטיבולרית (המורידה הורמוני סטרס ומעלה הורמוני רגיעה), יחד עם העלאת תחושת המסוגלות האישית של ילדך ע״י הישגים התפתחותיים עולה תחושת הערך שלו ויכולת הלמידה שלו משתכללת, ומתוך זה נוצרת השפעה משמעותית על יכולות, ואיכות השינה שלו.
התהליכים מובילים להרדמויות קלות יותר, נוחות, מהירות ואיכות השינה הופכת להיות טובה יותר לאורך זמן. 
" icon={target}/>
  </div>

  <Button text="לחצ/י כאן לעוד פרטים"/>
    </>
}
export default SecondScreen