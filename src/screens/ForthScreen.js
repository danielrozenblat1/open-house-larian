import Button from "../components/button/Button"
import StyledButton from "../components/button/ButtonNew"
import Shape from "../components/shape/Shape"
import styles from "./ForthScreen.module.css"


const ForthScreen=()=>{
   

return <>
<div className={styles.title}>לריאן, ספרי לנו מה מצפה לנו במפגשים..</div>
<div className={styles.more}>במהלך המפגשים שלנו, אתם והתינוקות תיהנו מחוויות משותפות מלאות הנאה ולמידה, ותצאו עם כלים שיסייעו לכם בתהליך ההורות:</div>
<div className={styles.row}>
<Shape title="עיסוי תינוקות" description="שירגיע את התינוק, יחזק את הקשר ביניכם ויתרום להתפתחות הפיזית והרגשית."/>
<Shape title="הדרכת הורים בגישת אדלר" description=" שתעניק לכם כלים לתקשורת חיובית, בניית ביטחון עצמי והבנה עמוקה יותר של עולמו של התינוק."/>
<Shape title="עידוד שלבי התפתחות" description=" כולל עידוד שפה, משחקים מונטסוריים וסנסומוטוריים שמותאמים לגיל התינוק שלכם וילמדו אותם דרך התנסות וחקירה."/>

</div>
<div className={styles.more}>המפגשים שלנו מחולקים לפי קבוצות גיל, כדי לאפשר התאמה מדויקת לשלב ההתפתחותי של התינוק:</div>
<StyledButton text="4-6 חודשים" message="היי לריאן, הילד/ה שלי בן/בת 4-6 חודשים ואני רוצה לשמוע עוד על.." />
<StyledButton text="6-12 חודשים" message="היי לריאן, הילד/ה שלי בן/בת 6-12 חודשים ואני רוצה לשמוע עוד על.." />
<StyledButton text="12-18 חודשים" message="היי לריאן, הילד/ה שלי בן/בת 12-18 חודשים ואני רוצה לשמוע עוד על.." />
</>
}
export default ForthScreen