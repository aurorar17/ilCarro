import React, { useState } from "react";
import "../styles/main-section.css";

const images = [
  "/assets/pesce1.JPG",
  "/assets/pesce2.JPG",
  "/assets/pesce3.JPG",
  "/assets/desert.JPG",
  "/assets/desert2.JPG",
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
        <h2>Gallery</h2>
        <p>Scopri i nostri piatti attraverso la nostra galleria fotografica</p>
      </div>
      <div className="gallery-container">
        <button onClick={prevImage}>←</button>
        <img
          src={images[current]}
          alt={`Gallery ${current + 1}`}
          className="gallery-img"
        />
        <button onClick={nextImage}>→</button>
      </div>
    </section>
  );
};

export default Gallery;
