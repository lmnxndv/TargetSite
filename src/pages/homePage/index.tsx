import CarouselSection from "../../Components/CarouselSection";
import GiftSection from "../../Components/GiftSection";
import StyledRow from "../../Components/StyledRow";
import WelcomePage from "../../Components/welcomePage/WelcomePage";
import "./style.css";

const HomePage = () => {
  return (
    <div className="AppContainer">
      <WelcomePage />
      <StyledRow />
      <CarouselSection/>
      <GiftSection/>
    </div>
  );
};

export default HomePage;
