"use client";

import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useRouter } from "next/navigation";

const SectionHeaderDark = ({
  title,
  description,
  image,
  video,
  baseText,
  baseURL,
  linkText,
  linkURL,
}: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/government/${linkURL}`);
  };

  const goHome = () => {
    router.push(`/`);
  };

  const gotoBase = () => {
    router.push(`/${baseURL}`);
  };

  return (
    <>
      <div className="flex flex-col py-24 pt-[180px] gap-4 lg:gap-16">
        <span className="flex flex-col gap-8 mb-10">
          <span className="uppercase text-brand-white opacity-80 font-light flex items-center gap-2 text-[14px] flex-wrap">
            <GoHome
              size={18}
              onClick={goHome}
              className="transition-fx cursor-pointer hover:text-brand-lightYellow"
            />
            /
            <p
              onClick={gotoBase}
              className="transition-fx cursor-pointer hover:text-brand-lightYellow"
            >
              {baseText}
            </p>
            {linkText && (
              <p
                onClick={handleClick}
                className="transition-fx cursor-pointer hover:text-brand-lightYellow"
              >
                / {linkText}
              </p>
            )}
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-white font-medium font-geistsans max-w-[800px] leading-[56px] lg:col-span-3 col-span-2">
              {title}
            </p>
            <span className="col-span-2 flex flex-col gap-6 lg:border-l-[1px] lg:border-l-gray-200 lg:pl-8">
              <p className="text-[18px] font-normal text-brand-white m-0 lg:col-span-4 col-span-1 max-w-[800px] font-geistsans">
                {description}
              </p>
              <button className="h-10 px-8 rounded-sm bg-white border w-fit border-gray-300 flex items-center justify-center gap-2">
                Scroll down <IoIosArrowRoundDown />
              </button>
            </span>
          </span>
        </span>
        {image && (
          <div className="w-full">
            <Image
              src={image}
              alt="Government house"
              className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
              loading="lazy"
            />
          </div>
        )}
        {video && (
          <>
            <div
              className="relative w-full overflow-hidden h-[240px] md:h-[480px] lg:h-[640px]"
              // style={{ paddingTop: "37.42%" }}
            >
              <video
                src={video}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              />
            </div>
            {/* <div className="w-full">
              <video
              src={video}
              // alt="Government house"
              className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
              controls
            />
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default SectionHeaderDark;
