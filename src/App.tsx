import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import HomePage from "./pages/homePage";
import ShoesPage from "./pages/shoesPage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ShoesPage/>}/>
      </Routes>
    </>
  );
};

export default App;
