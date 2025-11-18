const MenuSection = () => {
  return (
    <section>
      <h2>Visita il nostro Menù</h2>
      <div>
        {[...Array(5)].map((_, index) => (
          <img key={index} src="" alt="" />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
