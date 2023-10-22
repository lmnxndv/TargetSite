import { Rate } from "antd";
// import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { menClothes } from "../../data/productsData";

const MenPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  type clothes = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    quant?: number;
  };

  const handleAddToCart = (clothes: clothes) => {
    dispatch(addToCart(clothes));
  };

  return (
    <div className="men-clothes-list">
      {menClothes.map((clothes) => (
        // <Link to={`/product/${clothes.id}`} key={clothes.id}>
        <div className="men-card" key={clothes.id}>
          <img src={clothes.image} alt={clothes.name} />
          <h3>{clothes.name}</h3>
          <p>${clothes.price}</p>
          <Rate disabled defaultValue={clothes.rating} />
          <button type="submit" onClick={() => handleAddToCart(clothes)}>
            ADD TO CART
          </button>
        </div>
        // </Link>
      ))}
    </div>
  );
};

export default MenPage;
