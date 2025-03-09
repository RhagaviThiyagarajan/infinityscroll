import { useState, useEffect } from "react";

const useInfiniteScroll = (fetchData) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadMoreData = async () => {
      const newData = await fetchData(page);
      setData((prev) => [...prev, ...newData]);
      if (newData.length === 0) setHasMore(false);
    };

    loadMoreData();
  }, [page, fetchData]);

  return { data, loadMore: () => setPage((prev) => prev + 1), hasMore };
};

export default useInfiniteScroll;