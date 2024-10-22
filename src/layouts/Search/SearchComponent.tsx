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
      <span className="flex flex-col gap-8">
        <span className="flex border-b-[2px] border-b-[#ffffff70]">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Looking for something? Start typing..."
            className="w-full flex-grow-0 bg-transparent lg:py-3 py-2 lg:text-[52px] text-[24px] text-white outline-none"
          />
          <Link href={`/search?name=${name}&page=1`} onClick={close}>
            <button className="border border-gray-200 bg-brand-lightYellow text-brand-main lg:w-16 w-12 lg:h-16 h-11 rounded flex justify-center items-center">
              <FiSearch size={32} className="lg:ext-[32px] text-[24px]" />
            </button>
          </Link>
        </span>
      </span>
    </div>
  );
}

export default SearchComponent;
