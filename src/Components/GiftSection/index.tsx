import "./style.css";

const GiftSection = () => {
  return (
    <div className="gift-container">
      <div className="row">
        <div className="gift-title">
          <h1>The season’s must-haves</h1>
        </div>
        <div className="gift-details">
          <div className="gift-picture">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_15497d5f-f220-4433-b554-224c7bb5fe8d?wid=1110&qlt=80&fmt=webp"
              alt="gift"
            />
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_ad282821-28a2-4ad0-9bad-408e60cc1acb?wid=1110&qlt=80&fmt=webp"
              alt="gift"
            />
          </div>
          <div className="gift-info">
            <a href="#">
              <h2>Bullseye’s Top Toys</h2>
              <p>
                Explore the hottest picks of the season to find a gift for any
                list.
              </p>
            </a>
            <a href="#">
              <h2>Top Tech Gifts HQ</h2>
              <p>Your helpful holiday guide to the tech everyone wants.</p>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="gift-title">
          <h1>Share the joy</h1>
        </div>
        <div className="gift-details">
          <div className="gift-picture">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_67c2d6b9-c636-4dee-9e0d-0b8cc9e6f958?wid=1110&qlt=80&fmt=webp"
              alt="gift"
            />
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_f05cbda7-5488-40b0-90bd-9473cb9f62fb?wid=1110&qlt=80&fmt=webp"
              alt="gift"
            />
          </div>
          <div className="gift-info">
            <a href="#">
              <h2>All things Christmas</h2>
              <p>Everything you need to get in the holiday spirit.</p>
            </a>
            <a href="#">
              <h2>Find the perfect gift</h2>
              <p>Check off every wish list with top gift ideas.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
