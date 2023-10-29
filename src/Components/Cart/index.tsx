import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/hook";
import "./style.css";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.length;
  return (
    <div className="shopping-cart">
      <Link to="/cart">
        <ShoppingCartOutlined style={{ fontSize: "24px", color: "#333" }} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </div>
  );
};

export default Cart;
