import React from "react";

const SubsectionHeader = ({ left, right, body }: any) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-4 lg:flex-row lg:gap-0">
        <div className="w-full font-geistmono flex items-start text-brand-dark lg:w-[20%]">
          {left}
        </div>
        <div
          className={
            body
              ? "w-full text-brand-dark/70 font-normal text-lg flex items-start font-geistsans lg:w-[70%]"
              : "w-full text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px] lg:w-[80%]"
          }
        >
          {right}
        </div>
      </div>
    </>
  );
};

export default SubsectionHeader;
