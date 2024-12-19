import React from "react";
import { Divider, Rate } from "antd";
import BookIcon from "../icons/BookIcon";

interface HomeStayProps {
  name: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  star: number;
  reviews: number;
  ownerAvatar: string;
  ownerName: string;
}

const InfoSection: React.FC<HomeStayProps> = (props) => {
  const {
    name,
    location,
    guests,
    bedrooms,
    beds,
    baths,
    star,
    reviews,
    ownerAvatar,
    ownerName,
  } = props;
  return (
    <div className="w-2/3 max-sm:w-full max-md:w-full">
      <div className="flex flex-col gap-1 mb-4">
        <div>
          <h2 className="text-2xl font-medium max-sm:text-lg">
            {name} in {location}
          </h2>
        </div>
        <div>
          <ul className="flex items-center gap-4 text-[#222222] max-sm:gap-2 max-sm:text-sm">
            <li className="relative after:content-['•'] after:absolute after:right-[-14px] after:text-[#222222] last:after:content-none max-sm:after:right-[-8px]">
              <span>{guests} guests</span>
            </li>
            <li className="relative after:content-['•'] after:absolute after:right-[-14px] after:text-[#222222]  last:after:content-none max-sm:after:right-[-8px]">
              <span>{bedrooms} bedrooms</span>
            </li>
            <li className="relative after:content-['•'] after:absolute after:right-[-14px] after:text-[#222222]  last:after:content-none max-sm:after:right-[-8px]">
              {beds} beds
            </li>
            <li className="relative after:content-['•'] after:absolute after:right-[-14px] after:text-[#222222]  last:after:content-none max-sm:after:right-[-8px]">
              {baths} baths
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="font-medium">
                {star}{" "}
                <Rate
                  disabled
                  value={star || 5}
                  className="text-sm text-black"
                />
              </span>
            </div>
            <div className="flex items-center underline">
              <span className="font-medium">{reviews} Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Divider className="border-[#DDDDDD]" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <img
            src={ownerAvatar}
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div>
          <div className="font-medium">{ownerName}</div>
          <div className="text-[#6A6A6A]">Superhost 6 years hosting</div>
        </div>
      </div>
      <div>
        <Divider className="border-[#DDDDDD]" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <div>
            <BookIcon />
          </div>
          <div>
            <div className="font-medium">Room in a townhouse</div>
            <div>Your own room in a home, plus access to shared spaces.</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <BookIcon />
          </div>
          <div>
            <div className="font-medium">Shared common spaces</div>
            <div>
              You'll share parts of the home with the Host and other guests..
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <BookIcon />
          </div>
          <div>
            <div className="font-medium">Dedicated bathroom</div>
            <div>This place has a bathroom that’s just for you.</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <BookIcon />
          </div>
          <div>
            <div className="font-medium">Free cancellation before Apr 7</div>
            <div>Get a full refund if you change your mind.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
