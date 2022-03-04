import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left">
          <img src="/assets/man.png" alt="" />
        </div>
        <div className="about__right">
          <div className="about__right__heading">
            <h1 className="special">We are a high-level </h1>
            <h1>data storage bank</h1>
          </div>
          <div className="about__right__para">
            <p>
              The place to store various data that you can access at any time
              through the internet and where you can carry it.
              <p>
                This very flexible storage area has a high level of security. To
                enter into your own data you must enter the password that you
                created when you registered in this Data Warehouse.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
