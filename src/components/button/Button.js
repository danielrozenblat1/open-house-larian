import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, message,}) => {

    const handleClick = () => {
        const phoneNumber = "+972544596735";
        // Set the message content
        const messageContent = message || "היי לריאן, אני רוצה לשמוע ממך עוד על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };
  return (
    <div className={styles.buttonWrapper}>
      <button   className={styles.button}  onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;