"use client";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Divider } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import PaginationComponent from "@/components/Pagination";
import { handleScrollDown } from "@/utils/handleScrollDown";
import { useQuery } from "react-query";
import { getMdas } from "@/api/mda/getMdas";

function MdaWidget() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const {
    data: mda,
    isLoading: mdaIsLoading,
    error,
  } = useQuery({
    queryKey: ["getMdas"],
    queryFn: getMdas,
  });

  console.log("mda :>> ", mda);

  return (
    <div className="pt-[200px] p-5">
      <span className="max-w-[1200px] mx-auto flex flex-col">
        <span className="flex flex-col gap-8 mb-10">
          <span className="uppercase text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px] flex-wrap">
            <GoHome size={18} />/<p>GOVERNMENT</p>/
            <p>MINISTRIES, DEPARTMENTS & AGENCIES</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
              Ministries, Departments & Agencies
            </p>
            <span className="col-span-2 flex flex-col gap-6">
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
                Plateau State's Ministries, Departments, and Agencies (MDAs) are
                the driving force behind our community's progress. Discover the
                array of dedicated entities committed to serving you. Explore
                essential public services, strategic initiatives, and innovative
                solutions aimed at enhancing your well-being and prosperity
              </p>
              <button
                onClick={handleScrollDown}
                className="h-10 px-8 rounded-sm bg-white border w-fit border-gray-300 flex items-center justify-center gap-2"
              >
                Scroll down <IoIosArrowRoundDown />
              </button>
            </span>
          </span>
        </span>
        <span className="flex flex-col gap-8 my-16">
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <span className="lg:col-span-3 col-span-2">
              <p className="text-[40px] text-brand-main font-medium max-w-[800px] leading-[48px]">
                Name of MDA
              </p>
            </span>
            <span className="flex border-b-[1px] border-b-gray-300 col-span-2">
              <input
                type="text"
                placeholder="Find MDA..."
                className="w-full flex-grow-0 bg-transparent py-2 text-[28px] outline-none"
              />
              <button className="border border-gray-200 bg-brand-lightYellow text-brand-main w-12 h-12 rounded flex justify-center items-center">
                <FiSearch size={24} />
              </button>
            </span>
          </span>
          <Divider />
          <span className="flex flex-col">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <span
                key={index}
                className="border-b-[1px] border-b-gray-300 cursor-pointer"
              >
                <p className="lg:text-[40px] text-[24px] text-gray-400 font-medium max-w-[800px] py-12 ">
                  Adult & Non-Formal Education Directorate
                </p>
              </span>
            ))}
          </span>
          <PaginationComponent
            lightMode={true}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </span>
      </span>
    </div>
  );
}

export default MdaWidget;
