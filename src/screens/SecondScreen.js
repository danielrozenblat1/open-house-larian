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
<div className={styles.description}>עיסוי תינוקות הוא אחד הכלים המשמעותיים ביותר לעידוד התפתחות ואף לחיזוק המערכת החיסונית, הקלה והטבה במצבים של בכאבי בטן, גזים, עצירויות, צינון, גודש ולחה.
עיסוי תינוקות ממלא תפקיד משמעותי ברמה ההתפתחותי במספר היבטים</div>
<div className={styles.row}>
<Why title="קואורדינציה ותנועה" description="דרך העיסוי התינוק חווה תנועות פאסיביות שמתבצעות באופן יזום ומכוון על ידי ההורה, מה שמוביל לשיפור התנועות ושליטה עליהן בהמשך . התינוק לומד להרגיש איך חלקי הגוף שלו נעים בתגובה ללחץ ולכוונה." icon={confident}/>
  <Why title="חיזוק קשר עצבי" description="העיסוי יוצר קשרים עצביים בין חלקי הגוף למוח הגורמים לו לשלוח ולקבל אותות מהאזורים השונים בגוף. זה מחזק את התקשורת בין המוח לשרירים, המפרקים והגידים מה שמגביר את התחושה של התינוק לגבי גופו." icon={memory}/>
  </div>
  <div className={styles.row}>
<Why title="מודעות הגוף" description="במגע עדין ועמוק ובתנועה ממוקדת של חלקי הגוף, העיסוי עוזר לתינוק להבין את הקשרים בין חלקי הגוף השונים. בעזרת העיסוי, התינוק מתחיל לזהות את חלקי גופו ואת מקומם ביחס לעצמם, ביחס לעצמו וביחס למרחב." icon={brain}/>
<Why title="שינה איכותית והכוח המרפא" description="העיסוי הוא כלי אדיר להורים ההופך את נושא השינה לפשוט וקל. ההרדמויות הופכות להיות קלות, נוחות, מהירות ואיכות השינה הופכת להיות טובה יותר לאורך זמן. באמצעות העיסוי ההורה יכול לסייע ולהקל על התינוק במצבים בריאותיים שונים כגון: כאבי בטן, גזים, עצירות, צינון, שיעול, גודש, ליחה וחיזוק המערכת החיסונית. " icon={target}/>
  </div>

  <Button text="לחצ/י כאן לעוד פרטים"/>
    </>
}
export default SecondScreen