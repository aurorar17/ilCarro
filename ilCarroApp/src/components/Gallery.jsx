import React, { useState } from "react";
// import "../styles/main-section.css";
import "../styles/gallery.css";
import "../styles/main.css";

const images = [
  "/assets/pesce1.JPG",
  "/assets/pesce2.JPG",
  "/assets/pesce3.JPG",
  "/assets/desert.JPG",
  "/assets/desert2.JPG",
  "/assets/foto-staff.JPG",
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery">
      <div className="gallery-header">
        {/* <h2>Galleria</h2> */}
        <p id="p-g-1">
          La cucina propone
          <span id="g-ita"> specialità di pesce</span> ispirate alla tradizione
          veneta reinterpretate con accostamenti raffinati
        </p>

        <p id="p-g-2">
          Il nostro fiore all’occhiello è una ricercata selezione di frutti di
          mare, serviti crudi per esaltarne{" "}
          <span id="g-ita"> freschezza e sapore autentico</span>
        </p>
      </div>
      <div className="gallery-container">
        <button className="gallery-btn-prev" onClick={prevImage}>
          ←
        </button>
        <img
          src={images[current]}
          alt={`Gallery ${current + 1}`}
          className="gallery-img"
        />
        <button className="gallery-btn-next" onClick={nextImage}>
          →
        </button>
      </div>
    </section>
  );
};

export default Gallery;
