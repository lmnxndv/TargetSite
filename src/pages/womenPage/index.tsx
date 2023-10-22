import { Rate } from "antd";
// import { Link } from "react-router-dom";
import { UseAppDispatch } from "../../hooks/hook";
import { addToCart } from "../../redux/cartSlice";
import { womenClothes } from "../../data/productsData";
import "./style.css";

interface clothes {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  quant?: number;
}

const WomenPage: React.FC = () => {
  const dispatch = UseAppDispatch();

  const handleAddToCart = (clothes: clothes) => {
    dispatch(addToCart(clothes));
  };

  return (
    <div className="women-clothes-list">
      {womenClothes.map((clothes) => (
        // <Link to={`/product/${clothes.id}`} key={clothes.id}>
        <div className="women-card" key={clothes.id}>
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

export default WomenPage;
