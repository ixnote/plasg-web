import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function PlaceCard({ data, onclick }: any) {
  return (
    <Link
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-1 flex flex-col gap-6 cursor-pointer main-container group relative"
      onClick={onclick}
    >
      <span className="w-full h-auto rounded-2xl aspect-[9/8] object-cover bg-[#588065] image-container">
        <Image
          src={data?.image}
          // src={
          //   "https://images.trvl-media.com/lodging/35000000/34540000/34536000/34535926/f89651e3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          // }
          alt=""
          width={1200}
          height={1200}
          className="w-full h-full rounded-2xl aspect-[9/8] object-cover bg-[#588065] zoom-out-image"
        />
      </span>
      <span className="mt-[-80px] ml-7 mb-6 bg-[#ffffff30] w-fit py-1 border-[0.2px] border-gray-400 backdrop-blur-sm">
        <span className="px-4 py-2  uppercase bg-[#00000050] w-fit text-white text-[16px]">
          {data?.name || " "}
        </span>
      </span>
      <span className="flex gap-4 justify-between items-center">
        <p className="text-[24px] leading-[24px] font-medium  m-0 lg:col-span-4 col-span-1 h-10">
          {/* {data?.name} */}
        </p>
      </span>
      <button className="rounded-full bg-brand-lightYellow text-brand-main w-14 h-14  group-hover:flex hidden absolute top-6 right-6 justify-center items-center hidden-element">
        <MdOutlineArrowOutward size={28} />
      </button>
    </Link>
  );
}

export default PlaceCard;
