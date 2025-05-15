import React, { useRef, useEffect, useState } from 'react';
import styles from "./FirstScreenServices.module.css";
import { ChevronDown } from 'lucide-react';


const FirstScreenServices = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const topLeftImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const centerImageRef = useRef(null);

  useEffect(() => {
    const imageRefs = [topLeftImageRef, topRightImageRef, centerImageRef];
    let loadedCount = 0;

    const checkImageLoaded = (ref) => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);
        const backgroundImage = computedStyle.backgroundImage;

        if (backgroundImage && backgroundImage !== 'none') {
          const img = new Image();
          img.src = backgroundImage.slice(4, -1).replace(/["']/g, "");

          if (img.complete) {
            loadedCount++;
          } else {
            img.onload = () => {
              loadedCount++;
              if (loadedCount === imageRefs.length) {
                setImagesLoaded(true);
              }
            };
            img.onerror = () => {
              loadedCount++;
              if (loadedCount === imageRefs.length) {
                setImagesLoaded(true);
              }
            };
          }
        } else {
          loadedCount++;
        }
      } else {
        loadedCount++;
      }

      if (loadedCount === imageRefs.length) {
        setImagesLoaded(true);
      }
    };

    imageRefs.forEach(checkImageLoaded);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (topLeftImageRef.current && topRightImageRef.current) {
        topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.1}px)`;
        topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesLoaded]);

//   if (!imagesLoaded) {
//     return <Loader />;
//   }

  return <>
     
    <div className={styles.container}>
      <div className={styles.explainContainer}>
        <div className={styles.imageContainer}>
          {/* <div ref={topLeftImageRef} className={styles.topLeftImage}></div> 
          <div ref={topRightImageRef} className={styles.topRightImage}></div>*/}
          <div ref={centerImageRef} className={styles.centerImage}></div>
        </div>
        <div className={styles.explain}>
          אם אתם כאן
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>סימן שאתם מעוניינים לשמוע קצת יותר על</div>
          <div className={styles.description}>השירותים שלי</div>
        </div>
      </div>
    
    </div>
    </>
};

export default FirstScreenServices;