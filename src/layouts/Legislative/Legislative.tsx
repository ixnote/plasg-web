"use client";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import ArticleImage from "@/assets/imgs/img.png";
import LegislatureCard from "@/components/LegislatureCard";
import { handleScrollDown } from "@/utils/handleScrollDown";
import { IoArrowDownOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { getLegislatives } from "@/api/mda/getLegislatives";
import PaginationComponent from "@/components/Pagination";
import SectionHeader from "@/components/SectionHeader";
import governmentHouse from "@/assets/imgs/government/government_house.png";

function Legislative() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const article = {
    image: ArticleImage,
    name: "Hon. Gabriel Dewan",
    position: "Speaker ",
  };

  const {
    data: legislatives,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getLegislatives"],
    queryFn: getLegislatives,
    onSuccess: (result: any) => {
      // console.log("🚀 ~ Legislative ~ result:", result);
      setCurrentPage(result?.data?.data?.pagination?.currentPage);
    },
  });

  // console.log("users :>> ", legislatives);
  return (
    // <div className="pt-[200px] p-5 bg-red-500">
    //   <span className="max-w-[1200px] mx-auto flex flex-col bg-green-500">
    <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
        <SectionHeader
          title={" Plateau State House of Assembly Members"}
          description={
            "Meet the esteemed legislators who champion the interests of our community, shaping policies and laws that impact our lives."
          }
          baseURL={"government"}
          baseText={"GOVERNMENT"}
          linkText={"LEGISLATIVE"}
          linkURL={"legislative"}
        />
        {/* <span className="flex flex-col gap-8 mb-10">
          <span className="uppercase text-[#0000000] opacity-80 font-light flex items-center gap-2 text-[14px]">
            <GoHome size={18} />/<p>GOVERNMENT</p>/<p>LEGISLATIVE</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
              Plateau State House of Assembly Members
            </p>
            <span className="col-span-2 flex flex-col gap-6">
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
                Meet the esteemed legislators who champion the interests of our
                community, shaping policies and laws that impact our lives.
              </p>
              <button
                onClick={() => handleScrollDown()}
                className="h-10 px-0 rounded-sm bg-white  w-fit flex items-center justify-center gap-2 animate-bounce"
              >
                <IoArrowDownOutline size={32} />
              </button>
            </span>
          </span>
        </span> */}
        {legislatives?.data?.data?.data?.length > 0 && (
          <span className="grid lg:grid-cols-3 grid-cols-1 gap-5 gap-y-16 my-16">
            {legislatives?.data?.data?.data?.map((item: any, index: number) => (
              <LegislatureCard data={item} key={index} />
            ))}
          </span>
        )}
        <PaginationComponent
          lightMode={true}
          totalPages={legislatives?.data?.data?.pagination?.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </span>
    </div>
  );
}

export default Legislative;
