import React, { useRef, useEffect } from 'react';
import styles from './Step.module.css';
import { Player } from '@lordicon/react';

const LessonBubble = ({ icon, title, description }) => {




  return (
    <div className={styles.bubble}>
  
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default LessonBubble;