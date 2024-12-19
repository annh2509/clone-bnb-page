import React from "react";

interface SkeletonLoaderProps {
  count: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count,
  className,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-300 h-64 rounded-md ${className}`}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
