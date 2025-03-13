import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav-1">
        <ul>
          <li>
            <img src="/assets/IlCarro-logo2.jpeg" alt="Logo" />
          </li>
        </ul>
        <ul className="header-nav-1-list">
          <li>
            <img src="/assets/Menu-button.png" alt="Menu" />
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
      </nav>
    </header>
  );
};

export default Header;
