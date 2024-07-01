<<<<<<< HEAD
import React from "react";

const SectionHeader = () => {
  return (
    <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
      <span className="font-light text-sm text-black font-geistmono">
        QUICK ACTIONS
      </span>
      <span className="font-medium text-4xl font-geistsans text-[#0E3E40]">
        Easily Access Essential Information on Topics of Interest{" "}
      </span>
      <span className="font-normal text-base text-[rgba(14, 62, 64, 0.8)] font-geistsans w-[75%]">
        Find key information quickly on a variety of important topics right here
        on the Plateau Government website.
      </span>
    </div>
=======
"use client";

import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useRouter } from "next/navigation";

const SectionHeader = ({
  title,
  description,
  image,
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
          <span className="uppercase text-brand-dark opacity-80 font-light flex items-center gap-2 text-[14px] flex-wrap">
            <GoHome
              size={18}
              onClick={goHome}
              className="transition-fx cursor-pointer hover:text-brand-main"
            />
            /
            <p
              onClick={gotoBase}
              className="transition-fx cursor-pointer hover:text-brand-main"
            >
              {baseText}
            </p>
            {linkText && (
              <p
                onClick={handleClick}
                className="transition-fx cursor-pointer hover:text-brand-main"
              >
                / {linkText}
              </p>
            )}
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium font-geistsans max-w-[800px] leading-[56px] lg:col-span-3 col-span-2">
              {title}
            </p>
            <span className="col-span-2 flex flex-col gap-6 lg:border-l-[1px] lg:border-l-gray-200 lg:pl-8">
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px] font-geistsans">
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
      </div>
    </>
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
  );
};

export default SectionHeader;
