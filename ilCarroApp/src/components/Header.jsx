import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ isMenuPage }) => {
  return (
    <header className="header">
      <nav className="header-nav-1">
        <ul>
          <li>
            <img
              src="/assets/logodef.png"
              alt="Logo"
              className="no-responsive"
            />
          </li>
          <li id="menu-2">
            <Link to="/menu">
              Visita il menù
              <img src="/assets/menu.png" alt="" />
            </Link>
          </li>
        </ul>
      </nav>

      <section className="fixed-mobile-section">
        <div className="menu">
          <Link to="/menu">
            <a href="menu">
              {isMenuPage ? "Choose the language:" : "Visita il menù"}
            </a>
            {isMenuPage ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                  marginTop: "8px",
                }}
              >
                <Link to="/menu-en">
                  <img
                    src="/assets/GB.png"
                    alt="English"
                    style={{ width: 40, height: 30 }}
                  />
                </Link>
                <Link to="/menu-de">
                  <img
                    src="/assets/DE.png"
                    alt="German"
                    style={{ width: 40, height: 30 }}
                  />
                </Link>
              </span>
            ) : (
              <img src="/assets/menu.png" alt="" />
            )}
          </Link>
        </div>
        <span></span>
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
