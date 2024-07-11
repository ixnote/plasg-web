"use client";

import React, { useState } from "react";

const Hero = ({ data }: any) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* hero content */}
        <div className="m-auto max-w-[1200px]  grid lg:grid-cols-2 grid-cols-1 gap-4">
          <span className="col-span-1"></span>
          <div className="col-span-1 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <div className="h-fit glass-fx1 flex flex-col gap-10 text-left p-8">
                <div className="text-left flex flex-col gap-2">
                  <span className="font-medium text-5xl font-geistsans text-white outline-2">
                    Visit the{" "}
                  </span>
                  <span className="font-medium text-5xl font-geistsans text-white outline-2">
                    {data?.name}
                  </span>
                </div>
                <span className="font-normal text-base text-white font-geistsans w-[94%]">
                  From majestic waterfalls and serene lakes to historic sites
                  and lively festivals, immerse yourself in the beauty and
                  tranquility of the home of peace and tourism. Plan your visit
                  today and experience the unique charm and hospitality that
                  make ours a must-visit destination.
                </span>
                <p className="text-white text-[20px]">
                  Background: Riyom Rocks
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          {/* <div className="w-[50%]"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
