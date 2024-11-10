import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import confident from "../Icons/wired-outline-1509-infant-massage-hover-pinch.json"
import brain from "../Icons/wired-outline-1508-breastfeeding-hover-pinch.json"
import memory from "../Icons/wired-outline-2353-horizontal-brain.json"
import sharp from "../Icons/wired-outline-655-baby-girl-hover-happy.json"
import target from "../Icons/wired-outline-1511-napping-hover-pinch.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.description}>עיסוי תינוקות ממלא תפקיד משמעותי בלימוד התינוק על גופו בכמה היבטים חשובים</div>
<div className={styles.row}>
<Why title="קואורדינציה ותנועה" description="דרך העיסוי, התינוק חווה תנועות פאסיביות שמתבצעות באופן יזום ומכוון על ידי ההורה, מה שמוביל לשיפור התנועות ושליטה עליהן בהמשך . התינוק לומד להרגיש איך חלקי הגוף שלו נעים בתגובה ללחץ ולכוונה." icon={confident}/>
  <Why title="חיזוק קצר עצבי" description="העיסוי יוצר קשרים עצביים בין חלקי הגוף למוח הגורמים לו לשלוח ולקבל אותות מהאזורים השונים בגוף. זה מחזק את התקשורת בין המוח לשרירים, המפרקים והגידים מה שמגביר את התחושה של התינוק לגבי גופו." icon={memory}/>
  </div>
  <div className={styles.row}>
<Why title="מודעות הגוף" description="במגע עדין ועמוק ובתנועה ממוקדת של חלקי הגוף השונים, העיסוי עוזר לתינוק להבין את הקשרים בין חלקי הגוף השונים. בעזרת העיסוי, התינוק מתחיל לזהות את חלקי גופו ואת מקומם ביחס לעצמם, ביחס לעצמו וביחס למרחב." icon={brain}/>
<Why title="שינה איכותית והכוח המרפא" description="העיסוי הוא כלי אדיר להורים להפוך את נושא השינה לפשוט וקל. ההרדמויות הופכות להיות קלות נוחות ומהירות ואיכות השינה הופכת להיות טובה יותר לאורך זמן. באמצעות העיסוי ההורה יכול לסייע ולהקל לתינוק במצבים בריאותיים שונים כגון כאבי בטן,גזים,עצירות,צינון,שיעול,גודש ,ליחה וחיזוק המערכת החיסונית. " icon={target}/>
  </div>

  <Button text="לחצ/י כאן לעוד פרטים"/>
    </>
}
export default SecondScreen