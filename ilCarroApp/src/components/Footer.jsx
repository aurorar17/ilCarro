import React from "react";
import "../styles/footer.css";
import "../styles/main.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <nav className="footer-nav">
          <h4>Contatti</h4>
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
          <section class="link-utili-section">
            <h4>Link Utili</h4>
            <ul class="link-utili">
              <li>
                <a href="https://www.facebook.com/ilCarro.Caorle">
                  Pagina Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ristorante_ilcarro/">
                  Pagina Instagram
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/nXhAHvMCkuNSNdkR8">
                  Indicazioni
                </a>
              </li>
              <li>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g194710-d1884475-Reviews-Ristorante_Il_Carro-Caorle_Veneto.html">
                  Recensioni Trip Advisor
                </a>
              </li>
            </ul>
          </section>
          <h4>Orari</h4>
          <table id="orari-tab">
            <tr>
              <th>Giorni</th>
              <th>Orari</th>
            </tr>
            <tr>
              <td>Lunedi</td>
              <td>CHIUSO</td>
            </tr>
            <tr>
              <td>Martedì</td>
              <td>11-22:30 / 11-00:30</td>
            </tr>
            <tr>
              <td>Mercoledì</td>
              <td>11-22:30 / 11-00:30</td>
            </tr>
            <tr>
              <td>Giovedì</td>
              <td>11-22:30 / 11-00:30</td>
            </tr>
            <tr>
              <td>Venerdì</td>
              <td>11-22:30 / 11-00:30</td>
            </tr>
            <tr>
              <td>Sabato</td>
              <td>11-22:30 / 11-00:30</td>
            </tr>
            <tr>
              <td>Domenica</td>
              <td>11-22:30 / 11-00:30</td>
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
