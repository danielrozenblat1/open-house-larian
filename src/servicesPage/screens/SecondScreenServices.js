import React, { useEffect, useState, useRef } from 'react';
import { Check, Star, ChevronRight } from 'lucide-react';
import styles from './SecondScreenServices.module.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const [isHoveredStep, setIsHoveredStep] = useState(null);
  
  const pathRef = useRef(null);
  const timelineRef = useRef(null);
  const lastItemRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "ייעוץ ותיאום ציפיות",
      content: "בפגישות היכרות אנחנו נבין בדיוק מה אתם מחפשים ואיך אתם מדמיינים את הבית החדש שלכם וכמובן נתחיל להבין מה זה מצריך",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 2,
      title: "בדיקה מול המועצה/מול העירייה זכויות בנייה",
      content: "בדיקת זכויות הבנייה והאפשרויות העומדות בפנינו מול הרשויות.",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 3,
      title: "תכנית מדידה של הבית",
      content: "כדי שאבין את גבולות הבית ואת תחומי הפעולה שלי זה השלב שאני מקבלת את תכניות המדידה של הבית שלכם",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 4,
      title: "הגשת מדידה למועצה",
      content: "יש לנו עד חצי שנה להגיש למועצה את המדידה לאישור מדידה ולהתחיל בעבודה!",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 5,
      title: "סקיצה ראשונית",
      content: "אתם מקבלים ממני 3 סקיצות ראשוניות, בוחרים אחת ועוברים על התיקונים השינויים כדי שנדייק את התכנון",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 6,
      title: "מודל תלת מימד",
      content: "שלב שאני שמה דגש עליו! אתם מקבלים ממני מודל תלת מימדי של הבית שתוכלו לראות איך הוא נראה גם מבפנים",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 7,
      title: "הגשת גרמושקה",
      content: "מגישים גרמושקה למועצה/עיריה",
      icon: <Star className={styles.stepIcon} />
    },
    {
      number: 8,
      title: "תכניות עבודה",
      content: "מכינים תכניות לקבלן ,שולחים לו ומזל טוב! הבית שלכם קרוב מתמיד",
      icon: <Star className={styles.stepIcon} />
    }
  ];

  useEffect(() => {
    if (!timelineRef.current || !lastItemRef.current) return;
    
    const updateHeight = () => {
      const lastItemRect = lastItemRef.current.getBoundingClientRect();
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const newTotalHeight = lastItemRect.bottom - timelineRect.top;
      setTotalHeight(newTotalHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const generatePath = () => {
    if (!totalHeight) return '';
    
    const segments = steps.length - 1;
    const segmentHeight = totalHeight / segments;
    const controlPointOffset = 180;
    
    let d = `M 50 0`;
    
    for (let i = 0; i <= segments; i++) {
      const y = i * segmentHeight;
      const isEven = i % 2 === 0;
      const xOffset = isEven ? -controlPointOffset : controlPointOffset;
      const nextY = (i + 1) * segmentHeight;
      
      if (i < segments) {
        d += ` C ${50 + xOffset} ${y + segmentHeight * 0.3},` +
             ` ${50 + xOffset} ${y + segmentHeight * 0.7},` +
             ` ${50} ${nextY}`;
      }
    }
    
    return d;
  };

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [totalHeight]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineStart = timelineRect.top - viewportHeight;
      const timelineEnd = timelineRect.bottom;
      const totalScrollDistance = timelineEnd - timelineStart;
      const currentScroll = window.scrollY - timelineStart;
      
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      setScrollProgress(progress);

      const elements = timelineRef.current.getElementsByClassName(styles.timelineItem);
      Array.from(elements).forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const threshold = viewportHeight * 0.6;

        if (elementCenter < threshold && elementCenter > 0) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        מהתכנון ועד התוצאה ב-8 שלבים פשוטים..
      </h2>
      
      <div className={styles.timeline} ref={timelineRef}>
        <svg className={styles.journeyPath}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d={generatePath()}
            className={styles.progressBackground}
          />
          <path
            d={generatePath()}
            className={styles.progressPath}
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: pathLength - (pathLength * scrollProgress)
            }}
          />
        </svg>

        <div className={styles.timelineContent}>
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === steps.length - 1;
            const isVisible = visibleSteps.has(step.number);
            const isHovered = isHoveredStep === step.number;
            
            return (
              <div
                key={step.number}
                ref={isLast ? lastItemRef : null}
                className={`${styles.timelineItem} 
                  ${isVisible ? styles.visible : ''} 
                  ${isEven ? styles.right : styles.left}`}
                onMouseEnter={() => setIsHoveredStep(step.number)}
                onMouseLeave={() => setIsHoveredStep(null)}
              >
                <div className={`${styles.circle} 
                  ${isVisible ? styles.activeCircle : ''}
                  ${isHovered ? styles.hoveredCircle : ''}`}
                >
                  {isVisible && activeStep > step.number ? (
                    <Check className={styles.checkIcon} />
                  ) : (
                    <span className={styles.numberText}>{step.number}</span>
                  )}
                </div>

                <div className={`${styles.content} 
                  ${isHovered ? styles.hoveredContent : ''}`}
                >
                  <h3 className={styles.stepTitle}>
                    {step.icon}
                    {step.title}
                  </h3>
                  <p className={styles.stepText}>
                    {step.content}
                  </p>
                  {isHovered && (
                    <ChevronRight className={styles.hoverArrow} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;