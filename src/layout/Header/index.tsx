import SearchBar from "./SearchBar";
import Categories from "./Categories";
import "./style.css";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import Cart from "../../Components/Cart";

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
          <SearchBar />
          <SignIn />
          <Cart/>
        </div>
      </div>
    </header>
  );
};

export default Header;
