import React from "react";
import { Rate } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { UseAppDispatch, useAppSelector } from "../../../hooks/hook";
import {
  addToCart,
  quantDecrease,
  quantIncrease,
  removeCart,
} from "../../../redux/cartSlice";
import "./style.css";
import Favorites from "../Favorites";

const AddToCart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = UseAppDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeCart(productId));
  };

  return (
    <div className="Cart">
      {cartItems.length === 0 ? (
        <div className="empty">
          <h1>Your Cart is Empty</h1>
          <img
            src="https://target.scene7.com/is/content/Target/GUEST_26eaf754-af71-48ba-9286-d884b7fed1d8"
            alt="empty"
          />
        </div>
      ) : (
        cartItems.map(
          (product) =>
            product && (
              <div className="product-card" key={product.id}>
                <div className="product-picture">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <div className="product-title">
                    <p>{product?.name}</p>
                    <p> ${product.price?.toFixed(2)}</p>
                    <Rate disabled defaultValue={product?.rating} />
                    <button
                      type="submit"
                      onClick={() => handleRemoveFromCart(product?.id)}
                    >
                      <CloseOutlined />{" "}
                    </button>
                  </div>
                  <div className="product-quantity">
                    <button
                      onClick={() => dispatch(quantDecrease(product?.id))}
                    >
                      -
                    </button>
                    <button>{product.quant}</button>
                    <button onClick={() => dispatch(quantIncrease(product.id))}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            )
        )
      )}
      <div className="favorites-title">
        <h3>Favorites</h3>
      </div>
      <Favorites />
    </div>
  );
};

export default AddToCart;
