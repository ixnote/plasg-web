"use client";

import React, { useState } from "react";

const Hero = ({ data }: any) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* hero content */}
        {/* <div className="m-auto max-w-[1500px]  grid lg:grid-cols-2 grid-cols-1 gap-4"> */}
        <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
          <span className="m-auto w-[92%] grid lg:grid-cols-2 grid-cols-1 gap-4">
            <span className="col-span-1"></span>
            <div className="col-span-1 flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <div className="h-fit glass-fx1 flex flex-col gap-10 text-left p-8">
                  <div className="text-left flex flex-col gap-2">
                    <span className="font-medium text-5xl font-geistsans text-white outline-2">
                      Visit Plateau{" "}
                    </span>
                    <span className="font-medium text-5xl font-geistsans text-white outline-2">
                      {data?.name}
                    </span>
                  </div>
                  <span className="font-normal text-lg text-white font-geistsans w-[94%]">
                    From majestic waterfalls and serene lakes to historic sites
                    and lively festivals, immerse yourself in the beauty and
                    tranquility of the home of peace and tourism. Plan your
                    visit today and experience the unique charm and hospitality
                    that make ours a must-visit destination.
                  </span>
                  {/* <p className="text-white text-[20px]">
                    Background: Riyom Rocks
                  </p> */}
                </div>
              </div>
            </div>
          </span>
          {/* right */}
          {/* <div className="w-[50%]"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
