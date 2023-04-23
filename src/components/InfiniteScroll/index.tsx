import React, { FC, useEffect, useRef } from "react";

interface IInfiniteScroll {
  loadMore: (arg: boolean) => boolean;
}

export const InfiniteScroll: FC<IInfiniteScroll> = ({ loadMore }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        loadMore(false);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []);

  return <div ref={containerRef}></div>;
};
