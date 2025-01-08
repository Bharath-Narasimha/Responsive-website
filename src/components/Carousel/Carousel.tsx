import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css"; // Required styles
import "slick-carousel/slick/slick-theme.css";
import './index.css';

interface CarouselItem {
  productName: string;
  imgUrl: string;
}

interface CarouselProps {
  items: CarouselItem[];
  settings: Settings; // Using the `Settings` type from react-slick for slider configuration
}

const Carousel = ({ items, settings }: CarouselProps)=> {
  return (
    <div className="mx-auto py-10 w-[90vw]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="slick-slide flex flex-col items-center justify-center bg-[#D3D3D3] rounded-lg p-4 ml-[50px] mr-[50px] h-[198px] w-[197px] text-center border-box"
          >
            <p className="text-base font-bold mb-2">{item.productName}</p>
            <div className="flex flex-row items-center justify-center">
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="h-[82px] w-[82px] object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
