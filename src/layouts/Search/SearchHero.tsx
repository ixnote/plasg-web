import React from "react";
import { GoHome } from "react-icons/go";

function SearchHero() {
  return (
    <div className="py-[100px] bg-brand-main">
      <span className="max-w-[1200px] mx-auto flex">
        <span className="flex flex-col gap-8">
          <span className="uppercase text-white opacity-80 font-semibold flex items-center gap-2 text-[14px]">
            <GoHome />/<p>Search</p>/<p>SEARCH RESULTS</p>
          </span>
          <p className="text-[52px] text-white font-medium max-w-[800px] leading-[56px]">
            Results Found for "Driver's License"
          </p>
        </span>
      </span>
    </div>
  );
}

export default SearchHero;
