import CarouselSection from "../../Components/CarouselSection";
import StyledRow from "../../Components/StyledRow";
import WelcomePage from "../../Components/welcomePage/WelcomePage";
import "./style.css";

const HomePage = () => {
  return (
    <div className="AppContainer">
      <WelcomePage />
      <StyledRow />
      <CarouselSection/>
    </div>
  );
};

export default HomePage;
