import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from 'react-router-dom';
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

  // פונקציה להתמודדות עם מעבר לדף חדש
  const handleNavigation = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // פונקציה להתמודדות עם scroll
  const handleScrollClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const menuItems = [
    { text: 'הדרכת הורים', to:'הדרכת הורים', type: 'scroll' },
    { text: 'ייעוץ שינה', to:'ייעוץ שינה', type: 'scroll' },
    { text: 'ליווי התפתחותי', to:'ליווי התפתחותי', type: 'scroll' },
    { text: 'ייעוץ גמילה', to:'ייעוץ גמילה', type: 'scroll' },
    { text: 'לדף הסדנאות', to: '/workshops', type: 'route' },
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
                  onClick={handleScrollClick}
                  className={styles.mobileMenuItem}
                >
                  {item.text}
                </ScrollLink>
              ) : (
                <NavLink 
                  key={index}
                  to={item.to}
                  onClick={handleNavigation}
                  className={styles.mobileMenuItem}
                >
                  {item.text}
                </NavLink>
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
                to={item.to}
                smooth={true} 
                offset={-100}
                duration={500}
                className={styles.menuItem}
              >
                {item.text}
              </ScrollLink>
            ) : (
              <NavLink 
                key={index}
                to={item.to}
                className={styles.routeLink}
                onClick={handleNavigation}
              >
                {item.text}
              </NavLink>
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