"use client";
<<<<<<< HEAD
import ArticleCard from "@/components/ArticleCard";
import ButtonComponent from "@/components/Button";
import PaginationComponent from "@/components/Pagination";
import React, { useState } from "react";

function SearchWidget() {
=======
import { searchResources } from "@/api/mda/searchResources";
import ArticleCard from "@/components/ArticleCard";
import ButtonComponent from "@/components/Button";
import PaginationComponent from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useGeneralContext } from "../../../context/GenralContext";

function SearchWidget() {
  const router = useRouter();
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
<<<<<<< HEAD

  return (
    <div className="py-[100px] bg-brand-main flex gap-8 flex-col">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleCard key={index} />
=======
  const { name, setName }: any = useGeneralContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchResources", name],
    queryFn: searchResources,
  });

  console.log("data :>> ", data);
  return (
    <div className="py-[100px] bg-brand-main flex gap-8 flex-col p-5">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleCard
            key={index}
            onclick={() => router.push(`search/${item}`)}
          />
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
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
