import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const InteriorDesign= () => {
  
  const CustomPrevArrow = (props: any) => (
    <div
      className="custom-arrow custom-prev"
      onClick={props.onClick}
    >
      <img src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736340429/Frame_xum694.png" alt="Previous" />
    </div>
  );

  
  const CustomNextArrow = (props: any) => (
    <div
      className="custom-arrow custom-next"
      onClick={props.onClick}
    >
      <img src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736340429/Frame-1_shdzjn.png" alt="Next" />
    </div>
  );

 
  const settings = {
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,     
    slidesToScroll: 1,   
    centerMode: false,   
    focusOnSelect: false 
  };

  return (
    <div className="bg-[#D3D3D3] h-[743px] p-8 flex flex-col justify-between items-center">
      <h1 className="text-black font-bold text-4xl mb-4">Interior Designing</h1>
      <p className="text-black font-normal text-xl text-center w-[1200px] mb-6">
        Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.
      </p>
      <div className="w-[1200px]">
        <Slider {...settings}>
          <div>
            <img
               src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736353552/Group_aun5ra.png"
               alt="Interior"
               className="w-full h-[486px] object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InteriorDesign;
