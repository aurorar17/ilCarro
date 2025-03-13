const Story = () => {
  return (
    <section>
      <h3>La nostra storia</h3>
      <div>
        {[...Array(5)].map((_, index) => (
          <img key={index} src="" alt="" />
        ))}
      </div>
      <p>Lorem ipsum dolor sit amet...</p>
    </section>
  );
};

export default Story;
