import React from "react";

interface CardProps {
  id: number;
  image: string;
  title: string;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

const TrendingCard = ({ id, image, title, isHovered, onHover }: CardProps) => {
  return (
    <div
      className="relative bg-gray-100 rounded-lg shadow hover:shadow-lg overflow-hidden"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* Title */}
      <div className="p-4">
        <h3 className="text-center font-semibold">{title}</h3>
      </div>

      {/* Enquire Now Button */}
      {isHovered && (
       <div className="absolute inset-0 flex items-center justify-center">
       <button
         className="bg-black text-white font-semibold rounded-xl"
         style={{
           width: "168px",
           height: "51px",
           boxSizing: "border-box",
         }}
       >
         Enquire Now
       </button>
     </div>
      )}
    </div>
  );
};

export default TrendingCard;
