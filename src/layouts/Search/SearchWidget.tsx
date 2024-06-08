import ArticleCard from "@/components/ArticleCard";
import React from "react";

function SearchWidget() {
  return (
    <div className="py-[100px] bg-brand-main">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        <ArticleCard />
      </span>
    </div>
  );
}

export default SearchWidget;
