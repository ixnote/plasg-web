"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArticleImage from "@/assets/imgs/img.png";
import NewsCard from "@/components/NewsCard";
import { useQuery } from "react-query";
import { getNews } from "@/api/news/getNews";
import { cn } from "@/utils";
import { useMediaQuery } from "@mantine/hooks";

function News() {
  const links = [
    { name: "General", id: "fbdfbssf" },
    { name: "National", id: "adcasdkj" },
    { name: "International", id: "nkwjwns" },
    { name: "Politics", id: "sjsksns" },
    { name: "Regulation", id: "dshjdsdkd" },
    { name: "Business", id: "ansksdjee" },
    { name: "Finance", id: "nsjsiee" },
    { name: "Health Care", id: "mxkxhdaw" },
    { name: "Technology", id: "yhsowhje" },
    { name: "Security", id: "hskssisi" },
    { name: "Media", id: "dgsjswnejs" },
    { name: "Administration", id: "xbsjxbjs" },
    { name: "Sports", id: "hdjdhsksn" },
    { name: "Entertainment", id: "sksowjejs" },
    { name: "Finance", id: "hksnskwns" },
  ];

  const matches = useMediaQuery("(max-width: 768px)");

  const [active, setActive] = useState(links[0]);

  const news = [
    {
      image: ArticleImage,
      title:
        "Gov. Mutfwang Partners with International NGOs to Address Humanitarian Needs of Vulnerable People",
      category: "Welfare ",
    },
  ];

  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["getNews", page, 20, "", "", "", "", ""],
    queryFn: getNews,
  });

  console.log("data :>> ", data);

  // const dialogRef = useRef(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const globalListener = (e: any) => {
    if (dialogRef && dialogRef?.current?.contains(e.target)) return;
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("click", globalListener);
    }
    return () => {
      document.removeEventListener("click", globalListener);
    };
  }, [show]);

  return (
    <div className="pt-[120px] p-5">
      <span className="max-w-[1360px] mx-auto flex flex-col gap-5">
        {matches ? (
          <span className="relative z-50">
            <span
              className="bg-white  rounded-xl px-4 py-2 uppercase border cursor-pointer w-fit"
              ref={dialogRef}
              onClick={() => setShow(true)}
            >
              categories
            </span>
            {show && (
              <div className="w-full bg-brand-main p-8 rounded-3xl absolute mt-4">
                <p className="text-[32px] text-white font-medium capitalize mb-6">
                  Categories
                </p>
                <span className="flex flex-col gap-4">
                  {links.map((item) => (
                    <p
                      className={cn(
                        "capitalize text-[18px] cursor-pointer text-white"
                      )}
                      onClick={() => setActive(item)}
                      key={item.id}
                    >
                      {item.name}
                    </p>
                  ))}
                </span>
              </div>
            )}
          </span>
        ) : (
          <span className="w-full flex gap-6 bg-white  rounded-xl">
            <span className="flex gap-4 border justify-between w-full rounded-xl relative">
              {links.slice(0, 9).map((item, index) => (
                <p
                  className={cn("px-4 py-2 uppercase border-r cursor-pointer", {
                    "bg-brand-main text-white": active?.id === item.id,
                    "rounded-l-xl": index === 0,
                  })}
                  onClick={() => setActive(item)}
                  key={item.id}
                >
                  {item.name}
                </p>
              ))}

              <p className="px-4 py-2 pr-6 uppercase cursor-pointer group">
                sell all
                <div className="group-hover:block hidden absolute w-full left-0 pt-4 z-40">
                  <div className="w-full bg-brand-main p-8 rounded-3xl ">
                    <p className="text-[32px] text-white font-medium capitalize mb-6">
                      Categories
                    </p>
                    <span className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                      {[1, 2, 3, 4].map((item, index) => (
                        <span key={index} className="flex flex-col gap-4">
                          <p className="text-[24px] text-white font-medium capitalize">
                            Governance
                          </p>
                          {links.slice(0, 6).map((item) => (
                            <p
                              className={cn(
                                "capitalize text-[18px] cursor-pointer text-white"
                              )}
                              onClick={() => setActive(item)}
                              key={item.id}
                            >
                              {item.name}
                            </p>
                          ))}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </p>
            </span>
          </span>
        )}
        <p className="text-[32px] text-brand-main font-medium">
          Today’s Headlines
        </p>
        <span className="flex-grow grid lg:grid-cols-4 gap-5 grid-cols-1 w-full">
          {matches ? (
            <>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <NewsCard key={index} data={news[0]} />
              ))}
            </>
          ) : (
            <>
              <span className="col-span-3 flex w-full  items-start bg-white border border-gray-200 h-[350px]">
                <span className="w-full h-full max-w-[650px] aspect-[11/7] object-cover bg-[#588065] image-container ">
                  <Image
                    src={data?.data?.data?.news[0]?.image}
                    alt=""
                    width={500}
                    height={300}
                    className="w-full h-full max-w-[650px] aspect-[11/7] object-cover bg-[#588065] zoom-out-image"
                  />
                </span>
                <span className="p-5 flex flex-col justify-between h-full flex-grow max-w-[40%]">
                  <p className="text-[20px] text-brand-main font-medium max-w-[800px] leading-[28px] lg:col-span-3 col-span-2 ">
                    {news[0].title}
                  </p>
                  <span className="flex gap-5">
                    <p className="pr-6 border-r-[1px] border-r-gray-300">Now</p>
                    <span className="px-4 rounded-lg text-white bg-brand-main py-1">
                      {news[0].category}
                    </span>
                  </span>
                </span>
              </span>
              {data?.data?.data?.news?.map((item: any, index: number) => (
                <NewsCard key={index} data={news[0]} id={item.id} />
              ))}
            </>
          )}
        </span>
      </span>
    </div>
  );
}

export default News;
