import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="header">
      <nav className="header-nav-1">
        <ul>
          {/* <li>
            <img src="/assets/foto-header2.png" alt="Logo" />
          </li> */}
        </ul>
        {/* <ul>
          <img src="/assets/foto-header1.png" alt="Logo" />
        </ul> */}
      </nav>
      <nav className={`header-nav-2 ${isFixed ? "fixed" : ""}`}>
        <ul className="header-nav-2-list">
          <li>
            <img src="/assets/Facebook.png" alt="Facebook" />
          </li>
          <li>
            <img src="/assets/Instagram.png" alt="Instagram" />
          </li>
          <li>
            <img src="/assets/Phone.png" alt="Telefono" />
          </li>
          <li>
            <img src="/assets/Mail.png" alt="Mail" />
          </li>
        </ul>
        <div className="menu">
          <a href="menu">Download MENU</a>
          <img src="/assets/menu.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
