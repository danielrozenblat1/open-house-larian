import Button from "../components/button/Button"
import StyledButton from "../components/button/ButtonNew"
import Shape from "../components/shape/Shape"
import styles from "./ForthScreen.module.css"


const ForthScreen=()=>{
   

return <>
<div className={styles.title}>מתנה ממני אלייך</div>
<div className={styles.more}>בסדנה תקבלו הזדמנות להתייעץ איתי בכל נושא בתחום הדרכת הורים,ליווי התפתחותי,מילה,ייעוץ שינה ועיסוי תינוקות</div>
{/* <div className={styles.row}>
<Shape title="עיסוי תינוקות" description="שירגיע את התינוק, יחזק את הקשר ביניכם ויתרום להתפתחות הפיזית והרגשית."/>
<Shape title="הדרכת הורים בגישת אדלר" description=" שתעניק לכם כלים לתקשורת חיובית, בניית ביטחון עצמי והבנה עמוקה יותר של עולמו של התינוק."/>
<Shape title="עידוד שלבי התפתחות" description=" כולל עידוד שפה, משחקים מונטסוריים וסנסומוטוריים שמותאמים לגיל התינוק שלכם וילמדו אותם דרך התנסות וחקירה."/>

</div> */}
<div className={styles.more}>המפגשים שלנו מחולקים לפי קבוצות גיל, כדי לאפשר התאמה מדויקת לשלב ההתפתחותי של התינוק:</div>
{/* <StyledButton text="לידה - 3 חודשים" message="היי לריאן, הילד/ה שלי נולד/ה / עד גיל 3 חודשים ואני רוצה לשמוע עוד על.." />
<StyledButton text="3-6 חודשים" message="היי לריאן, הילד/ה שלי בן/בת 3-6 חודשים ואני רוצה לשמוע עוד על.." /> */}

</>
}
export default ForthScreen