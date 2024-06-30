"use client";

import React, { useState } from "react";

const ButtonDark = ({ text, width }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={
        "btn-fx transition-fx border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-white margin-auto  cursor-pointer hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow" +
        ` lg:w-[${width}]`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}{" "}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="svg-path"
          d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
          fill={hovered ? "#00000080" : "#D1D5DB"}
        />
      </svg>
    </div>
  );
};

export default ButtonDark;
