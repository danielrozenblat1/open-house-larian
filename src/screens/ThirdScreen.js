import styles from "./ThirdScreen.module.css"

import LessonBubble from "../components/steps/Step"
import MinimalistBox from "../components/house/House"
const ThirdScreen=()=>{

return <>
<div className={styles.description}>סביבה של הורים נוספים עם ילדים בני אותו גיל שתקנה לך:</div>
<div className={styles.row}>
<MinimalistBox title="תמיכה רגשית" description="להיות הורה לתינוקות זה תהליך מלא באתגרים, ושיתוף החוויות עם הורים אחרים באותו שלב יכול לספק תמיכה רגשית משמעותית. הידיעה שיש עוד הורים שמתמודדים עם חוויות דומות יכולה להקל על תחושת הבדידות ולחזק את תחושת השייכות."/>
<MinimalistBox title="למידה הדדית" description="אינטראקציה עם הורים לתינוקות בני אותו גיל מאפשרת חילופי ידע, עצות וטיפים מעשיים. כל הורה יכול לשתף שיטות שעבדו עבורו או להתמודד עם קשיים, וההבנה שכולם חווים אתגרים דומים יכולה לעודד ולתת פרספקטיבות חדשות."/>
<MinimalistBox title="השוואה בריאה" description="כשאתם פוגשים הורים נוספים לתינוקות בני אותו גיל, אתם יכולים להבין טוב יותר אם ההתפתחות של ילדכם נורמלית או אם יש משהו שמצריך תשומת לב נוספת. אף על פי שכל תינוק מתפתח בקצב שלו, זה מרגיע לראות את הדמיון וההבדלים בהתקדמות של ילדים באותו טווח גילאים."/>
</div>
<div className={styles.row}>
<MinimalistBox title="פיתוח רשת חברתית" description=" קבוצות הורים מספקות הזדמנות לבנות רשת חברתית הן להורים והן לילדים. הקשרים שנוצרים במפגשים אלה יכולים להתפתח לחברויות ארוכות טווח, שמועילות הן להורים (כתמיכה ושיתוף) והן לילדים (ללמידה חברתית ולמשחק משותף)."/>
<MinimalistBox title="סביבה תומכת" description=" הורים הנמצאים בסביבה עם אחרים הנמצאים באותו שלב בחיים יכולים להרגיש יותר מובנים ומקובלים. כולם מכירים את הקשיים והאתגרים של גידול תינוקות, מה שיוצר אווירה פחות שיפוטית ויותר מכילה, שבה אפשר לדבר בחופשיות על חוויות חיוביות וקשות כאחד."/>
<MinimalistBox title="פיתוח כישורי הורות" description="דרך התצפית על הורים אחרים ודרך האינטראקציה איתם, הורים יכולים ללמוד דרכים חדשות לגשת לסיטואציות הוריות שונות."/>
</div>

</>


}
export default ThirdScreen