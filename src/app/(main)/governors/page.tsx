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

function Governors() {
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
          title={" Plateau State Governors"}
          description={
            "Meet all the esteemed governors of Plateau State, past and present."
          }
          baseURL={"government"}
          baseText={"GOVERNMENT"}
          linkText={"GOVERNORS"}
          linkURL={"governors"}
        />
        {/* {legislatives?.data?.data?.data?.length > 0 && (
          <span className="grid lg:grid-cols-3 grid-cols-1 gap-5 gap-y-16 my-16">
            {legislatives?.data?.data?.data?.map((item: any, index: number) => (
              <LegislatureCard data={item} key={index} />
            ))}
          </span>
        )} */}
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

export default Governors;
