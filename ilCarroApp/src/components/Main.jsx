import React from "react";
import Gallery from "./Gallery";

import "../styles/main-section.css";

const Main = () => {
  return (
    <section>
      <div className="main">
        <div className="main-cover-sfondo">
          <div className="sfondo-main">
            <h1>Vieni a scoprire le nostre specialità di pesce</h1>
            <h2>con prodotti di stagione e locali!</h2>
            <button className="main-button">Click here to see the MENU</button>
          </div>
        </div>
      </div>
      <div className="main-1">
        <p>
          Dal 1975, offriamo piatti di pesce e carne preparati con ingredienti
          freschi, locali e di prima qualità.
        </p>
      </div>
      <div>
        <Gallery />
      </div>
    </section>
  );
};

export default Main;
