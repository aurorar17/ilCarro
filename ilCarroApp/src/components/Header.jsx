import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav-1">
        <ul></ul>
        <ul>
          <img src="/assets/logodef.png" alt="Logo" class="no-responsive" />
        </ul>
      </nav>

      <section className="fixed-mobile-section">
        <div className="menu">
          <a href="menu">Scarica il menù</a>
          <img src="/assets/menu.png" alt="" />
        </div>
        <nav className="header-nav-2">
          <ul className="header-nav-2-list">
            <li>
              <a href="https://www.facebook.com/ilCarro.Caorle">
                <img src="/assets/Facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ristorante_ilcarro/">
                <img src="/assets/Instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="tel:+390421299478">
                <img src="/assets/Whatsapp.png" alt="Telefono" />
              </a>
            </li>
            <li>
              <a href="mailto:ristoranteilcarro.dunaverde@gmail.com">
                <img src="/assets/mail.png" alt="Email" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
