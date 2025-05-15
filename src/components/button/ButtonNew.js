import React from 'react';
import styles from './ButtonNew.module.css';

const StyledButton = ({ text, message }) => {
  const handleClick = () => {
    const phoneNumber = "+972544596735";
    // Set the message content
    const finalMessage = message || "היי לריאן ויוגב ,אני רוצה לשמוע ממכם עוד על..";
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(finalMessage);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.shape} onClick={handleClick}>
        <span className={styles.buttonText}>{text || "שלח הודעה"}</span>
      </button>
    </div>
  );
};

export default StyledButton;