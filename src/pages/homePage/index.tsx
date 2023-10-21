import StyledRow from "../../Components/StyledRow";
import WelcomePage from "../../Components/welcomePage/WelcomePage";
import "./style.css";

const HomePage = () => {
  return (
    <div className="AppContainer">
      <WelcomePage />
      <StyledRow />
    </div>
  );
};

export default HomePage;
