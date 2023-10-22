import React from "react";
// import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./style.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addToCart } from "../../redux/cartSlice";
import { shoes } from "../../data/productsData";

const ShoePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  type Shoe = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    quant?: number;
  };

  const handleAddToCart = (shoe: Shoe) => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        // <Link to={`/product/${shoe.id}`} key={shoe.id}>
        <div className="shoe-card" key={shoe.id}>
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <Rate disabled defaultValue={shoe.rating} />
          <button type="submit" onClick={() => handleAddToCart(shoe)}>
            ADD TO CART
          </button>
        </div>
        // </Link>
      ))}
    </div>
  );
};

export default ShoePage;
