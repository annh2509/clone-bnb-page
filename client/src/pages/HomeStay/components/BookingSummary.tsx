import React, { useMemo } from "react";
import { formatCurrency } from "../../../utils/function";
import { Divider } from "antd";

interface BookingSummaryProps {
  price: number;
  totalNights: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = (props) => {
  const { price, totalNights } = props;

  const totalPrice = useMemo(() => {
    const isCalculable = price > 0 && totalNights > 0;
    return isCalculable ? price * totalNights : 0;
  }, [price, totalNights]);

  return (
    <div className="w-1/3 flex justify-center items-center max-sm:hidden max-md:hidden max-lg:hidden">
      <div className="flex flex-col gap-6 justify-center w-[370px] h-[360px] border border-[#DDDDDD] rounded-lg px-6">
        <div>
          <span className="text-2xl font-semibold">
            {formatCurrency(price)}
          </span>{" "}
          <span>night</span>
        </div>
        <div className="w-full flex flex-col gap-2 items-center">
          <button className="w-full px-4 py-2 bg-[#dd1263] text-white font-bold rounded-lg">
            Reserve
          </button>
          <div>
            <span>You won't be charged yet</span>
          </div>
        </div>
        <div className="flex justify-between text-[#222222] leading-5 font-medium">
          <span className="underline">
            {formatCurrency(price)} x {`${totalNights}`} night
          </span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <Divider className="my-0" />
        <div className="flex justify-between font-medium text-lg">
          <span>Total before taxes</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
