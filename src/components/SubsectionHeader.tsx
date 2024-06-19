import React from "react";

const SubsectionHeader = ({ left, right }: any) => {
  return (
    <>
      <div className="flex items-start justify-start">
        <div className="w-[20%] font-geistmono flex items-start">{left}</div>
        <div className="w-[80%] text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px]">
          {right}
        </div>
      </div>
    </>
  );
};

export default SubsectionHeader;
