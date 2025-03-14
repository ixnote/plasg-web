"use client";

import { cn } from "@/utils";
import React, { useState } from "react";

const ButtonComponent = ({
  children,
  onClick,
  disabled,
  withArrow = true,
  className,
  ...otherprops
}: any) => {
  return (
    <button
      className={cn(
        "border-[1px] group-hover:text-brand-main border-brand-grayish flex items-center justify-center gap-4 h-10 px-8 rounded-lg font-normal text-base font-geistsans text-white margin-auto transition-fx cursor-pointer hover:bg-brand-dark  hover:text-white hover:px-6 hover:border-brand-lightYellow text-force",
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
