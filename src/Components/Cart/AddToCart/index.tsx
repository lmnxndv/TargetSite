import React from "react";
import { Rate } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { UseAppDispatch, useAppSelector } from "../../../hooks/hook";
import {
  quantDecrease,
  quantIncrease,
  removeCart,
} from "../../../redux/cartSlice";
import "./style.css";

const AddToCart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = UseAppDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeCart(productId));
  };

  return (
    <div className="Cart">
      {cartItems.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-picture">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
          <div className="product-title">
            <p>{product.name}</p>
            <p> ${product.price}</p>
            <Rate disabled defaultValue={product.rating} />
            <button
              type="submit"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              <CloseOutlined />{" "}
            </button>
          </div>
          <div className="product-quantity">
            <button onClick={() => dispatch(quantDecrease(product.id))}>
              -
            </button>
            <button>{product.quant}</button>
            <button onClick={() => dispatch(quantIncrease(product.id))}>
              +
            </button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
