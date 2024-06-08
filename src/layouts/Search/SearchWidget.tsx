import ArticleCard from "@/components/ArticleCard";
import React from "react";

function SearchWidget() {
  return (
    <div className="py-[100px] bg-brand-main">
      <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleCard key={index} />
        ))}
      </span>
    </div>
  );
}

export default SearchWidget;
