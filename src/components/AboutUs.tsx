import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About us</h2>
        <p className="text-lg text-gray-600 mb-12 w-[90%]">
          Discover the epitome of luxury living with our exclusive furniture collection. Each piece is meticulously crafted to bring sophistication and elegance to your home.
        </p>
       <div className='flex flex-row justify-center items-center'>
        <div className="flex flex-row flex-wrap">
          {/* Inspired Living */}
          <div className="text-left m-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inspired Living</h3>
            <p className="text-gray-600 w-[300px] leading-tight">
              Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.
            </p>
          </div>

          {/* Exceptional Savings */}
          <div className="text-left m-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exceptional Savings</h3>
            <p className="text-gray-600 w-[300px] leading-tight">
              By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.
            </p>
          </div>

          {/* Easy Shopping */}
          <div className="text-left m-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Shopping</h3>
            <p className="text-gray-600 w-[300px] leading-tight">
              From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.
            </p>
          </div>

          {/* Sustainable Options */}
          <div className="text-left m-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Options</h3>
            <p className="text-gray-600 w-[300px] leading-tight">
              Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment.
            </p>
          </div>
        </div>

        {/* Images Section */}
<div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
  {/* Top Left Image */}
  <img
    src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736357911/Group-1_womb7u.png"
    alt="Furniture 1"
    className="col-span-2 row-span-1 rounded-lg shadow-lg"
  />
  {/* Top Right Image */}
  <img
    src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736357911/Rectangle_2_c77pp3.png"
    alt="Furniture 2"
    className="col-span-2 row-span-2 rounded-lg shadow-lg"
  />
  {/* Bottom Left Image */}
  <img
    src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736357911/Rectangle_1_knso77.png"
    alt="Furniture 3"
    className="col-span-2 sm:col-span-2 row-span-2 rounded-lg shadow-lg"
  />
  {/* Bottom Right Images */}
  <div className="grid grid-cols-1 row-span-2 gap-4 sm:col-span-2">
    <img
      src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736357910/Group_ryiz2g.png"
      alt="Furniture 4"
      className="rounded-lg shadow-lg"
    />
    
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
