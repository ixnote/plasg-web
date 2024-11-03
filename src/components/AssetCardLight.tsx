"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/formatDate";

const AssetCardLight = ({
  logo,
  icon,
  logoText,
  title,
  byText,
  description,
  updated,
  created,
  date,
  button1text,
  button2text,
  url,
  id,
}: any) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    id && router.push(`/search/one?id=${id}`);
    return;
  };

  // const handleClick = () => {
  //   if (url) {
  //     window.open(url, "_blank");
  //   }
  //   return;
  // };

  return (
    <div
      className="w-full bg-[#E5E7EB] p-8 mb-2 rounded-2xl flex flex-col items-start justify-between gap-8 transition-fx cursor-pointer hover:bg-brand-lightYellow lg:w-[49%] lg:pt-8 lg:h-[550px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* top */}
      <div className="w-full flex flex-col gap-16">
        {/* logo part */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2 text-[#588065]">
            {logo && logo}
            {icon && <Image src={icon} alt="" />}
            <span>{logoText}</span>
          </div>
          <span className="font-geistmono text-brand-grayish font-light text-sm">
            {date
              ? formatDate(date)
              : updated
              ? formatDate(updated)
              : formatDate(created)}
          </span>
        </div>
        {/* title part */}
        <div className="flex flex-col gap-8">
          <div className="font-geistsans font-medium text-2xl mb-4 text-brand-main flex flex-col gap-2 md:text-3xl lg:h-[60px]">
            {title}
            {byText && (
              <span className="flex items-center justify-start gap-4 text-brand-grayish font-normal text-sm font-geistsans">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.6 4.2V5.8M2.6 7.8V6.2H8.6V7.8M4.2 1H7V3.8H4.2V1ZM7.4 8.2H10.2V11H7.4V8.2ZM1 8.2H3.8V11H1V8.2Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {byText}
              </span>
            )}
          </div>
          <div className="font-geistsans font-normal text-base text-brand-main md:text-lg lg:h-[170px] lg:overflow-y-hidden">
            {description.length > 400
              ? description.substring(0, 400) + ". . ."
              : description}
            {/* {description} */}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div
        className={
          hovered
            ? "transition-fx flex items-center justify-between w-[90%] ml-8"
            : "transition-fx flex items-center justify-between w-[90%]"
        }
      >
        <div className="flex w-full items-center justify-start gap-4">
          <div className="transition-fx border-[1px] border-brand-grayish p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark hover:px-6">
            {button1text}
          </div>
          {button2text && (
            <div className="transition-fx border-[1px] border-brand-grayish p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark hover:px-6">
              {button2text}
            </div>
          )}
        </div>
        {hovered && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
              fill="black"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default AssetCardLight;
