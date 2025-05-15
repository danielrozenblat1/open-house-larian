import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from '../../images/לריאן זוסמן לוגו.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972544596735";
    const message ="היי לריאן ,אני רוצה לשמוע עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const menuItems = [
    { text: 'מי אני', to: 'מי אני', type: 'scroll' },
    { text: 'סוגי הסדנאות', to: 'סוגי הסדנאות', type: 'scroll' },
    { text: 'BABY . LOVE תוכן', to: 'BABY . LOVE תוכן', type: 'scroll' },
    { text: 'שובר מתנה', to: 'סוגי הסדנאות', type: 'scroll' },
    { text: 'לדף השירותים שלי', to: '/שירותים', type: 'link' }, // הוספת עמודה חדשה
  ];

  return (
    <nav className={styles.navbar}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      {(isMenuOpen || isClosing) && windowWidth <= 850 && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              item.type === 'scroll' ? (
                <ScrollLink 
                  key={index} 
                  to={item.to}
                  smooth={true} 
                  offset={-100}
                  duration={700} 
                  onClick={toggleMenu}
                  className={styles.mobileMenuItem}
                >
                  {item.text}
                </ScrollLink>
              ) : (
                <a 
                  key={index}
                  href={item.to}
                  onClick={toggleMenu}
                  className={styles.mobileMenuItem}
                >
                  {item.text}
                </a>
              )
            ))}
            <div className={styles.center}>
              <img className={styles.image} src={logo} alt="לריאן ויוגב לוגו"/>
            </div>
          </div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            item.type === 'scroll' ? (
              <ScrollLink 
                key={index} 
                offset={-100}
                to={item.to}
                smooth={true} 
                duration={500}
              >
                {item.text}
              </ScrollLink>
            ) : (
              <a 
                key={index}
                href={item.to}
                className={styles.routeLink}
              >
                {item.text}
              </a>
            )
          ))}
        </div>
      )}
      {windowWidth > 1050 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/momy.of_love/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleClick}><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;