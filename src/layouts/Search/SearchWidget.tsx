"use client";
import ArticleCard from "@/components/ArticleCard";
import { Pagination } from "@mantine/core";
import React, { useState } from "react";

function SearchWidget() {
  const [activePage, setPage] = useState(1);

  return (
    <div className="py-[100px] bg-brand-main">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleCard key={index} />
        ))}
      </span>
      <span className="flex justify-end max-w-[1200px] mx-auto">
        <Pagination
          value={activePage}
          onChange={setPage}
          total={10}
          className="text-brand-main"
        />
      </span>
    </div>
  );
}

export default SearchWidget;
