"use client";
import ArticleCard from "@/components/ArticleCard";
import ButtonComponent from "@/components/Button";
import PaginationComponent from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchWidget() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-[100px] bg-brand-main flex gap-8 flex-col p-5">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleCard
            key={index}
            onclick={() => router.push(`search/${item}`)}
          />
        ))}
      </span>
      <span className=" ">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </span>
      <span className="bg-brand-secondary max-w-[1200px] mx-auto w-full p-6 rounded-2xl flex justify-between flex-wrap gap-4 items-center">
        <p className="text-[18px] font-medium text-brand-main m-0">
          Did you find what you were looking for?
        </p>
        <span className="flex gap-2 ">
          <ButtonComponent className={"border-gray-600"}>Yes</ButtonComponent>
          <ButtonComponent className={"border-gray-600"}>No</ButtonComponent>
        </span>
      </span>
    </div>
  );
}

export default SearchWidget;
