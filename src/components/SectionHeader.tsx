import React from "react";

const SectionHeader = () => {
  return (
    <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
      <span className="font-light text-sm text-black font-geistmono">
        QUICK ACTIONS
      </span>
      <span className="font-medium text-4xl font-geistsans text-[#0E3E40]">
        Easily Access Essential Information on Topics of Interest{" "}
      </span>
      <span className="font-normal text-base text-[rgba(14, 62, 64, 0.8)] font-geistsans w-[75%]">
        Find key information quickly on a variety of important topics right here
        on the Plateau Government website.
      </span>
    </div>
  );
};

export default SectionHeader;
