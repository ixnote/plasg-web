import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function SearchComponent({ close }) {
  const products = [
    "2023 Financial Report",
    "Driver's License",
    "TIN Application",
    "Tourism Policy",
    "eProcurement",
  ];
  return (
    <div className="flex flex-col gap-[200px]">
      <button
        className="border border-gray-200 bg-[#ffffff30] w-[76px] h-16 rounded flex justify-center items-center"
        onClick={close}
      >
        <IoMdClose color="white" size={32} />
      </button>
      <span className="flex flex-col gap-8">
        <span className="flex border-b-[2px] border-b-[#ffffff70]">
          <input
            type="text"
            placeholder="Looking for something? Start typing..."
            className="w-full flex-grow-0 bg-transparent py-3 text-[52px] "
          />
          <button className="border border-gray-200 bg-brand-lightYellow text-brand-main w-16 h-16 rounded flex justify-center items-center">
            <FiSearch size={32} />
          </button>
        </span>
        <span className="flex items-center gap-20">
          <span className="uppercase text-white opacity-80 font-light flex items-center gap-2 text-[14px]">
            <p>TOP SEARCHES:</p>
          </span>
          <span className="flex gap-8 flex-wrap">
            {products?.map((item, index) => (
              <button
                key={index}
                className="text-white border border-[#ffffff50] px-2 py-1 text-[14px] opacity-80 font-light"
              >
                {item}
              </button>
            ))}
          </span>
        </span>
      </span>
    </div>
  );
}

export default SearchComponent;
