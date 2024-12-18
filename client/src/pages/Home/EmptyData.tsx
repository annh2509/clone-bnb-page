import React from "react";

interface EmptyDataProps {
  message?: string;
}

const EmptyData: React.FC<EmptyDataProps> = ({
  message = "Không có dữ liệu phù hợp!",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gray-50 p-8 rounded-lg shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9V7a2.25 2.25 0 014.5 0v2m0 0v4m-4.5 0h4.5m-2.25 9a9 9 0 100-18 9 9 0 000 18z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-gray-600">{message}</h2>
      <p className="text-gray-500 mt-2">Hãy thử thay đổi từ khoá tìm kiếm!.</p>
    </div>
  );
};

export default EmptyData;
