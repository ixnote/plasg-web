"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define the interface for an individual news item
interface NewsItem {
  newsDate: string;
  image: StaticImageData; // Adjust type according to your needs
  topic: string;
  text: string;
  id?: string;
}

const Cards: React.FC<NewsItem> = ({ newsDate, image, topic, text, id }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="w-full p-8 gap-8 transition-fx cursor-pointer border-b-[1px] border-b-[#D4D4D4] hover:bg-brand-lightYellow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/news/${id}`)}
    >
      <div>
        <div className="w-[1052px] flex">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-2 w-[125px] h-[22px] text-[#588065]">
              {newsDate}
            </div>
            <div className="pb-[19px]">
              <Image src={image} alt={topic} width={320} height={200} />
            </div>
            <div className="w-[433px] h-auto">
              <div className="font-[Geist] leading-8 text-2xl text-[#0e3e40] text-left pb-[16px]">
                {topic}
              </div>
              <div className="w-[430px] leading-6 text-[#000000b3] text-base font-[Geist]">
                {text}
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="border-[1px] border-[#D4D4D4]" />
        <div
          className={
            hovered
              ? "transition-fx flex items-center justify-between w-[90%] ml-8"
              : "transition-fx flex items-center justify-between w-[90%]"
          }
        >
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
