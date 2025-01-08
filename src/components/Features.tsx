import React from "react";

const features = [
  {
    image: 'https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361056/Frame-2_bhiwqb.png',
    title: "500+ Collections",
    description:
      "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
  },
  {
    image: 'https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361058/Group_eknyap.png',
    title: "300+ Fabrics",
    description:
      "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
  },
  {
    image: 'https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361054/Frame_wmsagk.png',
    title: "Top-notch Quality",
    description:
      "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
  },
  {
    image: 'https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361055/Frame-1_wyxago.png',
    title: "Colour and Length customization",
    description:
      "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
  },
];

const Features= () => {
  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Why Vibrer Stands Out?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#D3D3D3] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
