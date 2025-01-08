import React, { useState }  from 'react';
import TrendingCard from './TrendingCard.tsx'
const TrendingProducts=()=>{
    const [hoveredCard, setHoveredCard] = useState<number | null>(2); // Initial state for Luxury Sofa Set
    const cardData = [
        { id: 1, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351726/Group-6_pvxnkc.png", title: "Luxury Bed Set" },
        { id: 2, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group-1_rp6xyz.png", title: "Luxury Sofa Set" },
        { id: 3, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group-2_esklwz.png", title: "Luxury Dining Table" },
        { id: 4, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group_qtpujt.png", title: "Elegant Candle Set" },
        { id: 5, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group-4_bzn6kg.png", title: "Elegant Sofa Set" },
        { id: 6, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351726/Group-7_waakwz.png", title: "Fruit Platter" },
        { id: 7, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group_qtpujt.png", title: "Elegant Candle Set" },
        { id: 8, image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736351723/Group-3_cgpkge.png", title: "Luxury Bed Set" },
      ];
    return (
        <div className='flex flex-col justify-center items-center'>
        <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3 shadow-md w-[90%] mb-[30px] h-[64px]">
          {/* Icon and Title */}
          <div className="flex items-center space-x-2">
            <span>
              <img src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736349825/Frame_q57zzk.png' alt='trending products' className='w-[24px] h-[24px]'/>
            </span>
            <h2 className="font-semibold text-black ">Trending products</h2>
          </div>
    
          {/* Navigation Controls */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="p-1 rounded-full"
            >
              <span className="material-icons text-sm text-black">
                <img src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736349825/Frame-2_goymuu.png" alt='left arrow'/>
              </span>
            </button>
            <button
              type="button"
              className="p-1"
            >
              <span className="material-icons text-sm text-black">
              <img src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736349825/Frame-1_efggbd.png" alt='right arrow'/>
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-[30px]">
        {cardData.map((card) => (
          <TrendingCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            isHovered={hoveredCard === card.id}
            onHover={setHoveredCard}
          />
        ))}
      </div>
        </div>
      );
}
export default TrendingProducts