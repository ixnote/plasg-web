import Image from "next/image";
import React from "react";

function PlaceCard({ data, onclick }: any) {
  return (
    <span
      className="col-span-1 flex flex-col gap-6 cursor-pointer"
      onClick={onclick}
    >
      <Image
        src={data?.image}
        alt=""
        width={1200}
        height={1200}
        className="w-full h-auto rounded-2xl aspect-[9/8] object-cover bg-[#588065]"
      />
      <span className="mt-[-80px] ml-7 mb-6 bg-[#ffffff30] w-fit py-1 border-[0.2px] border-gray-400 backdrop-blur-sm">
        <span className="px-4 py-2  uppercase bg-[#00000050] w-fit text-white text-[16px]">
          PANKSHIN NORTH
        </span>
      </span>
      <span className="flex flex-col gap-2">
        <p className="text-[24px] leading-[24px] font-medium  m-0 lg:col-span-4 col-span-1">
          {data?.name}
        </p>
      </span>
    </span>
  );
}

export default PlaceCard;
