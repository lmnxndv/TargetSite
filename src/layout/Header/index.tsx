import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Deals from "./Deals";
import Delivery from "./Delivery";
import News from "./News";
import "./style.css";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <img
                style={{ width: "48px" }}
                src="https://assets.targetimg1.com/icons/assets/decorative/light/BullseyeRed.svg#BullseyeRed"
                alt="logo"
              />
            </Link>
          </div>
          <Categories />
          <Deals />
          <News />
          <Delivery />
          <SearchBar />
          <SignIn />
        </div>
      </div>
    </header>
  );
};

export default Header;
