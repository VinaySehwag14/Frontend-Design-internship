import "./download.css";

const Download = () => {
  return (
    <div className="download">
      <div className="download__container">
        <div className="download__left">
          <div className="download__left__heading">
            <h1>Download Our App</h1>
          </div>
          <div className="download__left__para">
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
        <div className="download__right">
          <div className="download__right__image">
            <img src="/assets/phone.png" alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
