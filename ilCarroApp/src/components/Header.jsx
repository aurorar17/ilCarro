import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
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
      <nav className={`header-nav-1 ${isHidden ? "hidden" : ""}`}>
        <ul>
          <li>
            <img src="/assets/IlCarro-logo2.jpeg" alt="Logo" />
          </li>
        </ul>
      </nav>
      <nav className="header-nav-2">
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
        <div class="menu">
          <a href="menu">Download MENU</a>
          <img src="/assets/menu.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
