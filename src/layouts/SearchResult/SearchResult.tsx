"use client";
import React from "react";
import { GoHome } from "react-icons/go";
import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { articleData } from "@/utils/mockArticle";
import { Divider } from "@mantine/core";
import ArticleImage from "@/assets/imgs/article1png.png";
import ArticleCardTwo from "@/components/ArticleCardTwo";
import { useQuery } from "react-query";
import { getResource } from "@/api/mda/getResource";
import { usePathname } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SearchResult() {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const id = pathSegments[pathSegments.length - 1];

  const data = articleData;
  const article = {
    image: ArticleImage,
    title: "Guide to Renewing Your Vehicle Registration",
    text: "Learn the steps, required documents, fees, and timelines renewing your vehicle registration in Plateau State. Simplify he process with our comprehensive guide.",
  };

  const {
    data: resource,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getResource", id],
    queryFn: getResource,
    enabled: !!id,
  });

  console.log("resource :>> ", resource);
  return (
    // <div className="pt-[200px] p-5">
    //   <span className="max-w-[1200px] mx-auto flex flex-col">
    //     <span className="flex flex-col gap-8">
    //       <span className="uppercase text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px] flex-wrap">
    //         <Link href={`/`}>
    //           <GoHome size={18} />
    //         </Link>
    //         /<p>Search</p>/<p>SEARCH RESULTS</p>/<p>ARTICLES</p>
    //       </span>
    <div className="min-h-screen  max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
        <div className="flex flex-col py-24 pt-[180px] gap-4 lg:gap-16">
          <span className="flex flex-col gap-8 mb-10">
            <span className="uppercase text-brand-dark opacity-80 font-medium flex items-center gap-2 text-[14px]">
              <GoHome
                size={18}
                onClick={() => router.push(`/`)}
                className="transition-fx cursor-pointer hover:text-brand-main"
              />
              /
              <p
                className="transition-fx cursor-pointer hover:text-brand-main"
                onClick={() => router.push(`/search`)}
              >
                Search
              </p>
              /
              <p
                className="transition-fx cursor-pointer hover:text-brand-main"
                onClick={() => router.push(`/search`)}
              >
                SEARCH RESULTS
              </p>
            </span>
            <button className="h-10 px-8 rounded-full bg-gray-200 border w-fit border-gray-400">
              Guideline
            </button>
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px]">
              {resource?.data?.data?.name}
            </p>
            <span className="text-[#00000080] opacity-80 font-medium flex items-center gap-4 text-[14px] flex-wrap">
              <p>{resource?.data?.data?.name}</p>/
              <p>{formatDate(resource?.data?.data?.updatedAt)}</p>/
              <p>{data?.min}</p>
            </span>
          </span>
        </div>
        <span className="my-8 flex flex-col gap-16">
          {data?.content?.map((item: any, index: any) => (
            <span key={index}>
              {item?.type === "image" && (
                <Image
                  src={item?.image}
                  alt=""
                  width={1200}
                  height={1200}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              )}
              {item?.type === "text" && (
                <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                  <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                    <p>INTRODUCTION</p>
                  </span>
                  <p className="text-[18px] font-normal text-[#00000099] m-0 lg:col-span-4 col-span-1">
                    {resource?.data?.data?.description}
                  </p>
                </span>
              )}
              {item?.type === "heading1" && (
                <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                  <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                    <p>{item?.title}</p>
                  </span>
                  <p className="text-[40px] leading-[40px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1">
                    {item?.text}
                  </p>
                </span>
              )}
            </span>
          ))}
          {data?.subContent?.map((item: any, index: any) => (
            <span key={index}>
              <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                  <p>{item?.title}</p>
                </span>
                <span className="lg:col-span-4 col-span-1 flex flex-col gap-6">
                  <p className="text-[24px] leading-[36px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1">
                    {item?.heading}
                  </p>
                  <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                    {item?.text}
                  </p>
                  <ul>
                    {item?.lists.map((element: any, index: any) => (
                      <li
                        className="list-disc ml-8 pl-3 my-2 text-[#00000099]"
                        key={index}
                      >
                        {element}
                      </li>
                    ))}
                  </ul>
                  {item?.text2 && (
                    <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                      {item?.text2}
                    </p>
                  )}
                  {item?.text3 && (
                    <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                      {item?.text3}
                    </p>
                  )}
                </span>
              </span>
            </span>
          ))}
        </span>
        <span className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <span className="col-span-1"></span>
          <span className="flex gap-3 flex-wrap lg:col-span-4 col-span-1 ">
            {data?.tags?.map((item: any, index: any) => (
              <button
                key={index}
                className="h-10 px-8 rounded-full bg-gray-200 border w-fit border-gray-400"
              >
                {item}
              </button>
            ))}
          </span>
          <span className="col-span-1"></span>
          <span className="text-gray-400 gap-6  lg:col-span-4 col-span-1 flex items-center mt-5">
            <p className="flex items-center text-[14px]">
              <AiOutlineLike size={24} />
              42
            </p>
            <p className="flex items-center text-[14px]">
              <AiOutlineDislike size={24} />
            </p>
            <p className="flex items-center text-[14px]">
              <IoShareOutline size={24} />
            </p>
          </span>
        </span>
        <Divider className="my-12" />
        <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start my-12">
          <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
            <p>RECOMMENDED RESOURCES</p>
          </span>
          <p className="text-[40px] leading-[40px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
            More Helpful Guides and Resources You Might Also Like
          </p>
        </span>
        <span className="grid gap-5 lg:grid-cols-2 grid-cols-1 my-12">
          {[1, 2, 3, 4].map((item, index) => (
            <ArticleCardTwo data={article} key={index} />
          ))}
        </span>
      </span>
    </div>
  );
}

export default SearchResult;
