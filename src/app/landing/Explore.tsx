import ButtonDark from "@/components/ButtonDark";
import Image from "next/image";
import React from "react";

import map from "../../../public/landing/map.svg";

const Explore = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-brand-main">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          {/* top */}
          <div className="w-full flex flex-col gap-4 lg:w-[65%]">
            <span className="font-light text-[10px] text-brand-white font-geistmono md:text-xs lg:text-sm">
              EXPLORE
            </span>
            <span className="font-medium text-[28px] font-geistsans text-brand-white md:text-4xl">
              Interactive Map: Quick Insights on Local Government Areas
            </span>
            <span className="w-full font-normal text-[14px] text-brand-white font-geistsans md:text-base lg:w-[75%]">
              Explore Plateau State's Local Government Areas with our
              Interactive Map. Quickly find information and unique features of
              each region.
            </span>
          </div>
          {/* content */}
          <div className="flex flex-col items-center justify-center gap-40 w-[70%] m-auto">
            {/* top */}
            <div className="flex flex-row gap-4 items-center justify-center flex-wrap lg:w-[1017px]">
              {/* Map */}
              <div className="flex items-center justify-center p-4">
                <Image src={map} alt="top footer" className="w-full h-full" />
              </div>
            </div>
            {/* bottom */}
            <div className="flex flex-col justify-center items-center gap-8 text-center w-[350px] md:w-[650px]">
              <span className="font-medium text-2xl font-geistsans text-white md:text-4xl">
                Looking to invest in Plateau State?
              </span>
              <span className="font-normal text-base text-white font-geistsans w-full md:w-[85%]">
                Explore prime investment opportunities in agriculture, mining,
                tourism, and tech. Join us in driving economic growth and
                securing a prosperous future.
              </span>
              <ButtonDark text={"View Opportunities"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
