import React from "react";
import { GoHome } from "react-icons/go";

function SearchHero() {
  return (
    <div className="pt-[200px] bg-brand-main p-5">
      <span className="max-w-[1200px] mx-auto flex">
        <span className="flex flex-col gap-8">
          <span className="uppercase text-white opacity-80 font-medium flex items-center gap-2 text-[14px]">
            <GoHome size={18} />/<p>Search</p>/<p>SEARCH RESULTS</p>
          </span>
          <p className="lg:text-[52px] text-[40px] text-white font-medium max-w-[800px] lg:leading-[56px] leading-[44px]">
            Results Found for "Driver's License"
          </p>
        </span>
      </span>
    </div>
  );
}

export default SearchHero;
