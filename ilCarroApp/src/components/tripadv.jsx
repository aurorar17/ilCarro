import React, { useEffect } from "react";
import "../styles/tripadv.css";

const TripAdv = () => {
  useEffect(() => {
    // Carica gli script di TripAdvisor dopo che il DOM è pronto
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src =
      "https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=953&locationId=1884475&lang=it&year=2013&display_version=2";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.async = true;
    script2.src =
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=833&locationId=1884475&lang=it&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2";
    document.body.appendChild(script2);
  }, []);

  return (
    <section className="tripAdv-container">
      <div
        id="TA_certificateOfExcellence418"
        className="TA_certificateOfExcellence"
      >
        <h3 className="tripAdv-title">Certificato di Eccellenza 2013</h3>
        <ul id="6AJvgq3zP6" className="TA_links AIKZHD89Po">
          <li id="JFzmFIn8fZpL" className="2pQI3OdDb">
            <a
              target="_blank"
              href="https://www.tripadvisor.it/Restaurant_Review-g194710-d1884475-Reviews-Ristorante_Il_Carro-Caorle_Veneto.html"
              rel="noreferrer"
            >
              <img
                src="https://www.tripadvisor.it/img/cdsi/img2/awards/v2/coe-14348-2.png"
                alt="TripAdvisor"
                className="widCOEImg"
                id="CDSWIDCOELOGO"
              />
            </a>
          </li>
        </ul>
      </div>

      <div id="TA_selfserveprop833" className="TA_selfserveprop">
        <h4 className="tripAdv-title">Leggi cosa dicono di noi:</h4>
        <ul id="tSdh08n" className="TA_links sFwqhTNjw">
          <li id="pn6FWvsCPtv" className="rdKccqyLlMn8">
            <a
              target="_blank"
              href="https://www.tripadvisor.it/Restaurant_Review-g194710-d1884475-Reviews-Ristorante_Il_Carro-Caorle_Veneto.html"
              rel="noreferrer"
            >
              <img
                src="https://www.tripadvisor.it/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TripAdv;
