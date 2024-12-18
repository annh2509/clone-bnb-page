import { Carousel } from "antd";
import { map } from "lodash";
import React from "react";
import { formatCurrency } from "../../utils/function";
import { Link } from "react-router-dom";

interface CardHomeStayProps {
  item: {
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

const CardHomeStay: React.FC<CardHomeStayProps> = ({ item }) => {
  return (
    <div>
      <Link
        to={`/rooms/${item.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full relative"
      >
        <div>
          <div className="absolute top-3 left-3 bg-white font-medium px-2 py-1 rounded-xl shadow-md z-10">
            <span className="">Guest favorite</span>
          </div>
          <div className="absolute top-3 right-3 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "rgba(0, 0, 0, 0.5)",
                height: "24px",
                width: "24px",
                strokeWidth: "2",
                overflow: "visible",
                stroke: "#FFFFFF",
              }}
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </div>
        </div>
        <Carousel arrows infinite={false}>
          {map(item.images, (image) => (
            <div className="flex relative  cursor-pointer" key={image}>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </Carousel>
        <div className="flex items-center justify-between cursor-pointer mt-3">
          <span className="font-medium line-clamp-1">{item.location}</span>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "12px",
                width: "12px",
                fill: "currentcolor",
              }}
            >
              <path
                fillRule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
              ></path>
            </svg>
            <span>{item.star}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer text-[#6A6A6A]">
          <span>{item.desc}</span>
        </div>
        <div className="cursor-pointer text-[#6A6A6A]">
          <span>{item.date}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium">{formatCurrency(item.price)}</span>
          <span>night</span>
        </div>
      </Link>
    </div>
  );
};

export default CardHomeStay;
