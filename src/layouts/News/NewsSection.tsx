import { getNews } from "@/api/news/getNews";
import NewsCard from "@/components/NewsCard";
import React from "react";
import { useQuery } from "react-query";

function NewsSection({ active }: any) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getNews", 1, 20, "", "", active, "", ""],
    queryFn: getNews,
    enabled: !!active,
  });
  return (
    <div className="grid lg:grid-cols-4 gap-5 grid-cols-1">
      {data?.data?.data?.news?.length === 0 && (
        <span className="flex items-center justify-center p-8 w-full lg:col-span-4 col-span-1">
          <p className="text-center text-[32px] mx-auto">No Available News</p>
        </span>
      )}
      {data?.data?.data?.news?.slice(0, 4).map((item: any, index: number) => (
        <NewsCard key={index} data={item} id={item.id} />
      ))}
    </div>
  );
}

export default NewsSection;
