import { useEffect, useState } from 'react';

import MobileMenu from './MobileMenu';
import Navbar from './Navbar';

export default function Layout({ children, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authenicatedState = props.authenicatedState;

  console.log(authenicatedState);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // MINIMISING DROPDOWN MENU IN MEDIUM SCREENS
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        console.log('closing!');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggleMenu={toggleMenu} authenicatedState={authenicatedState} />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        authenicatedState={authenicatedState}
      />
      <main>{children}</main>
    </>
  );
}
