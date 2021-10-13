import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ loadMore }) => {
  const containerRef = useRef();

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
  }, []); //eslint-disable-line

  return <div ref={containerRef} />;
};

export default InfiniteScroll;
