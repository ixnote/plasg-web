"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the interface for an individual news item
interface NewsItem {
  newsDate: string;
  image: StaticImageData | string;
  topic: string;
  text: string;
  id?: string;
}

const Cards: React.FC<NewsItem> = ({ newsDate, image, topic, text, id }) => {
  const [imageSrc, setImageSrc] = useState<StaticImageData | string>(
    image || "/images/default.svg"
  );
  const href = id ? `/news/${id}` : "#";

  return (
    <Link
      href={href}
      className="block w-full p-8 gap-8 transition-fx cursor-pointer border-b-[1px] border-b-[#D4D4D4] no-underline hover:bg-brand-lightYellow"
      aria-disabled={!id}
    >
      <div>
        {/* <div className="lg:w-[1052px] lg:flex-row"> */}
        <div className="flex flex-col gap-4 w-full items-start justify-between lg:flex-row">
          <div className="flex flex-col gap-2 w-full h-[22px] text-[#588065] lg:w-[10%]">
            {newsDate}
          </div>
          <div className="flex flex-col items-start justify-start gap-4 lg:flex-row lg:justify-between">
            <div className="pb-[19px]">
              <Image
                src={imageSrc}
                alt={topic}
                width={320}
                height={200}
                onError={() => setImageSrc("/images/default.svg")}
              />
            </div>
            <div className="w-full h-auto">
              <div className="font-[Geist] leading-8 text-2xl text-[#0e3e40] text-left pb-[16px]">
                {topic}
              </div>
              <div className="w-full leading-6 text-[#000000b3] text-base font-[Geist]">
                {text}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
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
    </Link>
  );
};

export default Cards;
