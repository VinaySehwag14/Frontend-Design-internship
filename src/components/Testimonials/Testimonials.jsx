import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__heading">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonials__profile__container">
          <div className="testimonials__profile">
            <div className="testimonials__profile__left">
              <img src="/assets/male.png" alt="" />
            </div>
            <div className="testimonials__profile__right">
              <h1>John Fang</h1>
              <div className="testimonials__profile__status">
                <span>Web Designer</span>
                <img src="/assets/loader.png" alt="" />
              </div>
              <p className="paragraph">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
          <div className="testimonials__profile">
            <div className="testimonials__profile__left">
              <img src="/assets/female.png" alt="" />
            </div>
            <div className="testimonials__profile__right">
              <h1>Jenny Doe</h1>
              <div className="testimonials__profile__status">
                <span>UX Designer</span>
                <img src="/assets/loader.png" alt="" />
              </div>
              <p className="paragraph">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
