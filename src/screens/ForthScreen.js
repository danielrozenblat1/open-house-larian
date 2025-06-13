import { Player } from "@lordicon/react"
import Button from "../components/button/Button"
import gift from "../Icons/wired-lineal-412-gift-hover-squeeze.json"
import styles from "./ForthScreen.module.css"
import { useEffect,useRef } from "react"


const ForthScreen=()=>{
   
    const handleComplete = () => {
        setTimeout(() => {
          playerRef?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
    
      const playerRef = useRef(null);
    
      useEffect(() => {
        playerRef?.current?.playFromBeginning();
      }, [])
return <>
<div className={styles.title}>מתנה ממני אלייך</div>
<div className={styles.icon}><Player icon={gift} ref={playerRef} size="30%" loop={true} onComplete={handleComplete}></Player></div>
<div className={styles.more}>הענקת שובר מתנה לסדנא שלי או למפגש פרטני אצלי בקליניקה זו הזדמנות להתייעץ איתי בכל נושא בתחום הדרכת הורים, ליווי התפתחותי, גמילה, ייעוץ שינה ועיסוי תינוקות</div>
{/* <div className={styles.row}>
<Shape title="עיסוי תינוקות" description="שירגיע את התינוק, יחזק את הקשר ביניכם ויתרום להתפתחות הפיזית והרגשית."/>
<Shape title="הדרכת הורים בגישת אדלר" description=" שתעניק לכם כלים לתקשורת חיובית, בניית ביטחון עצמי והבנה עמוקה יותר של עולמו של התינוק."/>
<Shape title="עידוד שלבי התפתחות" description=" כולל עידוד שפה, משחקים מונטסוריים וסנסומוטוריים שמותאמים לגיל התינוק שלכם וילמדו אותם דרך התנסות וחקירה."/>

</div> */}
<div className={styles.more}>המפגשים שלנו מחולקים לפי קבוצות גיל, כדי לאפשר התאמה מדויקת לשלב ההתפתחותי של התינוק:</div>
{/* <StyledButton text="לידה - 3 חודשים" message="היי לריאן, הילד/ה שלי נולד/ה / עד גיל 3 חודשים ואני רוצה לשמוע עוד על.." />
<StyledButton text="3-6 חודשים" message="היי לריאן, הילד/ה שלי בן/בת 3-6 חודשים ואני רוצה לשמוע עוד על.." /> */}
<Button text="לריאן, בואי נדבר!"/>
</>
}
export default ForthScreen