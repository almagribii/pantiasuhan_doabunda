import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/assets/homepage/slider/1.jpeg",
    alt: "Gambar 1",
  },
  {
    id: 2,
    src: "/assets/homepage/slider/2.jpeg",
    alt: "Gambar 2",
  },
  {
    id: 3,
    src: "/assets/homepage/slider/3.jpeg",
    alt: "Gambar 3",
  },
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-auto mt-8 w-full max-w-7xl overflow-hidden shadow-lg h-[450px]">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors duration-300 hover:bg-black/70"
      >
        {/* Arrow Back */}
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors duration-300 hover:bg-black/70"
      >
        {/* Arrow Next */}
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
