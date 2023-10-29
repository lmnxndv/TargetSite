import React, { useCallback } from "react";
import { useParams } from "react-router";
import Slider from "react-slick";
import { Rate } from "antd";
import { UseAppDispatch } from "../../hooks/hook";
import { addToCart } from "../../redux/cartSlice";
import { allProductsArray } from "../../data/productsData";
import "./style.css";

const SinglePage: React.FC = () => {
  const { prodId } = useParams();
  const product = allProductsArray.find((item) => item.id === prodId);

  const dispatch = UseAppDispatch();

  const handleAddToCart = useCallback(() => {
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        favorite: false,
        quant: 1,
      };
      dispatch(addToCart(cartItem));
    }
  }, [product]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="single-page">
      <div className="slider-container">
        <Slider {...settings}>
          {product?.thumbnail?.map((item, i) => (
            <div key={i}>
              <img src={item} alt="photo" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="single-page-title">
        <h1>{product?.name}</h1>
        <Rate disabled defaultValue={product?.rating} />
        <p>${product?.price}</p>
        <div className="btns">
          <button className="addToCart" onClick={handleAddToCart}>
            Add TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
