import ButtonLight from "@/components/ButtonLight";
import React from "react";

const Visit = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
            <span className="font-light text-sm text-black font-geistmono">
              VISIT
            </span>
            <span className="font-medium text-4xl font-geistsans text-[#0E3E40]">
              Visiting The Beautiful Plateau State?{" "}
            </span>
            <span className="font-normal text-base text-[rgba(14, 62, 64, 0.8)] font-geistsans w-[75%]">
              Plateau State is a diverse and vibrant region in Nigeria, known
              for its stunning natural landscapes and rich cultural heritage.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-20">
            {/* content */}
            <div className="flex items-center justify-between flex-wrap gap-4 w-full m-auto">
              MEHHHH
            </div>
            <ButtonLight text={"Visit Plateau"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
