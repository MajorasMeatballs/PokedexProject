import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ onIntersection }) => {
    const bottomBoundaryRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(onIntersection, options);

        if (bottomBoundaryRef.current) {
            console.log("adi is great");
            observer.observe(bottomBoundaryRef.current);
        }

        return () => {
            if (bottomBoundaryRef.current) {
                observer.unobserve(bottomBoundaryRef.current);
            }
        };
    }, []);

    return <div ref={bottomBoundaryRef}></div>;
};

export default InfiniteScroll;
