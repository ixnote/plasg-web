"use client";
import React, { useEffect, useMemo, useState } from "react";
import { GoHome } from "react-icons/go";
import { useGeneralContext } from "../../../context/GenralContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { searchResources } from "@/api/mda/searchResources";
import SearchWidget from "./SearchWidget";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiArch } from "react-icons/bi";
import { cn } from "@/utils";
import { formatDate } from "@/utils/formatDate";
import { Group, Loader, ScrollArea } from "@mantine/core";
import PaginationComponent from "@/components/Pagination";

function SearchHero() {
  const { name, setName }: any = useGeneralContext();
  const router = useRouter();

  const tabs = [
    { name: "show all", value: "showAll" },
    { name: "article", value: "articles" },
    { name: "legislative", value: "legislatives" },
    { name: "destination", value: "destinations" },
    { name: "government", value: "government" },
    { name: "mdas", value: "mdas" },
    { name: "news", value: "news" },
  ];
  const [active, setActive] = useState(tabs[0]);
  const [sort, setSort] = useState("newest");

  const searchParams = useSearchParams();
  const searchKey = searchParams.get("name");
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState<any>(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    router.push(`/search?name=${name}&page=${page}`);
  };

  useEffect(() => {
    if (searchKey) {
      setName(searchKey);
    }
    if (page) {
      setCurrentPage(page);
    }
  }, [searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ["searchResources", name, currentPage, 20, ""],
    queryFn: searchResources,
  });

  const [totalPages, setTotalPages] = useState(1);
  const elements = useMemo(() => {
    if (data) {
      const newData = data?.data?.results[active.value]?.data;

      if (active.value === "showAll") {
        setTotalPages(data?.data?.results["articles"]?.pagination?.totalPages);
      } else if (active.value) {
        setTotalPages(
          data?.data?.results[active.value]?.pagination?.totalPages
        );
      }
      return newData;
    }
    return [];
  }, [page, active, data]);

  const handleRoute = (value: any) => {
    if (value?.main_type_tag?.name === "document") {
      window.open(`${value?.link}`, "_blank", "noopener,noreferrer");
    } else if (
      value?.main_type_tag?.name === "service" ||
      value?.main_type_tag?.name === "resource"
    ) {
      router.push(`/search/one?id=${value?.id}`);
    } else if (value?.abbreviation) {
      // router.push(`/mda/one?id=${value?.slug}`);
      router.push(`/mda/one?slug=${value?.slug}`);
    } else if (value?.mda?.name === "News") {
      router.push(`/news/one?id=${value?.id}`);
    } else if (value?.type === "landmark") {
      router.push(`/tourism`);
    }
  };

  console.log("data :>> ", data);

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    // <div className="pt-[200px] bg-brand-main p-5">
    //   <span className="max-w-[1500px] mx-auto flex flex-col gap-20">
    <>
      <div className="pt-[200px] bg-brand-main  max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <span className="flex flex-col gap-8">
            <span className="uppercase text-white opacity-80 font-medium flex items-center gap-2 text-[14px]">
              <GoHome
                size={18}
                onClick={() => router.push(`/`)}
                className="transition-fx cursor-pointer hover:text-brand-secondary"
              />
              /
              <p
                className="transition-fx cursor-pointer hover:text-brand-secondary"
                onClick={() => router.push(`/search`)}
              >
                Search
              </p>
            </span>
            <p className="lg:text-[52px] text-[40px] text-white font-medium max-w-[800px] lg:leading-[56px] leading-[44px]">
              Results Found for "{name}"
            </p>
          </span>
          {/* <span className="flex justify-between w-full gap-5 flex-wrap">
            <span className="flex gap-2 flex-wrap">
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "resources",
                  }
                )}
                onClick={() => setActive("resources")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0.5H5.5C6.32843 0.5 7 1.17157 7 2V5.5C7 6.32843 6.32843 7 5.5 7H2C1.17157 7 0.5 6.32843 0.5 5.5V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                  />
                  <path
                    d="M10.5 0.5H14C14.8284 0.5 15.5 1.17157 15.5 2V5.5C15.5 6.32843 14.8284 7 14 7H10.5C9.67157 7 9 6.32843 9 5.5V2C9 1.17157 9.67157 0.5 10.5 0.5Z"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                  />
                  <path
                    d="M2 9H5.5C6.32843 9 7 9.67157 7 10.5V14C7 14.8284 6.32843 15.5 5.5 15.5H2C1.17157 15.5 0.5 14.8284 0.5 14V10.5C0.5 9.67157 1.17157 9 2 9Z"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                  />
                  <path
                    d="M10.5 9H14C14.8284 9 15.5 9.67157 15.5 10.5V14C15.5 14.8284 14.8284 15.5 14 15.5H10.5C9.67157 15.5 9 14.8284 9 14V10.5C9 9.67157 9.67157 9 10.5 9Z"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                  />
                </svg>

                <p className="uppercase font-semibold">RESOURCES</p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.resources?.resources?.length}
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "news",
                  }
                )}
                onClick={() => setActive("news")}
              >
                <FaRegNewspaper size={16} />
                <p className="uppercase font-semibold">news</p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.news?.news?.length}
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "legislatives",
                  }
                )}
                onClick={() => setActive("legislatives")}
              >
                <BiArch size={16} />
                <p className="uppercase font-semibold">legislatives </p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.legislatives?.legislatives?.length}
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "destinations",
                  }
                )}
                onClick={() => setActive("destinations")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.804 9.78059C6.5768 9.78059 7.204 10.4765 7.204 11.3359V14.4447C7.204 14.8572 7.0565 15.2528 6.79395 15.5445C6.5314 15.8361 6.1753 16 5.804 16H1.4C1.02884 16 0.672861 15.8363 0.410333 15.5448C0.147805 15.2533 0.000212094 14.8579 0 14.4456V11.3368C0 10.4774 0.6272 9.78148 1.4 9.78148L5.804 9.78059ZM14.6 9.78059C15.3728 9.78059 16 10.4765 16 11.3359V14.4447C16 14.8572 15.8525 15.2528 15.5899 15.5445C15.3274 15.8361 14.9713 16 14.6 16H10.196C9.8247 16 9.4686 15.8361 9.20605 15.5445C8.9435 15.2528 8.796 14.8572 8.796 14.4447V11.3359C8.796 10.4765 9.4232 9.78059 10.196 9.78059H14.6ZM5.804 11.1137H1.4C1.34696 11.1137 1.29609 11.1371 1.25858 11.1788C1.22107 11.2204 1.2 11.277 1.2 11.3359V14.4447C1.2 14.5682 1.2896 14.6669 1.4 14.6669H5.804C5.85704 14.6669 5.90791 14.6435 5.94542 14.6018C5.98293 14.5601 6.004 14.5036 6.004 14.4447V11.3359C6.004 11.277 5.98293 11.2204 5.94542 11.1788C5.90791 11.1371 5.85704 11.1137 5.804 11.1137ZM14.6 11.1137H10.196C10.143 11.1137 10.0921 11.1371 10.0546 11.1788C10.0171 11.2204 9.996 11.277 9.996 11.3359V14.4447C9.996 14.5682 10.0856 14.6669 10.196 14.6669H14.6C14.653 14.6669 14.7039 14.6435 14.7414 14.6018C14.7789 14.5601 14.8 14.5036 14.8 14.4447V11.3359C14.8 11.277 14.7789 11.2204 14.7414 11.1788C14.7039 11.1371 14.653 11.1137 14.6 11.1137ZM14.6 0C15.3728 0 16 0.696773 16 1.5553V6.44337C16 6.85586 15.8525 7.25146 15.5899 7.54313C15.3274 7.83481 14.9713 7.99867 14.6 7.99867H1.4C1.0287 7.99867 0.672602 7.83481 0.410051 7.54313C0.1475 7.25146 0 6.85586 0 6.44337V1.5553C1.31237e-05 1.16497 0.132137 0.788919 0.370144 0.501791C0.608151 0.214663 0.93464 0.0374507 1.2848 0.00533248L1.4 0H14.6ZM14.6 1.33311H1.4L1.3544 1.33933C1.31053 1.35075 1.27141 1.37828 1.24339 1.41748C1.21536 1.45668 1.20007 1.50524 1.2 1.5553V6.44337C1.2 6.56602 1.2896 6.66556 1.4 6.66556H14.6C14.653 6.66556 14.7039 6.64215 14.7414 6.60048C14.7789 6.55881 14.8 6.5023 14.8 6.44337V1.5553C14.8 1.49637 14.7789 1.43986 14.7414 1.39819C14.7039 1.35652 14.653 1.33311 14.6 1.33311Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="uppercase font-semibold">destinations</p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.destinations?.destinations?.length}
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "mdas",
                  }
                )}
                onClick={() => setActive("mdas")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1831 13.1427H14.0402V11.9998H14.6116V9.71414H12.326V10.2856H11.1831V9.14271C11.1831 8.99116 11.2433 8.84582 11.3505 8.73865C11.4576 8.63149 11.603 8.57129 11.7545 8.57129H15.1831C15.3346 8.57129 15.48 8.63149 15.5871 8.73865C15.6943 8.84582 15.7545 8.99116 15.7545 9.14271V12.5713C15.7545 12.7228 15.6943 12.8682 15.5871 12.9753C15.48 13.0825 15.3346 13.1427 15.1831 13.1427Z"
                    fill="currentColor"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M12.3256 16.0003H8.89707C8.74552 16.0003 8.60018 15.9401 8.49302 15.8329C8.38585 15.7258 8.32565 15.5804 8.32565 15.4289V12.0003C8.32565 11.8488 8.38585 11.7035 8.49302 11.5963C8.60018 11.4891 8.74552 11.4289 8.89707 11.4289H12.3256C12.4772 11.4289 12.6225 11.4891 12.7297 11.5963C12.8368 11.7035 12.897 11.8488 12.897 12.0003V15.4289C12.897 15.5804 12.8368 15.7258 12.7297 15.8329C12.6225 15.9401 12.4772 16.0003 12.3256 16.0003ZM9.4685 14.8575H11.7542V12.5718H9.4685V14.8575ZM7.1828 10.2049C6.76991 10.0973 6.39547 9.87611 6.10199 9.56639C5.80851 9.25667 5.60776 8.87087 5.52252 8.45279C5.43729 8.03471 5.47099 7.60111 5.61979 7.20122C5.7686 6.80134 6.02656 6.45118 6.36437 6.19053C6.70217 5.92988 7.1063 5.76917 7.53086 5.72665C7.95541 5.68413 8.38338 5.76151 8.76617 5.94999C9.14896 6.13848 9.47123 6.43052 9.69638 6.79296C9.92154 7.15539 10.0406 7.5737 10.0399 8.00038H11.1828C11.1834 7.34656 10.9971 6.70618 10.6458 6.15475C10.2945 5.60333 9.79289 5.16384 9.20005 4.88813C8.60721 4.61241 7.94789 4.51195 7.29984 4.59861C6.65178 4.68526 6.04202 4.9554 5.54244 5.37719C5.04286 5.79898 4.6743 6.35482 4.48022 6.97917C4.28614 7.60352 4.27463 8.27034 4.44704 8.90102C4.61946 9.5317 4.96861 10.0999 5.45333 10.5387C5.93805 10.9775 6.53813 11.2685 7.1828 11.3775V10.2049Z"
                    fill="currentColor"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M15.1207 6.59995L13.8008 7.75994L12.9893 6.94852L14.3665 5.7371L13.0179 3.40569L11.0522 4.06854C10.5916 3.68555 10.0701 3.38232 9.50936 3.1714L9.10365 1.14285H6.40653L6.00082 3.1714C5.43566 3.37656 4.91136 3.68031 4.45226 4.06854L2.49227 3.40569L1.14371 5.7371L2.69799 7.1028C2.59233 7.6943 2.59233 8.29985 2.69799 8.89136L1.14371 10.2628L2.49227 12.5942L4.45797 11.9313C4.91863 12.3143 5.44011 12.6176 6.00082 12.8285L6.40653 14.857H7.18366V15.9999H6.40653C6.14226 15.9997 5.88624 15.9079 5.68204 15.7401C5.47783 15.5724 5.33807 15.3391 5.28654 15.0799L4.99511 13.6399C4.73607 13.5143 4.48596 13.3712 4.24655 13.2113L2.85799 13.6799C2.74 13.7187 2.61647 13.738 2.49227 13.737C2.29151 13.7386 2.09398 13.6864 1.92016 13.586C1.74635 13.4855 1.60256 13.3404 1.50371 13.1656L0.15515 10.8342C0.021772 10.6051 -0.0277907 10.3367 0.0149505 10.075C0.0576916 9.81337 0.190077 9.57471 0.389434 9.39993L1.48657 8.43993C1.47514 8.29136 1.46943 8.14851 1.46943 7.99994C1.46943 7.85137 1.48085 7.70851 1.49228 7.56565L0.389434 6.59995C0.190077 6.42516 0.0576916 6.18651 0.0149505 5.92485C-0.0277907 5.66319 0.021772 5.39481 0.15515 5.16567L1.50371 2.83426C1.60256 2.65952 1.74635 2.51438 1.92016 2.41391C2.09398 2.31344 2.29151 2.26128 2.49227 2.26284C2.61647 2.26189 2.74 2.28119 2.85799 2.31998L4.24083 2.78855C4.48296 2.62992 4.73489 2.48677 4.99511 2.35998L5.28654 0.919993C5.33807 0.660801 5.47783 0.427478 5.68204 0.259739C5.88624 0.092 6.14226 0.000212285 6.40653 0H9.10365C9.36791 0.000212285 9.62394 0.092 9.82814 0.259739C10.0323 0.427478 10.1721 0.660801 10.2236 0.919993L10.5151 2.35998C10.7741 2.48553 11.0242 2.62872 11.2636 2.78855L12.6522 2.31998C12.7702 2.28119 12.8937 2.26189 13.0179 2.26284C13.2187 2.26128 13.4162 2.31344 13.59 2.41391C13.7638 2.51438 13.9076 2.65952 14.0065 2.83426L15.355 5.16567C15.4884 5.39481 15.538 5.66319 15.4952 5.92485C15.4525 6.18651 15.3201 6.42516 15.1207 6.59995Z"
                    fill="currentColor"
                    fill-opacity="0.6"
                  />
                </svg>

                <p className="uppercase font-semibold">mdas</p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.mdas?.mdas?.length}
                </p>
              </div>
              <div
                className={cn(
                  "cursor-pointer hover:bg-[#ffffff30] bg-transparent border border-white w-fit px-6 flex items-center py-2 rounded-lg text-white justify-center gap-5",
                  {
                    "bg-brand-lightYellow text-black border-none":
                      active === "government",
                  }
                )}
                onClick={() => setActive("government")}
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2972 4.17143L10.2972 0.171429C10.1829 0.0571428 10.0686 0 9.89718 0H4.1829C3.55432 0 3.04004 0.514286 3.04004 1.14286V14.8571C3.04004 15.4857 3.55432 16 4.1829 16H13.3258C13.9543 16 14.4686 15.4857 14.4686 14.8571V4.57143C14.4686 4.4 14.4115 4.28571 14.2972 4.17143ZM9.89718 1.37143L13.0972 4.57143H9.89718V1.37143ZM13.3258 14.8571H4.1829V1.14286H8.75432V4.57143C8.75432 5.2 9.26861 5.71429 9.89718 5.71429H13.3258V14.8571Z"
                    fill="currentColor"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M5.32568 11.4286H12.1828V12.5714H5.32568V11.4286ZM5.32568 8H12.1828V9.14286H5.32568V8Z"
                    fill="currentColor"
                    fill-opacity="0.6"
                  />
                </svg>

                <p className="uppercase font-semibold">government</p>
                <p className="ml-[-16px] text-[10px] font-semibold pb-3">
                  {data?.data?.results?.government?.government?.length}
                </p>
              </div>
            </span>

            <div className="cursor-pointer hover:bg-gray-100 bg-brand-lightYellow w-fit px-6 flex items-center py-2 rounded-lg text-black justify-center gap-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33374 9.99792C5.92496 9.99777 6.49945 10.1941 6.9669 10.5561C7.43434 10.9181 7.76821 11.4252 7.91601 11.9976H15.3322C15.4988 11.9973 15.6594 12.0594 15.7825 12.1716C15.9056 12.2838 15.9822 12.4381 15.9973 12.6039C16.0123 12.7698 15.9647 12.9353 15.8638 13.0679C15.7629 13.2004 15.6161 13.2904 15.4522 13.3201L15.3322 13.3307L7.91601 13.3321C7.76871 13.905 7.43505 14.4127 6.96756 14.7752C6.50007 15.1377 5.92531 15.3344 5.33374 15.3344C4.74218 15.3344 4.16741 15.1377 3.69993 14.7752C3.23244 14.4127 2.89878 13.905 2.75147 13.3321L0.667793 13.3307C0.501224 13.331 0.340576 13.269 0.217485 13.1568C0.094393 13.0445 0.0177782 12.8903 0.00272788 12.7244C-0.0123224 12.5585 0.0352823 12.393 0.136167 12.2605C0.237053 12.1279 0.383907 12.0379 0.547811 12.0083L0.667793 11.9976H2.75147C2.89928 11.4252 3.23315 10.9181 3.70059 10.5561C4.16803 10.1941 4.74253 9.99777 5.33374 9.99792ZM5.33374 11.331C4.98018 11.331 4.64109 11.4715 4.39108 11.7215C4.14107 11.9715 4.00061 12.3106 4.00061 12.6642C4.00061 13.0177 4.14107 13.3568 4.39108 13.6068C4.64109 13.8568 4.98018 13.9973 5.33374 13.9973C5.68731 13.9973 6.0264 13.8568 6.27641 13.6068C6.52642 13.3568 6.66687 13.0177 6.66687 12.6642C6.66687 12.3106 6.52642 11.9715 6.27641 11.7215C6.0264 11.4715 5.68731 11.331 5.33374 11.331ZM10.6663 0.666016C11.2575 0.665865 11.832 0.86222 12.2994 1.2242C12.7669 1.58619 13.1007 2.09327 13.2485 2.66571H15.3322C15.4988 2.6654 15.6594 2.72747 15.7825 2.83969C15.9056 2.95192 15.9822 3.10616 15.9973 3.27204C16.0123 3.43793 15.9647 3.60344 15.8638 3.73599C15.7629 3.86853 15.6161 3.9585 15.4522 3.98817L15.3322 3.99884L13.2485 4.00017C13.1012 4.5731 12.7676 5.08077 12.3001 5.44327C11.8326 5.80576 11.2578 6.00249 10.6663 6.00249C10.0747 6.00249 9.49993 5.80576 9.03244 5.44327C8.56495 5.08077 8.23129 4.5731 8.08399 4.00017L0.667793 3.99884C0.501224 3.99914 0.340576 3.93707 0.217485 3.82485C0.094393 3.71263 0.0177782 3.55839 0.00272788 3.3925C-0.0123224 3.22661 0.0352823 3.0611 0.136167 2.92856C0.237053 2.79602 0.383907 2.70605 0.547811 2.67637L0.667793 2.66571H8.08399C8.23179 2.09327 8.56566 1.58619 9.03311 1.2242C9.50055 0.86222 10.075 0.665865 10.6663 0.666016ZM10.6663 1.99914C10.3127 1.99914 9.9736 2.1396 9.72359 2.38961C9.47358 2.63962 9.33313 2.97871 9.33313 3.33227C9.33313 3.68584 9.47358 4.02493 9.72359 4.27494C9.9736 4.52495 10.3127 4.6654 10.6663 4.6654C11.0198 4.6654 11.3589 4.52495 11.6089 4.27494C11.8589 4.02493 11.9994 3.68584 11.9994 3.33227C11.9994 2.97871 11.8589 2.63962 11.6089 2.38961C11.3589 2.1396 11.0198 1.99914 10.6663 1.99914Z"
                  fill="currentColor"
                />
              </svg>

              <p className="uppercase font-semibold">FILTER</p>
              <p className="ml-[-16px] text-[10px] font-semibold pb-3">32</p>
            </div>
          </span> */}
        </span>
      </div>
      <div className="bg-brand-main p-6">
        <div className="max-w-[1540px] mx-auto grid grid-cols-12 gap-8">
          <span className="lg:col-span-2 col-span-12 flex flex-col gap-10">
            <span className="flex flex-col gap-3 ">
              <p className="text-gray-300 font-light text-[16px] whitespace-nowrap">
                FILTER BY:
              </p>
              <ScrollArea>
                <span className="flex lg:flex-col flex-row gap-4">
                  {tabs.map((item, index) => (
                    <span
                      key={index}
                      className={cn("cursor-pointer text-gray-300 ", {
                        "border-b-[3px] border-b-white w-fit text-white":
                          active.value === item.value,
                      })}
                      onClick={() => setActive(item)}
                    >
                      <p
                        className={cn(
                          "text-[20px] font-normal capitalize whitespace-nowrap",
                          {
                            "font-semibold": active.value === item.value,
                          }
                        )}
                      >
                        {item?.name}
                      </p>
                    </span>
                  ))}
                </span>
              </ScrollArea>
            </span>
            <span className="flex flex-col gap-3 ">
              <p className="text-gray-300 font-light text-[16px]">SORT BY:</p>
              <span className="flex gap-4  lg:flex-col flow-row">
                {["newest", "oldest"].map((item, index) => (
                  <span
                    key={index}
                    className={cn("cursor-pointer  text-white", {
                      "border-b-[3px] border-b-white w-fit": sort === item,
                    })}
                    onClick={() => setSort(item)}
                  >
                    <p
                      className={cn("text-[20px] font-normal capitalize", {
                        "font-semibold": sort === item,
                      })}
                    >
                      {item}
                    </p>
                  </span>
                ))}
              </span>
            </span>
          </span>
          <span className="lg:col-span-10 col-span-12 flex flex-col gap-8">
            {data && elements?.length === 0 ? (
              <span className="flex w-full justify-center items-center text-white">
                <p className="capitalize text-[32px]">
                  No Available Result for {name} in {active?.name}
                </p>
              </span>
            ) : (
              ""
            )}
            {elements?.map((item: any, index: number) => (
              <span
                key={index}
                className="grid grid-cols-10 gap-6 pb-8 border-b border-b-gray-500"
              >
                <span className="lg:col-span-2 col-span-10">
                  <p className="text-gray-300 font-light text-[16px] uppercase">
                    {item?.type
                      ? item?.type
                      : item?.main_type_tag?.name
                      ? item?.main_type_tag?.name
                      : item?.abbreviation
                      ? "mda"
                      : item?.mda?.name}
                  </p>
                </span>
                <span
                  className={cn(
                    "lg:col-span-8 col-span-10 flex flex-col gap-4 cursor-pointer",
                    { "cursor-default": item.type === "legislative" }
                  )}
                  onClick={() => handleRoute(item)}
                >
                  <h3 className="text-[22px] text-white font-medium uppercase">
                    {item?.name ? item?.name : item?.headline}
                  </h3>
                  <span className="flex items-center gap-5">
                    <p className="text-[12px] font-light text-gray-400">
                      Uploaded{" "}
                      {item?.date
                        ? formatDate(item?.date)
                        : item?.updatedAt
                        ? formatDate(item?.updatedAt)
                        : formatDate(item?.createdAt)}
                      {/* {formatDate(item?.date) || formatDate(item?.updatedAt)} */}
                    </p>
                    <p className="text-[12px] font-normal text-gray-400 m-0 uppercase">
                      {item?.name}
                    </p>
                  </span>
                  <h3
                    className="text-[16px] text-white font-light uppercase"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 4,
                    }}
                    dangerouslySetInnerHTML={createMarkup(
                      item?.description ?? item?.about?.description ?? ""
                    )}
                  />
                </span>
              </span>
            ))}
            {isLoading && (
              <span className="flex w-full justify-center">
                <Loader size={60} color="white" />
              </span>
            )}
          </span>
        </div>
        <span className="py-10 flex">
          <PaginationComponent
            totalPages={totalPages !== 0 ? totalPages : 1}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </span>
      </div>
      {/* {data?.data?.results[active.value]?.data && (
        <SearchWidget
          pagination={data?.data?.results[active.value]?.pagination}
          data={data?.data?.results[active.value].data}
          active={active}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )} */}
    </>
  );
}

export default SearchHero;
