import './style.css'
const SubFooter = () => {
  return (
    <div className="subFooter-container">
      <div className="subFooter-icons">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="subFooter-details">
        <a href="#">Terms</a>
        <a href="#">CA Supply Chain</a>
        <a href="#"> Privacy CA</a>
        <a href="#"> Privacy Rights</a>
        <a href="#">Your Privacy</a>
        <a href="#">Choices</a>
        <a href="#">Interest Based Ads</a>
        <span>TM & © 2023 Target Brands, Inc.</span>
      </div>
    </div>
  );
};

export default SubFooter;
