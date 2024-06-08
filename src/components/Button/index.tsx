"use client";

import React, { useState } from "react";

const ButtonComponent = ({
  children,
  onClick,
  disabled,
  withArrow = true,
  ...otherprops
}: any) => {
  return (
    <button
      className="border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-main margin-auto transition-fx cursor-pointer hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow"
      disabled={disabled}
      onClick={onClick}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
