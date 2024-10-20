"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArticleImage from "@/assets/imgs/img.png";
import NewsCard from "@/components/NewsCard";
import { useQuery } from "react-query";
import { getNews } from "@/api/news/getNews";
import { cn } from "@/utils";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { getNewsTags } from "@/api/news/getNewsTags";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "@mantine/core";

function News() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const current_page = searchParams.get("page");

  const matches = useMediaQuery("(max-width: 768px)");

  const [active, setActive] = useState<any>("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (tag) {
      setActive(tag);
    }
    if (current_page) {
      setPage(page);
    }
  }, [tag, current_page]);

  const news = [
    {
      image: ArticleImage,
      title:
        "Gov. Mutfwang Partners with International NGOs to Address Humanitarian Needs of Vulnerable People",
      category: "Welfare ",
    },
  ];

  const { data: tags } = useQuery({
    queryKey: ["getNewsTags"],
    queryFn: getNewsTags,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["getNews", page, 20, "", "", active, "", ""],
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

  const handlePageChange = (item: any) => {
    setActive(item?.id);
    router.push(`/news?tag=${item?.id}&page=${page}`);
  };
  const handlePageDefault = () => {
    setActive("");
    router.push(`/news?page=${page}`);
  };

  return (
    <div className="pt-[120px] p-5 text-brand-dark">
      <span className="max-w-[1500px] mx-auto flex flex-col gap-5">
        {matches ? (
          <span className="relative z-50">
            <span
              className="bg-white rounded-xl px-4 py-2 uppercase border cursor-pointer w-fit"
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
                  {tags?.data?.data?.map((item: any) => (
                    <p
                      className={cn(
                        "capitalize text-[18px] cursor-pointer text-white"
                      )}
                      onClick={() => handlePageChange(item)}
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
              {tags?.data?.data?.slice(0, 9).map((item: any, index: number) => (
                <p
                  className={cn("px-4 py-2 uppercase border-r cursor-pointer", {
                    "bg-brand-main text-white": active === item.id,
                    "rounded-l-xl": index === 0,
                  })}
                  onClick={() => handlePageChange(item)}
                  key={item.id}
                >
                  {item.name}
                </p>
              ))}

              <span className="px-4 py-2 pr-6 uppercase cursor-pointer group">
                <span className="text-brand-main" onClick={handlePageDefault}>
                  see all
                </span>
                <div className="group-hover:block hidden absolute w-full left-0 pt-4 z-40">
                  <div className="w-full bg-brand-main p-8 rounded-3xl ">
                    <p className="text-[32px] text-white font-medium capitalize mb-6">
                      Categories
                    </p>
                    <span className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                      {[1, 2, 3, 4].map((item, index) => (
                        <span key={index} className="flex flex-col gap-4">
                          <p className="text-[24px] text-white font-medium capitalize">
                            Categories
                          </p>
                          {tags?.data?.data?.slice(0, 6).map((item: any) => (
                            <p
                              className={cn(
                                "capitalize text-[18px] cursor-pointer text-white"
                              )}
                              onClick={() => handlePageChange(item)}
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
              </span>
            </span>
          </span>
        )}
        {/* {newsTags.length > 0
          ? newsTags?.map(({ item, i }: any) => (
              <span key={i}>{item?.type}</span>
            ))
          : "Mehhh"}
        {newsTags &&
          newsTags?.map(({ item, i }: any) => (
            <span key={i}>{item?.name || "trese"}</span>
          ))}
        <span>{newsTags[2]?.name}</span> */}
        <p className="text-[32px] text-brand-main font-medium">
          Today’s Headlines
        </p>
        <span className="flex-grow grid lg:grid-cols-4 gap-5 grid-cols-1 w-full">
          {matches ? (
            <>
              {data?.data?.data?.news.map((item: any, index: number) => (
                // <NewsCard key={index} data={news[0]} />
                <NewsCard key={index} data={item} id={item.id} />
              ))}
            </>
          ) : (
            <>
              {data?.data?.data?.news.length > 0 ? (
                <>
                  <Link
                    // href={`/news/${data?.data?.data?.news[0]?.id}`}
                    href={`/news/one?id=${data?.data?.data?.news[0]?.id}`}
                    className="col-span-3"
                  >
                    <span className=" flex w-full  items-start bg-white border border-gray-200 h-[350px]">
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
                          {data?.data?.data?.news[0]?.headline}
                        </p>
                        <span className="text-brand-dark font-geistsans font-light text-sm">
                          {data?.data?.data?.news[0]?.description?.slice(
                            0,
                            200
                          )}
                          {data?.data?.data?.news[0]?.description?.length >
                            200 && "..."}
                        </span>
                        <span className="flex gap-5 items-center">
                          <p className="pr-6 border-r-[1px] text-brand-dark/70 border-r-gray-300">
                            {formatDate(data?.data?.data?.news[0]?.updatedAt)}
                          </p>
                          {data?.data?.data?.news[0]?.tags[0]?.name && (
                            <span className="px-4 rounded-lg text-white bg-brand-main py-1">
                              {data?.data?.data?.news[0]?.tags[0]?.name}
                            </span>
                          )}
                        </span>
                      </span>
                    </span>
                  </Link>
                  {data?.data?.data?.news
                    ?.slice(1)
                    .map((item: any, index: number) => (
                      <NewsCard key={index} data={item} id={item.id} />
                    ))}
                </>
              ) : isLoading ? (
                <>
                  <span className="flex items-center justify-center p-8 w-full lg:col-span-4 col-span-1">
                    <Loader color="black" size={28} />
                  </span>
                </>
              ) : (
                <>
                  <span className="flex items-center justify-center p-8 w-full lg:col-span-4 col-span-1">
                    <p className="text-center text-[32px] mx-auto">
                      No Available News
                    </p>
                  </span>
                </>
              )}
            </>
          )}
        </span>
      </span>
    </div>
  );
}

export default News;
