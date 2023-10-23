import { Component } from "react";
import Slider from "react-slick";
import { carousel } from "../../data/productsData";
import "./style.css";

interface CarouselSectionProps {}
class CarouselSection extends Component<CarouselSectionProps> {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

   

    return (
      <div className="carousel-section">
        <h2>Trending on social</h2>
        <Slider {...settings}>
          {carousel.map((item) => (
            <div className="carousel-card" key={item.id}>
              <img src={item.image} alt="carousel" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button type="submit" >
                ADD TO CART
              </button>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselSection;
