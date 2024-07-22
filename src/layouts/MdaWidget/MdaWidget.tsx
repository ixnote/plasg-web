"use client";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { Divider, Loader } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import PaginationComponent from "@/components/Pagination";
import { handleScrollDown } from "@/utils/handleScrollDown";
import { useQuery } from "react-query";
import { getMdas } from "@/api/mda/getMdas";
import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import SectionHeader from "@/components/SectionHeader";

function MdaWidget() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const [name, setName] = useState("");
  const {
    data: mda,
    isLoading: mdaIsLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getMdas", currentPage, 20, name],
    queryFn: getMdas,
    onSuccess: (result: any) => {
      setCurrentPage(result?.data?.data?.pagination?.currentPage);
    },
  });

  const handleSearch = (e: any) => {
    e.preventDefault();
    refetch();
  };

  return (
    // <div className="pt-[200px] p-5">
    //   <span className="max-w-[1200px] mx-auto flex flex-col">
    //     <span className="flex flex-col gap-8 mb-10">
    //       <span className="uppercase text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px] flex-wrap">
    //         <GoHome size={18} />/<p>GOVERNMENT</p>/
    //         <p>MINISTRIES, DEPARTMENTS & AGENCIES</p>
    //       </span>
    //       <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
    //         <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
    //           Ministries, Departments & Agencies
    //         </p>
    //         <span className="col-span-2 flex flex-col gap-6">
    //           <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
    //             Plateau State's Ministries, Departments, and Agencies (MDAs) are
    //             the driving force behind our community's progress. Discover the
    //             array of dedicated entities committed to serving you. Explore
    //             essential public services, strategic initiatives, and innovative
    //             solutions aimed at enhancing your well-being and prosperity
    //           </p>
    //           <button
    //             onClick={() => handleScrollDown()}
    //             className="h-10 px-0 rounded-sm bg-white  w-fit flex items-center justify-center gap-2"
    //           >
    //             <IoArrowDownOutline size={32} />
    //           </button>
    //         </span>
    //       </span>
    //     </span>
    <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
        <SectionHeader
          title={"Ministries, Departments & Agencies"}
          description={
            "Plateau State's Ministries, Departments, and Agencies (MDAs) are the driving force behind our community's progress. Discover the array of dedicated entities committed to serving you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity"
          }
          baseURL={"government"}
          baseText={"GOVERNMENT"}
          linkText={"MINISTRIES, DEPARTMENTS & AGENCIES"}
          linkURL={"mdas"}
        />
        <span className="flex flex-col gap-8 mb-16">
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <span className="lg:col-span-3 col-span-2">
              <p className="text-[40px] text-brand-main font-medium max-w-[800px] leading-[48px]">
                List of MDAs
              </p>
            </span>
            <span className="flex border-b-[1px] border-b-gray-300 col-span-2">
              <input
                type="text"
                placeholder="Find MDA..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full flex-grow-0 bg-transparent py-2 text-[28px] outline-none placeholder:text-[#D1D5DB]"
              />
              <button
                onClick={handleSearch}
                className="flex justify-center items-center bg-brand-lightYellow text-brand-main w-[48px] h-[48px] p-0 m-0 rounded "
              >
                <FiSearch size={24} />
              </button>
            </span>
          </span>
          <Divider />
          <span className="flex flex-col">
            {mdaIsLoading && (
              <span className="flex items-center justify-center w-full py-8 px-5">
                <Loader color="black" />
              </span>
            )}
            <>
              {error && (
                <span className="flex items-center justify-center w-full py-8 px-5">
                  <p>Unable to fetch MDAs</p>
                </span>
              )}
            </>
            {mda && (
              <>
                {mda?.data?.data?.mdas?.map((item: any) => (
                  <span
                    key={item?.id}
                    className="border-b-[1px] border-b-gray-300 cursor-pointer flex w-full"
                  >
                    <Link
                      href={`/mdas/${item?.id}`}
                      className="w-full flex items-center justify-between"
                    >
                      <p className="lg:text-[40px] text-[24px] lg:text-gray-400 text-gray-600 font-medium  py-12 whitespace-nowrap overflow-hidden text-ellipsis flex-grow max-w-[85%]">
                        {item?.name}
                      </p>
                      <button className="text-gray-300 border-none hover:bg-none px-0 block lg:hidden">
                        <MdOutlineArrowOutward size={28} />
                      </button>
                    </Link>
                  </span>
                ))}
              </>
            )}
          </span>
          <PaginationComponent
            lightMode={true}
            totalPages={mda?.data?.data?.pagination?.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </span>
      </span>
    </div>
  );
}

export default MdaWidget;
