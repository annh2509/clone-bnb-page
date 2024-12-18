import { Carousel } from "antd";
import { map } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/function";
import HeartIcon from "./icons/HeartIcon";
import StarIcon from "./icons/StarIcon";

interface CardHomeStayProps {
  homeStay: {
    id: number;
    location: string;
    desc: string;
    date: string;
    price: number;
    star: number;
    images: string[];
    miniImage: string;
  };
}

const CardHomeStay: React.FC<CardHomeStayProps> = ({ homeStay }) => {
  return (
    <div>
      <Link
        to={`/rooms/${homeStay.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full relative"
      >
        <div>
          <div className="absolute top-3 left-3 bg-white font-medium px-2 py-1 rounded-xl shadow-md z-10">
            <span className="">Guest favorite</span>
          </div>
          <div className="absolute top-3 right-3 z-10">
            <HeartIcon />
          </div>
        </div>
        <Carousel arrows infinite={false}>
          {map(homeStay.images, (image) => (
            <div className="flex relative  cursor-pointer" key={image}>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl min-h-[350px] sm:min-h-[300px] md:min-h-[300px] lg:min-h-[265px]"
              />
            </div>
          ))}
        </Carousel>
        <div className="flex items-center justify-between cursor-pointer mt-3">
          <span className="font-medium line-clamp-1">{homeStay.location}</span>
          <div className="flex items-center gap-2">
            <StarIcon />
            <span>{homeStay.star}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer text-[#6A6A6A]">
          <span>{homeStay.desc}</span>
        </div>
        <div className="cursor-pointer text-[#6A6A6A]">
          <span>{homeStay.date}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium">{formatCurrency(homeStay.price)}</span>
          <span>night</span>
        </div>
      </Link>
    </div>
  );
};

export default CardHomeStay;
