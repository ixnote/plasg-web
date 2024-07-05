import Image from "next/image";
import React from "react";

function NewsCard({ data }: any) {
  return (
    <span className="col-span-1 flex flex-col bg-white border border-gray-200  h-[350px]">
      <span className=" h-full max-w-[400px] aspect-[11/6] object-cover bg-[#588065] image-container ">
        <Image
          src={data.image}
          alt=""
          width={500}
          height={300}
          className="w-full h-full max-w-[500px] aspect-[11/6] object-cover bg-[#588065] zoom-out-image"
        />
      </span>
      <span className="p-4 flex flex-col justify-between h-full flex-grow ">
        <p className="text-[16px] text-brand-main font-medium max-w-[400px] leading-[20px] lg:col-span-3 col-span-2 ">
          {data.title}
        </p>
        <span className="flex gap-5">
          <p className="pr-6 border-r-[1px] border-r-gray-300">Now</p>
          <span className="px-4 rounded-lg text-white bg-brand-main py-1">
            {data.category}
          </span>
        </span>
      </span>
    </span>
  );
}

export default NewsCard;
