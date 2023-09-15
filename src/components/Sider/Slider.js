import React from "react";

const Slider = () => {
  const images = [
    "/assets/imageslider2.png",
    "/assets/imageslider3.png",
    "/assets/imageslider1.png",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex ">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Imagen${index + 1}`}
              className="w-full h-screen object-cover hover:scale-110 transition-transform ease-out duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
