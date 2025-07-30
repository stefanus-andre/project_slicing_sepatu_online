"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  "https://s.abcnews.com/images/GMA/GMA_TRS_250410_RunningShoes_v01_KA_1746112779296_hpMain_16x9_992.jpg", 
  "https://apparelresources.com/wp-content/uploads/2020/03/sneakers-vd.png", 
  "https://apparelresources.com/wp-content/uploads/2020/03/sneakers-vd2.png"];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`Slide ${i + 1}`} className="w-full h-[600px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
