import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe__container">
      <div className="subscribe">
        <h1>Subscribe !</h1>
        <span>Join our newsletter to never miss any latest news.</span>
      </div>
      <div className="subscribe__mail">
        <input type="email" placeholder="Enter your e-mail address here" />
        <button className="subscribe__button">Join Us</button>
      </div>
    </div>
  );
};

export default Subscribe;
