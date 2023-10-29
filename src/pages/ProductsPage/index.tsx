import React, { useState } from "react";
import { Rate } from "antd";
import { UseAppDispatch } from "../../hooks/hook";
import { addToCart } from "../../redux/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import { Link } from "react-router-dom";
import { Products } from "../../data/productsData";

const ProductsPage = ({ products }: { products: Products[] }) => {
  const [isFavorite, setIsFavorite] = useState<string[]>([]);

  const dispatch = UseAppDispatch();

  const handleAddToCart = (clothes: Products) => {
    const cartItem = {
      id: clothes.id,
      name: clothes.name,
      image: clothes.image,
      price: clothes.price,
      rating: clothes.rating,
      favorite: false,
      quant: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const handleAddToFav = (favClothes: Products) => {
    if (isFavorite.includes(favClothes.id)) {
      dispatch(removeFromFavorites(favClothes.id));
      setIsFavorite(isFavorite.filter((id) => id !== favClothes.id));
    } else {
      const cartItem = {
        id: favClothes.id,
        name: favClothes.name,
        image: favClothes.image,
        price: favClothes.price,
        rating: favClothes.rating,
        favorite: true,
        quant: 1,
      };
      dispatch(addToFavorites(cartItem));
      setIsFavorite([...isFavorite, favClothes.id]);
    }
  };

  return (
    <div className="products-clothes-list">
      {products.map((clothes) => (
        <div className="products-card" key={clothes.id}>
          <Link to={`/products/${clothes.id}`} key={clothes.id}>
            <img src={clothes.image} alt={clothes.name} />
            <h3>{clothes.name}</h3>
            <p>${clothes.price}</p>
          </Link>
          <Rate disabled defaultValue={clothes.rating} />
          <button
            type="submit"
            className="addToCart"
            onClick={() => handleAddToCart(clothes)}
          >
            ADD TO CART
          </button>
          <button
            className={`favorite ${
              isFavorite.includes(clothes.id) ? "active" : ""
            }`}
            onClick={() => handleAddToFav(clothes)}
          >
            {isFavorite.includes(clothes.id) ? (
              <i className="fa-solid fa-heart active"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductsPage);
