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
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const prevPage = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = current * imagesPerPage;
  const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

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
          Il nostro fiore all'occhiello è una ricercata selezione di frutti di
          mare, serviti crudi per esaltarne{" "}
          <span id="g-ita"> freschezza e sapore autentico</span>
        </p>
      </div>
      <div className="gallery-wrapper">
        <button className="gallery-btn-prev" onClick={prevPage}>
          ←
        </button>
        <div className="gallery-container">
          {displayedImages.map((img, index) => (
            <div key={startIndex + index} className="gallery-item">
              <img src={img} alt={`Gallery ${startIndex + index + 1}`} />
            </div>
          ))}
        </div>
        <button className="gallery-btn-next" onClick={nextPage}>
          →
        </button>
      </div>
    </section>
  );
};

export default Gallery;
