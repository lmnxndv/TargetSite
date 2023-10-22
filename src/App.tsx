import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import HomePage from "./pages/homePage";
import ShoesPage from "./pages/shoesPage";
import AddToCart from "./Components/Cart/AddToCart";
import WomenPage from "./pages/womenPage";
import MenPage from "./pages/menPage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/1/product" element={<ShoesPage/>}/>
        <Route path="/2/product" element={<WomenPage/>}/>
        <Route path="/3/product" element={<MenPage/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
    </>
  );
};

export default App;
