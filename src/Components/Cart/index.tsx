import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Cart = () => {
  return (
    <div>
      <Link to="/cart">
        <ShoppingCartOutlined style={{fontSize:"24px", color:"#333"}}/>
      </Link>
    </div>
  );
};

export default Cart;
