import React, { useEffect } from "react";
import { Rate } from "antd";
import { UseAppDispatch, useAppSelector } from "../../../hooks/hook";
import "./style.css";
import { removeFromFavorites } from "../../../redux/favoritesSlice";
import { addToCart } from "../../../redux/cartSlice";

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quant: number;
  favorite: boolean;
}

const Favorites: React.FC = () => {
  const favItems = useAppSelector((state) => state.favorites.favItems);

  const dispatch = UseAppDispatch();

  const handleRemoveFromFav = (favItem: FavoriteItem) => {
    dispatch(removeFromFavorites(favItem.id));
  };

  const handleAddToCart = (cartItem: FavoriteItem) => {
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favItems));
  }, [favItems]);

  return (
    <div className="favorites">
      {favItems.length === 0 ? (
        <div className="empty">
          <img
            src="https://target.scene7.com/is/content/Target/GUEST_812be4e4-60a2-449f-8488-8db14c0ce443?wid=40&hei=40&qlt=80&fmt=webp"
            alt="empty"
          />
          <h2>Track your favorite items</h2>
          <p>
            While browsing, select the heart icon on your favorite items to keep
            tabs on availability and new sale prices.
          </p>
        </div>
      ) : (
        <div className="favorites-basket">
          {favItems.map(
            (product) =>
              product.favorite && (
                <div className="fav-card" key={product.id}>
                  <div className="fav-details">
                    <div className="fav-picture">
                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="fav-title">
                      <p>{product.name}</p>
                      <Rate disabled defaultValue={product.rating} />
                      <div className="fav-btns">
                        <button
                          type="submit"
                          className="addToCart"
                          onClick={() => handleAddToCart(product)}
                        >
                          ADD TO CART
                        </button>
                        <button
                          type="submit"
                          className="removeFromFav"
                          onClick={() => handleRemoveFromFav(product)}
                        >
                          {product.favorite ? (
                            <i className="fa-solid fa-heart active"></i>
                          ) : (
                            <i className="fa-regular fa-heart"></i>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fav-price">
                    <p> ${product.price}</p>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(Favorites);
