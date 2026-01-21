import React, { useState, useEffect } from "react";
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
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/2.png",
  "/assets/3.png",
];

const getImagesPerPage = () => (window.innerWidth < 600 ? 1 : 3);

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage());

  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth < 600 ? 1 : 3);
      setCurrent(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImages = () => {
    setCurrent((prev) =>
      prev + imagesPerPage >= images.length ? 0 : prev + imagesPerPage,
    );
  };

  const prevImages = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - imagesPerPage : prev - imagesPerPage,
    );
  };

  const visibleImages = images.slice(current, current + imagesPerPage);

  const emptySlots = imagesPerPage - visibleImages.length;

  return (
    <section className="gallery">
      <div className="gallery-header">
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
        <button className="gallery-btn" onClick={prevImages}>
          ←
        </button>

        <div className="gallery-grid">
          {visibleImages.map((img, index) => (
            <div className="gallery-item" key={`img-${index}`}>
              <img
                src={img}
                alt={`Gallery ${current + index + 1}`}
                className="gallery-img"
              />
            </div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div className="gallery-item placeholder" key={`empty-${i}`} />
          ))}
        </div>

        <button className="gallery-btn" onClick={nextImages}>
          →
        </button>
      </div>
    </section>
  );
};

export default Gallery;
