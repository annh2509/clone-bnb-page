import React from "react";
import { formatCurrency } from "../../../utils/function";
interface BottomBarProps {
  price: number;
}

const BottomBar: React.FC<BottomBarProps> = (props) => {
  const { price } = props;
  return (
    <div className="w-full fixed bottom-0 left-0 bg-white z-50 border-t border-[#DDDDDD] hidden max-sm:block max-md:block max-lg:block">
      <div className="flex justify-between items-center gap-4 px-12 py-4">
        <div>
          <span className="text-xl font-medium">{formatCurrency(price)}</span>{" "}
          night
        </div>
        <div>
          <button className="w-full px-4 py-2 bg-[#dd1263] text-white font-bold rounded-lg">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
