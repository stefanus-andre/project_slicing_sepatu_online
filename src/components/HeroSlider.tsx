"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg", 
  "https://apparelresources.com/wp-content/uploads/2020/03/sneakers-vd.png", 
  "https://cdn.runrepeat.com/storage/gallery/product_content/25433/nike-dunk-high-ss-21541680-main.jpg"
];

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
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
