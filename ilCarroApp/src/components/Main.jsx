import React from "react";
import Gallery from "./Gallery";

import "../styles/main-section.css";
import TripAdv from "./tripadv";

const Main = () => {
  return (
    <section>
      <div className="main">
        <div className="main-cover-sfondo">
          <div className="sfondo-main">
            <h1>
              Vieni a scoprire le nostre{" "}
              <span id="sottolineatura">specialità di pesce</span>
            </h1>
            <h2>con prodotti locali e di stagione!</h2>
            <button className="main-button">Scarica il nostro menù</button>
          </div>
        </div>
      </div>
      <div className="main-1">
        {/* <p>
          Dal 1975, offriamo piatti di pesce e carne preparati con ingredienti
          freschi, locali e di prima qualità.
        </p> */}
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <TripAdv />
      </div>
    </section>
  );
};

export default Main;
