// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex justify-center h-fit">
        <Slider {...settings} className="w-1/2">
          <div>
            <Image
              alt="Lvl1"
              src={"/levels/Lvl1.png"}
              width={1000}
              height={618}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              alt="Lvl2"
              src={"/levels/Lvl2.png"}
              width={1000}
              height={618}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              alt="Lvl3"
              src={"/levels/Lvl3.png"}
              width={1000}
              height={618}
              className="rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
