import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__upper">
          <div className="footer__heading">
            <h1>Try for free!</h1>
            <span>Get limited 1 week free try our features!</span>
          </div>
          <div className="footer__buttons">
            <button>Learn more</button>
            <div className="footer__button__special">
              <div className="footer__special__button">
                <button>Request Demo</button>
              </div>
              <div className="footer__arrow">
                <img src="/assets/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container__lower">
          <div className="footer__container__lower_first">
            <div className="footer__container__lower_image">
              <img src="/assets/logo.png" alt="logo" />
              <h1>Insignia</h1>
            </div>
            <div className="footer__container__lower_para">
              <div className="footer__container__para">
                <p>Insignia Society,234</p>
                <p>Bahagia Ave Street PRW29281</p>
              </div>
              <div className="footer__container__contact">
                <p>info@insignia.com</p>
                <p>1-232-3434 (Main)</p>
              </div>
            </div>
          </div>
          <div className="footer__container__lower_second">
            <div className="footer__container__lower__sec_container">
              <h1>About</h1>
              <h2>Profile</h2>
              <h2>Features</h2>
              <h2>Careers</h2>
              <h2>DW News</h2>
            </div>
            <div className="footer__container__lower__sec_container">
              <h1>Help</h1>
              <h2>Support</h2>
              <h2>Sign up</h2>
              <h2>Guide</h2>
              <h2>Reports</h2>
              <h2>Q&A</h2>
            </div>
          </div>
          <div className="footer__container__lower_third">
            <div className="footer__container__social__header">
              <h1>Social Media</h1>
            </div>
            <div className="footer__container__social__media">
              <div className="socialmedia">
                <img src="/assets/facebook.png" alt="facebook" />
              </div>
              <div className="socialmedia">
                <img src="/assets/twitter.png" alt="twitter" />
              </div>
              <div className="socialmedia">
                <img src="/assets/instagram.png" alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
