import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import ArticleImage from "@/assets/imgs/img.png";

function LegislatureCard({ data, onclick }: any) {
  return (
    <span
      className="col-span-1 flex flex-col gap-6 cursor-pointer main-container relative"
      onClick={onclick}
    >
      <span className="w-full h-auto rounded-2xl aspect-[5/7] object-cover bg-[#588065] image-container ">
        <Image
          src={ArticleImage}
          alt=""
          width={1200}
          height={1200}
          className="w-full h-full rounded-2xl aspect-[5/7] object-cover bg-[#588065] zoom-out-image"
        />
      </span>
      <span className="mt-[-80px] ml-7 mb-6 bg-[#ffffff30] w-fit py-1 border-[0.2px] border-gray-400 backdrop-blur-sm">
        <span className="px-4 py-2  uppercase bg-[#00000050] w-fit text-white text-[16px]">
          {data?.name}
        </span>
      </span>
      <span className="flex items-center justify-between">
        <span className="flex flex-col gap-2">
          <p className="text-[24px] leading-[24px] font-medium  m-0 lg:col-span-4 col-span-1">
            {data?.name}
          </p>
          <p className="text-[18px] text-[#00000070] m-0 ">{data?.position}</p>
        </span>
      </span>
      <button className=" bg-brand-lightYellow text-brand-main w-14 h-14 rounded-full absolute top-6 right-6 z-20 flex justify-center items-center hidden-element">
        <AiOutlineMail size={24} />
      </button>
    </span>
  );
}

export default LegislatureCard;
