const Map = () => {
  return (
    <section>
      <h3>Vieni a trovarci!</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
