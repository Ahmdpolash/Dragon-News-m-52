import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex py-4">
      <button className="rounded-md bg-[#D72050] text-white px-5 py-2 ">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-[17px] font-medium text-[#403F3F] "
      >
        I can be a React component, multiple React components, or just some
        text.. Match Highlights: Germany vs Spain — as it happened ! Match
        Highlights: Germany vs Spain as..... I can be a React component,
        multiple React components, or just some text..
      </Marquee>
    </div>
  );
};

export default BreakingNews;
