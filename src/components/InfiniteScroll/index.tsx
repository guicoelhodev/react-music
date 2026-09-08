import React, { FC, useEffect, useRef } from "react";

interface IInfiniteScroll {
  loadMore: () => void;
}

export const InfiniteScroll: FC<IInfiniteScroll> = ({ loadMore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef(loadMore);
  loadMoreRef.current = loadMore;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        loadMoreRef.current();
      }
    }, options);

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}></div>;
};
