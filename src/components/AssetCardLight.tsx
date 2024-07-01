"use client";

import React, { useState } from "react";

const AssetCardLight = ({
  logo,
  logoText,
  title,
  byText,
  description,
  updated,
  button1text,
  button2text,
}: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[540px] w-[49%] bg-[#E5E7EB] p-8 mb-2 rounded-2xl flex flex-col items-start justify-start gap-8 transition-fx cursor-pointer hover:bg-brand-lightYellow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top */}
      <div className="flex flex-col gap-16">
        {/* logo part */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2 text-[#588065]">
            {logo}
            <span>{logoText}</span>
          </div>
          {updated && (
            <span className="font-geistmono text-brand-grayish font-light text-sm">
              {logoText}
            </span>
          )}
        </div>
        {/* title part */}
        <div className="flex flex-col gap-8">
          <div className="font-geistsans font-medium text-3xl text-brand-main flex flex-col gap-2 h-[60px]">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {byText}
              </span>
            )}
          </div>
          <div className="font-geistsans font-normal text-lg text-brand-main h-[170px]">
            {description}
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
          <div className="border-[1px] border-brand-grayish p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer transition-fx hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark">
            {button1text}
          </div>
          {button2text && (
            <div className="border-[1px] border-brand-grayish p-[10px] rounded-lg w-[134px] flex items-center justify-center text-brand-main font-normal text-sm bg-transparent font-geistsans cursor-pointer transition-fx hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark">
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
