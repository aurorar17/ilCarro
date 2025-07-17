import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <nav className="footer-nav">
          <h4>Contacts</h4>
          <ul>
            <li>Email</li>
            <li>Telefono</li>
          </ul>
          <h4>Social Media</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
          <h4>Orari</h4>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
