import React, {  useCallback, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import useInfiniteScroll from '../components/useInfiniteScroll';
import { fetchPosts } from '../services/Api'

const InfiniteScrollList = () => {
  const { data, loadMore, hasMore } = useInfiniteScroll(fetchPosts);
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loadMore]
  );

  return (
    <List
      height={500}
      itemCount={data.length}
      itemSize={50}
      width={"100%"}
    >
      {({ index, style }) => {
        return (
          <div
            ref={index === data.length - 1 ? lastElementRef : null}
            style={{ ...style, padding: 10, borderBottom: "1px solid #ccc" }}
          >
            {data[index].title}
          </div>
        );
      }}
    </List>
  );
};

export default InfiniteScrollList;