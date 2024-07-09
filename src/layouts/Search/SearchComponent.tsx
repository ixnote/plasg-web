import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useGeneralContext } from "../../../context/GenralContext";
import Link from "next/link";

function SearchComponent({ close }: any) {
  const products = [
    "2023 Financial Report",
    "Driver's License",
    "TIN Application",
    "Tourism Policy",
    "eProcurement",
  ];

  const { name, setName }: any = useGeneralContext();

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Looking for something? Start typing..."
            className="w-full flex-grow-0 bg-transparent lg:py-3 py-2 lg:text-[52px] text-[24px] text-white"
          />
          <Link href={`/search?name=${name}`} onClick={close}>
            <button className="border border-gray-200 bg-brand-lightYellow text-brand-main lg:w-16 w-12 lg:h-16 h-11 rounded flex justify-center items-center">
              <FiSearch size={32} className="lg:ext-[32px] text-[24px]" />
            </button>
          </Link>
        </span>
        <span className="flex items-center lg:gap-20 gap-6 flex-wrap">
          <span className="uppercase text-white opacity-80 font-light flex items-center gap-2 text-[14px]">
            <p>TOP SEARCHES:</p>
          </span>
          <span className="flex lg:gap-8 gap-4 flex-wrap">
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
