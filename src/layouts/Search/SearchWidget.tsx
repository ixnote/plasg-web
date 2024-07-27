"use client";
import ArticleCard from "@/components/ArticleCard";
import PaginationComponent from "@/components/Pagination";
import { useRouter } from "next/navigation";
import React from "react";

function SearchWidget({
  pagination,
  data,
  currentPage,
  handlePageChange,
}: any) {
  const router = useRouter();

  return (
    <div className="py-[100px] bg-brand-main flex gap-8 flex-col p-5">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1500px] mx-auto w-full">
        {data?.map((item: any) => (
          <ArticleCard
            key={item?.id}
            data={item}
            onclick={() => router.push(`search/${item?.id}`)}
          />
        ))}
      </span>
      <span className=" ">
        <PaginationComponent
          totalPages={pagination?.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </span>
    </div>
  );
}

export default SearchWidget;
