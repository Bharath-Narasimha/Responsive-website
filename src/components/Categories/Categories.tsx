import React from "react";
import Carousel from "../Carousel/Carousel.tsx"; 
import './index.css';

const carouselItems = [
  {
    productName: "Living Room",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337921/c1_fllbqr.png",
  },
  {
    productName: "Dining",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337922/c2_gvv03j.png",
  },
  {
    productName: "Bedroom",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337921/c3_zcrpvm.png",
  },
  {
    productName: "Office",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337921/c4_uetkgn.png",
  },
  {
    productName: "Storage",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337921/c5_xh6hcb.png",
  },
  {
    productName: "Study Room",
    imgUrl: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736337922/c6_k2d2iy.png",
  },
];

const Categories = () => {
  const CustomPrevArrow = (props: any) => (
    <div
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      style={{
        position: 'absolute',
        left: '-40px', 
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <img src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736340429/Frame_xum694.png' alt='left'/>
    </div>
  );

  const CustomNextArrow = (props: any) => (
    <div
      className="slick-arrow slick-next"
      onClick={props.onClick}
      style={{
        position: 'absolute',
        right: '-40px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <img src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736340429/Frame-1_shdzjn.png' alt='right'/>
    </div>
  );

  const settings = {
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
  };

  return (
    <div>
      <h1 className='text-3xl font-bold'>Product Categories</h1>
      <Carousel items={carouselItems} settings={settings} />
    </div>
  );
};

export default Categories;
