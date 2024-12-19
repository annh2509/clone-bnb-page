import React from "react";
import { useParams } from "react-router-dom";
import BookingSummary from "./components/BookingSummary";
import ImageGallery from "./components/ImageGallery";
import InfoSection from "./components/InfoSection";
import BottomBar from "./components/BottomBar";
import { useQuery } from "@tanstack/react-query";
import homeStayApi from "../../api/homestay";
import { Skeleton } from "antd";

const HomeStay: React.FC = () => {
  const { id } = useParams();
  const { data: homeStay, isLoading } = useQuery({
    queryKey: ["homeStay", id],
    queryFn: async () => {
      return homeStayApi.getHomeStayById(id as string);
    },
    enabled: !!id,
  });

  return (
    <div className="px-12 pt-[180px] max-sm:pt-[118px] max-md:pt-[130px]">
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default HomeStay;
