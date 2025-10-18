import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="container2 mt-6 mb-5">
      <div className="flex bg-gray-200 py-3 px-4 rounded-sm">
        <h2 className="bg-pink-700 text-white py-2 px-4 rounded-sm">Latest</h2>
        <Marquee>
          <p className="py-2 font-medium">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain
            — as it happened ! Match Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
