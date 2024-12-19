import React from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex gap-2 cursor-pointer mb-4">
      <div className="w-1/2">
        <img
          src={images?.[0]}
          alt="Main"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
        {images?.slice(1, 5).map((image: string, index: number) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Sub-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
