import Why from "../components/why/Why"
import styles from "./SecondScreen.module.css"
import confident from "../Icons/wired-outline-529-boy-girl-children.json"
import brain from "../Icons/wired-outline-426-brain.json"
import memory from "../Icons/wired-outline-2353-horizontal-brain.json"
import sharp from "../Icons/wired-outline-458-goal-target.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.description}>עיסוי תינוקות ממלא תפקיד משמעותי בלימוד התינוק על גופו בכמה היבטים חשובים</div>
<div className={styles.row}>
<Why title="קואורדינציה ותנועה" description="דרך העיסוי, התינוק חווה תנועות ספונטניות שמתבצעות באופן פאסיבי, מה שמסייע לשיפור בתיאום התנועות ושליטה עליהן. התינוק לומד להרגיש איך חלקי הגוף שלו נעים בתגובה לחיזי ולכוונה." icon={confident}/>
  <Why title="חיזוק קצר עצבי" description="העיסוי יוצר קשרים עצביים בין חלקי הגוף הגורמים לו לשלוח ולקבל אותות מהאזורים השונים בגוף. זה מחזק את התקשורת בין המוח לשרירים, המפרקים והגידים מה שמגביר את התחושה של התינוק לגבי גופו." icon={memory}/>
  </div>
  <div className={styles.row}>
<Why title="מודעות הגוף" description="במבט עדין ומעמיק ובתנועה המדויקת על חלקי גוף שונים, העיסוי עוזר לחזק את הקשרים את המרידיאנים, תעלות הולכה והעברת תנועה, בעזרת תנועת תנועה. התינוק מתחיל להזיז את חלקי הגוף שלו ומרגיש בהם יותר ויותר." icon={brain}/>
  <Why title="השתתפות רגשית ופיזית" description="עיסוי תינוקות מספק חוויה תחושתית שעוזרת שהילד/ת התנסות רגשית עם תחושות רגשיות כמו אהבה וביטחון מההורה. זה מאפשר לתינוק להתמקד בתחושות ולהבין יותר טוב את הגבולות הגוף לשינויים בסביבה." icon={sharp}/>
  </div>
  <div className={styles.row}>
<Why title="חיזוק יכולת התחושה והמגע" description="המגע המתקבל דרך העיסוי מספק תחושות ביטחון ויציבות. תינוקות זקוקים למגע בטוח כדי להשלים את ההתפתחות המערכתית התחושתית והתחושה של יכולות הגוף שלו.
העיסוי מגביר את התחושה, ההכרה והמודעות הכוללת של גוף התינוק, דבר שמסייע להתפתחות רגשית, סנסומוטורית, קוגניטיבית ורגשית." icon={brain}/>
  </div>
  <Button text="לחצ/י כאן לעוד פרטים"/>
    </>
}
export default SecondScreen