import React from "react";

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Select your dream model",
      description:
        "Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359683/Group-2_du2joc.png", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Step 2: Customize to your requirement",
      description:
        "Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359690/Vector_uwlmda.png", // Replace with the actual image URL
    },
    {
      id: 3,
      title: "Step 3: Order confirmation",
      description:
        "Accurate measurements ensure your furniture fits perfectly, maximizing space and style.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359682/Group_s9ofmq.png", // Replace with the actual image URL
    },
    {
      id: 4,
      title: "Step 4: Quality check",
      description:
        "Enjoy seamless delivery and professional installation services with every purchase.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359683/Group-1_ddildr.png", // Replace with the actual image URL
    },
    {
      id: 5,
      title: "Step 5: Order processing",
      description:
        "Your order is carefully reviewed and processed to ensure all details are correct before moving forward.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359685/Group-3_jd3wqs.png", // Replace with the actual image URL
    },
    {
      id: 6,
      title: "Step 6: Delivery",
      description:
        "Our commitment to quality ensures your satisfaction with every piece you choose.",
      image: "https://res.cloudinary.com/dhhhojjlp/image/upload/v1736359687/Group-4_y4smhg.png", // Replace with the actual image URL
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-left sm:flex-row sm:text-left"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[202] h-[123] mb-4 sm:mb-0 sm:mr-6 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
