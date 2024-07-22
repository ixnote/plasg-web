"use client";
import ArticleCard from "@/components/ArticleCard";
import PaginationComponent from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useGeneralContext } from "../../../context/GenralContext";
import { getResources } from "@/api/mda/getResources";

function SearchWidget() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const { name, setName }: any = useGeneralContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["getResources", name, currentPage, 20],
    queryFn: getResources,
    onSuccess: (result: any) => {
      setCurrentPage(result?.data?.data?.pagination?.currentPage);
    },
  });

  console.log("data :>> ", data);
  return (
    <div className="py-[100px] bg-brand-main flex gap-8 flex-col p-5">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1500px] mx-auto w-full">
        {data?.data?.data?.resources?.map((item: any) => (
          <ArticleCard
            key={item?.id}
            data={item}
            onclick={() => router.push(`search/${item?.id}`)}
          />
        ))}
      </span>
      <span className=" ">
        <PaginationComponent
          totalPages={data?.data?.data?.pagination?.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </span>
    </div>
  );
}

export default SearchWidget;
