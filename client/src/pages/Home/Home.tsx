import { useInfiniteQuery } from "@tanstack/react-query";
import { map, size } from "lodash";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import homeStayApi from "../../api/homestay";
import CardHomeStay from "../../components/CardHomeStay/CardHomeStay";
import { useQueryString } from "../../hooks/useQueryString";
import EmptyData from "./components/EmptyData";
import SkeletonLoader from "./components/SkeletonLoader";

const Home: React.FC = () => {
  const { search } = useQueryString();
  const { ref, inView } = useInView();
  const limit = 10;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["homeStays", search],
      queryFn: ({ pageParam = 1 }) =>
        homeStayApi.getHomeStayList({ search, page: pageParam, limit }),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length >= limit) {
          return allPages.length + 1;
        }
        return undefined;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="px-12 pt-[180px] max-sm:pt-[118px] max-md:pt-[130px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {map(data?.pages.flat(), (item) => (
          <CardHomeStay homeStay={item} key={item.id} />
        ))}

        {isFetchingNextPage && <SkeletonLoader count={limit} />}
      </div>

      {size(data?.pages.flat()) > 0 && <div ref={ref} className="h-10" />}

      {size(data?.pages.flat()) === 0 && <EmptyData />}
    </div>
  );
};

export default Home;
