import React from "react";
import { useParams } from "react-router-dom";
import BookingSummary from "./components/BookingSummary";
import ImageGallery from "./components/ImageGallery";
import InfoSection from "./components/InfoSection";
import BottomBar from "./components/BottomBar";

const homeStay = {
  id: "b4de1e43-f044-44f6-9226-122968a9009d",
  type: "VILLA VENITY Sky",
  name: "Entire villa",
  guests: 14,
  bedrooms: 7,
  beds: 7,
  baths: 7,
  location: "Thủ Thiêm, Vietnam",
  desc: "Ocean and sea views",
  date: "Jan 6 - 11",
  price: 1168933,
  star: 4,
  reviews: 150,
  images: [
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif",
  ],
  miniImage:
    "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
  ownerName: "John Doe",
  ownerAvatar:
    "https://a0.muscache.com/im/pictures/user/859ff25c-c4a3-4aad-8570-1443c6545e45.jpg?im_w=240&im_format=avif",
  createdAt: "2024-12-17T09:34:16.983Z",
  updatedAt: null,
};

const HomeStay: React.FC = () => {
  const { id } = useParams();
  console.log("🚀 ~ id:", id);

  return (
    <div className="px-12 pt-[180px] max-sm:pt-[118px] max-md:pt-[130px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-semibold max-sm:text-xl">
            {homeStay?.type}
          </h1>
        </div>
        <div className="flex items-center gap-4 max-sm:gap-2">
          <div className="cursor-pointer underline border border-transparent p-2 hover:bg-[#F7F7F7] hover:border hover:rounded-lg hover:p-2">
            <span>Share</span>
          </div>
          <div className="cursor-pointer underline border border-transparent p-2 hover:bg-[#F7F7F7] hover:border hover:rounded-lg hover:p-2">
            <span>Save</span>
          </div>
        </div>
      </div>
      <ImageGallery images={homeStay?.images} />
      <div className="flex w-full gap-8">
        <InfoSection
          baths={homeStay?.baths}
          bedrooms={homeStay?.bedrooms}
          beds={homeStay?.beds}
          guests={homeStay?.guests}
          location={homeStay?.location}
          name={homeStay?.name}
          ownerAvatar={homeStay?.ownerAvatar}
          ownerName={homeStay?.ownerName}
          reviews={homeStay?.reviews}
          star={homeStay?.star}
        />

        <BookingSummary price={homeStay?.price} totalNights={5} />
        <BottomBar price={homeStay?.price} />
      </div>
    </div>
  );
};

export default HomeStay;
