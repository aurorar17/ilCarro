import React from "react";
import "../styles/footer.css";
import "../styles/main.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <nav className="footer-nav">
          {/* <h4>Contatti</h4> */}
          <table class="contact-table">
            <tr>
              <th>Email:</th>
            </tr>
            <tr>
              <td>ristoranteilcarro.dunaverde@gmail.com</td>
            </tr>

            <tr>
              <th>Telefono:</th>
            </tr>
            <tr>
              <td>+39 0421 299478</td>
            </tr>

            <tr>
              <th>Indirizzo:</th>
            </tr>
            <tr>
              <td>viale Selva Rosata 30, Caorle, Italia</td>
            </tr>
          </table>
          <section className="link-utili-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.9626482072727!2d12.797174375866899!3d45.57118972629438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bfa0115fab351%3A0x825bfdb00e744ede!2sRistorante%20Il%20Carro!5e0!3m2!1sen!2sit!4v1769079276204!5m2!1sen!2sit"
              className="map-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
          {/* <h4>Orari</h4> */}
          <table id="orari-tab">
            <tr>
              <th>Giorni</th>
              <th>Orari</th>
            </tr>
            <tr>
              <td id="th-1">Lunedi</td>
              <td>12:00 - 14:30</td>
            </tr>
            <tr>
              <td id="th-1">Martedì</td>
              <td>CHIUSO</td>
            </tr>
            <tr>
              <td id="th-1">Mercoledì</td>
              <td>12:00 - 14:30</td>
            </tr>
            <tr>
              <td id="th-1">Giovedì</td>
              <td>12:00 - 14:30</td>
            </tr>
            <tr>
              <td id="th-1">Venerdì</td>
              <td>12:30 - 14:30 / 18:30 - 23:30</td>
            </tr>
            <tr>
              <td id="th-1">Sabato</td>
              <td>12:30 - 14:30 / 18:30 - 23:30</td>
            </tr>
            <tr>
              <td id="th-1">Domenica</td>
              <td>12:30 - 14:30</td>
            </tr>
          </table>
        </nav>
        <section class="footer-logo-section">
          <img src="/assets/logodef.png" alt="Logo" class="no-responsive" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
