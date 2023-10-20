import "./style.css";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="container">
        <div className="row">
          <div className="row-title">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_32049dd2-8fca-4a28-9d9e-1eb0c90388e3?wid=2160&qlt=80&fmt=webp"
              alt=""
            />
            <p>
              <b>
                Join Target◎circle<span style={{ fontSize: "35%" }}>TM</span>
              </b>{" "}
              for free & score new deals every day.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="row-main">
            <div className="firstPic">
              <img
                src="https://target.scene7.com/is/image/Target/GUEST_d38d60e2-92bc-4ecc-8890-fcb6faa55ade?wid=1110&qlt=80&fmt=webp"
                alt=""
              />
              <span>179</span>
              <div className="firstpic-title">
                <p>
                  after $120 off with ﻿Target¬circleTM﻿, Shark Navigator
                  Lift-Away vacuum
                </p>
                <p>Today only.</p>
              </div>
            </div>
            <div className="secondPic">
              <img
                src="https://target.scene7.com/is/image/Target/GUEST_21b12eb6-ef7b-4755-90e5-8729ac7c5fb8?wid=1110&qlt=80&fmt=webp"
                alt=""
              />
              <span>30%</span>
              <div className="firstpic-title">
                <p>Saracina Home furniture with ﻿Target¬circleTM</p>
                <p>Today only. Online only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
