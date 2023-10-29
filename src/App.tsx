import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import HomePage from "./pages/homePage";
import AddToCart from "./Components/Cart/AddToCart";
import Footer from "./layout/Footer";
import SubFooter from "./layout/SubFooter";
import SinglePage from "./pages/singlePage";
import { menClothes, shoes, womenClothes } from "./data/productsData";
import { Categories } from "./data/data";
import ProductsPage from "./pages/ProductsPage";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/products/:prodId" element={<SinglePage />} />
        <Route
          path={`/product/${Categories.SHOES}`}
          element={<ProductsPage products={shoes} />}
        />
        <Route
          path={`/product/${Categories.WOMEN}`}
          element={<ProductsPage products={womenClothes} />}
        />
        <Route
          path={`/product/${Categories.MAN}`}
          element={<ProductsPage products={menClothes} />}
        />
      </Routes>
      <Footer />
      <SubFooter />
    </>
  );
};

export default App;
