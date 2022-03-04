import "./features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features__container">
        <div className="features__heading">
          <h1>Features</h1>
        </div>
        <div className="features__box__container">
          <div className="features__box">
            <div className="features__box__image">
              <img src="/assets/clip.png" alt="" />
            </div>
            <div className="features__box__content">
              <div className="features__box__heading">
                <h1>Search Data</h1>
              </div>
              <div className="features__box__paragraph">
                <p>
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
              </div>
              <div className="features__box__extra">
                <div className="features__box__direction">Learn more</div>
                <span className="features__box__arrow">
                  <img src="/assets/arrow.png" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="features__box">
            <div className="features__box__image">
              <img src="/assets/printer.png" alt="" />
            </div>
            <div className="features__box__content">
              <div className="features__box__heading">
                <h1>Print Out</h1>
              </div>
              <div className="features__box__paragraph">
                <p>
                  Print out service gives you
                  <p>
                    convenience if someday you need print data, just edit it all
                    and just print it.
                  </p>
                </p>
              </div>
              <div className="features__box__extra">
                <div className="features__box__direction">Learn more</div>
                <span className="features__box__arrow">
                  <img src="/assets/arrow.png" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="features__box">
            <div className="features__box__image">
              <img src="/assets/shield.png" alt="" />
            </div>
            <div className="features__box__content">
              <div className="features__box__heading">
                <h1>Security Code</h1>
              </div>
              <div className="features__box__paragraph">
                <p>Data Security is one of our best</p>
                <p>
                  facilities. Allows for your files to be safer. The file can be
                  secured with a code or password that you created, so only you
                  can open the file.
                </p>
              </div>
              <div className="features__box__extra">
                <div className="features__box__direction">Learn more</div>
                <span className="features__box__arrow">
                  <img src="/assets/arrow.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="features__dots">
          <img src="/assets/ldot.png" alt="" />
          <img src="/assets/sdot.png" alt="" />
        </div> */}
      </div>
      <div className="extra__styles">
        <div className="extra__dots"></div>
        <div className="extra__arrows"></div>
      </div>
    </div>
  );
};

export default Features;
