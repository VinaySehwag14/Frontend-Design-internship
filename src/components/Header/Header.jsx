import "./header.css";

const Header = () => {
  return (
    <nav className="header fixed w-full z-30 top-0 text-white">
      <div className="header__left">
        <div className="header__logo">
          <img src="/assets/logo.png" alt="" />
          <h1>Insignia</h1>
        </div>
      </div>
      <div className="header__right ">
        <div className="homepage__profiles">
          <h2>About</h2>
          <h2>Help</h2>
          <h2>Features</h2>
          <h2>Signup</h2>
        </div>
        <div className="header__button">
          <button>
            Request Demo <span>→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
