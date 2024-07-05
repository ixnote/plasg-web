"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import { newsList } from "./data";

interface newsList {
  newsDate: string;
  image: StaticImageData; // Adjust type according to your needs (e.g., StaticImageData for Next.js images)
  topic: string;
  text: string;
}


const Cards: React.FC<newsList> = ({ newsDate, image, topic, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className=" w-full h-[264px] p-8   gap-8 transition-fx cursor-pointer hover:bg-brand-lightYellow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className=" " >
        <div className="w-[1052px] flex pb-3 ">
          <div className="flex w-ful justify-between w-[1051px]">
           <div className="flex flex-col gap-2 w-[125px] h-[22px] text-[#588065]">{newsDate}</div>
           <div className="pb-[19px] ">
            <Image src={image} alt={topic} width={320} height={200} />
          </div>
          <div className="w-[433px] h-auto ">
            <div className="font-[Geist] leading-8 text-2xl text-[#0e3e40] text-left pb-[16px]">{topic}</div>
            <div className="w-[430px] leading-6 text-[#000000b3] text-base font-[Geist]">{text}</div>
          </div>
          </div>
        </div>
        <hr className="border-[1px] border-[#D4D4D4] " />
      </div>
      <div
        className={
          hovered
            ? "transition-fx flex items-center justify-between w-[90%] ml-8"
            : "transition-fx flex items-center justify-between w-[90%]"
        }
      >
        {/* Additional elements like buttons can be added here */}
      </div>
    </div>
  );
};

export default Cards;
