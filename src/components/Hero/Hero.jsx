import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__heading">
          <h1>Save your data</h1>
          <h1>storage here.</h1>
        </div>
        <p>
          Insignia is a data storage area that has been tested for security, so
          you can store your data here safely but not be afraid of being stolen
          by others.
        </p>
        <button>Learn more</button>
      </div>
      <div className="hero__right">
        <img src="/assets/grid.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
