import { Rate } from "antd";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { womenClothes } from "../../data/productsData";

const WomenPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  type clothes = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  };

  const handleAddToCart = (clothes: clothes) => {
    dispatch(addToCart(clothes));
  };

  return (
    <div className="womenPage">
      {womenClothes.map((clothes) => (
        <Link to={`/product/${clothes.id}`} key={clothes.id}>
          <div className="women-card">
            <img src={clothes.image} alt={clothes.name} />
            <h3>{clothes.name}</h3>
            <p>${clothes.price}</p>
            <Rate disabled defaultValue={clothes.rating} />
            <button type="submit" onClick={() => handleAddToCart(clothes)}>
              ADD TO CART
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WomenPage;
