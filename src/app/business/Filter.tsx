"use client";

import React, { useEffect, useState } from "react";
import { useGeneralContext } from "../../../context/GenralContext";
import AssetCardLight from "@/components/AssetCardLight";
import { Loader } from "@mantine/core";

const Filter = ({ data }: any) => {
  const [active, setActive] = useState("feed");
  const [activePage, setActivePage] = useState(1);
  const {
    typeTags,
    resources,
    allResources,
    loadingResource,
    setOneTypeTagId,
    getResourceByType,
  }: any = useGeneralContext();
  console.log("🚀 ~ Filter ~ typeTags:", typeTags);
  console.log("🚀 ~ Filter ~ resources:", resources);

  // I want to fetch a query from the url, and then console.log the query. this is what the url looks like; localhost:3000/resource?name=governance. can you do that??

  const handleTabSwitch = ({ tag }: any) => {
    if (!tag?.id || !tag?.name) {
      setActive("feed");
      allResources();
      return;
    }

    // console.log("🚀 ~ handleTabSwitch ~ tag:", tag?.id);
    // console.log("🚀 ~ handleTabSwitch ~ tag.name :", tag?.name);
    setActive(tag?.name);
    setOneTypeTagId(tag?.id);
    // getResourceByType();
  };

  return (
    <div className="w-full flex flex-col gap-8 items-start -mt-12">
      {/* top */}
      <div className="flex justify-between items-center w-full">
        <div className="hidden lg:flex lg:gap-2 lg:items-center ">
          <div
            className={
              active === "feed"
                ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() => handleTabSwitch("feed")}
          >
            <div className="w-[40%]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.804 9.78059C6.5768 9.78059 7.204 10.4765 7.204 11.3359V14.4447C7.204 14.8572 7.0565 15.2528 6.79395 15.5445C6.5314 15.8361 6.1753 16 5.804 16H1.4C1.02884 16 0.672861 15.8363 0.410333 15.5448C0.147805 15.2533 0.000212094 14.8579 0 14.4456V11.3368C0 10.4774 0.6272 9.78148 1.4 9.78148L5.804 9.78059ZM14.6 9.78059C15.3728 9.78059 16 10.4765 16 11.3359V14.4447C16 14.8572 15.8525 15.2528 15.5899 15.5445C15.3274 15.8361 14.9713 16 14.6 16H10.196C9.8247 16 9.4686 15.8361 9.20605 15.5445C8.9435 15.2528 8.796 14.8572 8.796 14.4447V11.3359C8.796 10.4765 9.4232 9.78059 10.196 9.78059H14.6ZM5.804 11.1137H1.4C1.34696 11.1137 1.29609 11.1371 1.25858 11.1788C1.22107 11.2204 1.2 11.277 1.2 11.3359V14.4447C1.2 14.5682 1.2896 14.6669 1.4 14.6669H5.804C5.85704 14.6669 5.90791 14.6435 5.94542 14.6018C5.98293 14.5601 6.004 14.5036 6.004 14.4447V11.3359C6.004 11.277 5.98293 11.2204 5.94542 11.1788C5.90791 11.1371 5.85704 11.1137 5.804 11.1137ZM14.6 11.1137H10.196C10.143 11.1137 10.0921 11.1371 10.0546 11.1788C10.0171 11.2204 9.996 11.277 9.996 11.3359V14.4447C9.996 14.5682 10.0856 14.6669 10.196 14.6669H14.6C14.653 14.6669 14.7039 14.6435 14.7414 14.6018C14.7789 14.5601 14.8 14.5036 14.8 14.4447V11.3359C14.8 11.277 14.7789 11.2204 14.7414 11.1788C14.7039 11.1371 14.653 11.1137 14.6 11.1137ZM14.6 0C15.3728 0 16 0.696773 16 1.5553V6.44337C16 6.85586 15.8525 7.25146 15.5899 7.54313C15.3274 7.83481 14.9713 7.99867 14.6 7.99867H1.4C1.0287 7.99867 0.672602 7.83481 0.410051 7.54313C0.1475 7.25146 0 6.85586 0 6.44337V1.5553C1.31237e-05 1.16497 0.132137 0.788919 0.370144 0.501791C0.608151 0.214663 0.93464 0.0374507 1.2848 0.00533248L1.4 0H14.6ZM14.6 1.33311H1.4L1.3544 1.33933C1.31053 1.35075 1.27141 1.37828 1.24339 1.41748C1.21536 1.45668 1.20007 1.50524 1.2 1.5553V6.44337C1.2 6.56602 1.2896 6.66556 1.4 6.66556H14.6C14.653 6.66556 14.7039 6.64215 14.7414 6.60048C14.7789 6.55881 14.8 6.5023 14.8 6.44337V1.5553C14.8 1.49637 14.7789 1.43986 14.7414 1.39819C14.7039 1.35652 14.653 1.33311 14.6 1.33311Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                FEED
              </span>
              {/* <span className="flex flex-col h-[22px] items-start font-normal font-geistsans text-xs">
                32
              </span> */}
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
          </div>
          {/* tabs */}
          {typeTags &&
            typeTags.map((tag: any, i: number) => (
              <>
                <div
                  key={i}
                  className={
                    active === tag.name
                      ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                      : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
                  }
                  onClick={() =>
                    handleTabSwitch({ tag: { name: tag.name, id: tag.id } })
                  }
                >
                  <div className="w-[40%]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.804 9.78059C6.5768 9.78059 7.204 10.4765 7.204 11.3359V14.4447C7.204 14.8572 7.0565 15.2528 6.79395 15.5445C6.5314 15.8361 6.1753 16 5.804 16H1.4C1.02884 16 0.672861 15.8363 0.410333 15.5448C0.147805 15.2533 0.000212094 14.8579 0 14.4456V11.3368C0 10.4774 0.6272 9.78148 1.4 9.78148L5.804 9.78059ZM14.6 9.78059C15.3728 9.78059 16 10.4765 16 11.3359V14.4447C16 14.8572 15.8525 15.2528 15.5899 15.5445C15.3274 15.8361 14.9713 16 14.6 16H10.196C9.8247 16 9.4686 15.8361 9.20605 15.5445C8.9435 15.2528 8.796 14.8572 8.796 14.4447V11.3359C8.796 10.4765 9.4232 9.78059 10.196 9.78059H14.6ZM5.804 11.1137H1.4C1.34696 11.1137 1.29609 11.1371 1.25858 11.1788C1.22107 11.2204 1.2 11.277 1.2 11.3359V14.4447C1.2 14.5682 1.2896 14.6669 1.4 14.6669H5.804C5.85704 14.6669 5.90791 14.6435 5.94542 14.6018C5.98293 14.5601 6.004 14.5036 6.004 14.4447V11.3359C6.004 11.277 5.98293 11.2204 5.94542 11.1788C5.90791 11.1371 5.85704 11.1137 5.804 11.1137ZM14.6 11.1137H10.196C10.143 11.1137 10.0921 11.1371 10.0546 11.1788C10.0171 11.2204 9.996 11.277 9.996 11.3359V14.4447C9.996 14.5682 10.0856 14.6669 10.196 14.6669H14.6C14.653 14.6669 14.7039 14.6435 14.7414 14.6018C14.7789 14.5601 14.8 14.5036 14.8 14.4447V11.3359C14.8 11.277 14.7789 11.2204 14.7414 11.1788C14.7039 11.1371 14.653 11.1137 14.6 11.1137ZM14.6 0C15.3728 0 16 0.696773 16 1.5553V6.44337C16 6.85586 15.8525 7.25146 15.5899 7.54313C15.3274 7.83481 14.9713 7.99867 14.6 7.99867H1.4C1.0287 7.99867 0.672602 7.83481 0.410051 7.54313C0.1475 7.25146 0 6.85586 0 6.44337V1.5553C1.31237e-05 1.16497 0.132137 0.788919 0.370144 0.501791C0.608151 0.214663 0.93464 0.0374507 1.2848 0.00533248L1.4 0H14.6ZM14.6 1.33311H1.4L1.3544 1.33933C1.31053 1.35075 1.27141 1.37828 1.24339 1.41748C1.21536 1.45668 1.20007 1.50524 1.2 1.5553V6.44337C1.2 6.56602 1.2896 6.66556 1.4 6.66556H14.6C14.653 6.66556 14.7039 6.64215 14.7414 6.60048C14.7789 6.55881 14.8 6.5023 14.8 6.44337V1.5553C14.8 1.49637 14.7789 1.43986 14.7414 1.39819C14.7039 1.35652 14.653 1.33311 14.6 1.33311Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                  <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
                    <span className="flex flex-col h-[22px] uppercase items-center justify-center font-medium font-geistsans text-xs">
                      {tag.name}
                    </span>
                  </div>
                  <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
                  <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
                </div>
              </>
            ))}
        </div>
        {/* right : FILTER */}
        <div className="w-full flex justify-end">
          <div
            className="transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
            onClick={() => setActive("feed")}
          >
            <div className="w-[40%]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33374 9.99596C5.92496 9.99581 6.49945 10.1922 6.9669 10.5542C7.43434 10.9161 7.76821 11.4232 7.91601 11.9957H15.3322C15.4988 11.9953 15.6594 12.0574 15.7825 12.1696C15.9056 12.2819 15.9822 12.4361 15.9973 12.602C16.0123 12.7679 15.9647 12.9334 15.8638 13.0659C15.7629 13.1985 15.6161 13.2884 15.4522 13.3181L15.3322 13.3288L7.91601 13.3301C7.76871 13.903 7.43505 14.4107 6.96756 14.7732C6.50007 15.1357 5.92531 15.3324 5.33374 15.3324C4.74218 15.3324 4.16741 15.1357 3.69993 14.7732C3.23244 14.4107 2.89878 13.903 2.75147 13.3301L0.667793 13.3288C0.501224 13.3291 0.340576 13.267 0.217485 13.1548C0.094393 13.0426 0.0177782 12.8883 0.00272788 12.7224C-0.0123224 12.5566 0.0352823 12.391 0.136167 12.2585C0.237053 12.126 0.383907 12.036 0.547811 12.0063L0.667793 11.9957H2.75147C2.89928 11.4232 3.23315 10.9161 3.70059 10.5542C4.16803 10.1922 4.74253 9.99581 5.33374 9.99596ZM5.33374 11.3291C4.98018 11.3291 4.64109 11.4695 4.39108 11.7196C4.14107 11.9696 4.00061 12.3087 4.00061 12.6622C4.00061 13.0158 4.14107 13.3549 4.39108 13.6049C4.64109 13.8549 4.98018 13.9953 5.33374 13.9953C5.68731 13.9953 6.0264 13.8549 6.27641 13.6049C6.52642 13.3549 6.66687 13.0158 6.66687 12.6622C6.66687 12.3087 6.52642 11.9696 6.27641 11.7196C6.0264 11.4695 5.68731 11.3291 5.33374 11.3291ZM10.6663 0.664063C11.2575 0.663912 11.832 0.860267 12.2994 1.22225C12.7669 1.58423 13.1007 2.09131 13.2485 2.66376H15.3322C15.4988 2.66345 15.6594 2.72552 15.7825 2.83774C15.9056 2.94996 15.9822 3.1042 15.9973 3.27009C16.0123 3.43598 15.9647 3.60149 15.8638 3.73403C15.7629 3.86658 15.6161 3.95654 15.4522 3.98622L15.3322 3.99688L13.2485 3.99822C13.1012 4.57115 12.7676 5.07882 12.3001 5.44131C11.8326 5.80381 11.2578 6.00054 10.6663 6.00054C10.0747 6.00054 9.49993 5.80381 9.03244 5.44131C8.56495 5.07882 8.23129 4.57115 8.08399 3.99822L0.667793 3.99688C0.501224 3.99719 0.340576 3.93512 0.217485 3.8229C0.094393 3.71068 0.0177782 3.55644 0.00272788 3.39055C-0.0123224 3.22466 0.0352823 3.05915 0.136167 2.92661C0.237053 2.79406 0.383907 2.7041 0.547811 2.67442L0.667793 2.66376H8.08399C8.23179 2.09131 8.56566 1.58423 9.03311 1.22225C9.50055 0.860267 10.075 0.663912 10.6663 0.664063ZM10.6663 1.99719C10.3127 1.99719 9.9736 2.13765 9.72359 2.38766C9.47358 2.63767 9.33313 2.97675 9.33313 3.33032C9.33313 3.68389 9.47358 4.02297 9.72359 4.27298C9.9736 4.52299 10.3127 4.66345 10.6663 4.66345C11.0198 4.66345 11.3589 4.52299 11.6089 4.27298C11.8589 4.02297 11.9994 3.68389 11.9994 3.33032C11.9994 2.97675 11.8589 2.63767 11.6089 2.38766C11.3589 2.13765 11.0198 1.99719 10.6663 1.99719Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center uppercase font-medium font-geistsans text-xs">
                FILTER
              </span>
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center justify-between flex-wrap gap-4 w-full m-auto my-4">
        {/* Cards */}
        {resources?.resources?.length > 0 ? (
          <>
            {loadingResource ? (
              <span className="flex items-center justify-center w-full py-8 px-5">
                <Loader color="black" />
              </span>
            ) : (
              resources.resources.map((resource: any, i: number) => (
                <>
                  <AssetCardLight
                    logo={
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1907_7068)">
                          <path
                            d="M11.75 5.32648L11.202 5.83848C11.2722 5.91358 11.357 5.97345 11.4513 6.01438C11.5456 6.05531 11.6472 6.07643 11.75 6.07643C11.8528 6.07643 11.9544 6.05531 12.0487 6.01438C12.143 5.97345 12.2278 5.91358 12.298 5.83848L11.75 5.32648ZM9.184 18.5485C7.734 17.3725 6.042 15.8295 4.718 14.1405C3.379 12.4335 2.5 10.6805 2.5 9.07048H1C1 11.1875 2.13 13.2725 3.537 15.0665C4.959 16.8795 6.747 18.5025 8.239 19.7135L9.184 18.5485ZM2.5 9.07048C2.5 6.16548 3.768 4.37048 5.336 3.75548C6.901 3.14248 9.09 3.58048 11.202 5.83848L12.298 4.81448C9.91 2.26048 7.099 1.45448 4.789 2.35848C2.482 3.26248 1 5.74448 1 9.07048H2.5ZM15.26 19.7125C16.753 18.5015 18.541 16.8785 19.963 15.0655C21.37 13.2715 22.5 11.1865 22.5 9.06848H21C21 10.6805 20.12 12.4325 18.782 14.1395C17.458 15.8285 15.766 17.3715 14.316 18.5475L15.26 19.7125ZM22.5 9.06848C22.5 5.74348 21.018 3.26148 18.71 2.35848C16.4 1.45348 13.59 2.25848 11.202 4.81348L12.298 5.83848C14.41 3.58048 16.599 3.14148 18.164 3.75448C19.732 4.36848 21 6.16448 21 9.06848H22.5ZM8.239 19.7135C9.509 20.7455 10.392 21.5025 11.75 21.5025V20.0025C11.027 20.0025 10.577 19.6785 9.184 18.5485L8.239 19.7135ZM14.316 18.5475C12.923 19.6775 12.473 20.0025 11.75 20.0025V21.5025C13.108 21.5025 13.991 20.7455 15.261 19.7135L14.316 18.5475Z"
                            fill="#588065"
                          />
                          <path
                            d="M18.25 8.75195H16.25M16.25 8.75195H14.25M16.25 8.75195V6.75195M16.25 8.75195V10.752"
                            stroke="#588065"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1907_7068">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    logoText={resource.main_topic_tag.name}
                    title={resource.name}
                    description={resource.description}
                    url={resource.link}
                    button1text={"View Topic"}
                  />
                </>
              ))
            )}
          </>
        ) : (
          <>
            <div className="mx-auto p-4 text-base font-semibold font-geistsans">
              No available resource.
            </div>
          </>
        )}
        {/* <AssetCardLight
          logo={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1907_7068)">
                <path
                  d="M11.75 5.32648L11.202 5.83848C11.2722 5.91358 11.357 5.97345 11.4513 6.01438C11.5456 6.05531 11.6472 6.07643 11.75 6.07643C11.8528 6.07643 11.9544 6.05531 12.0487 6.01438C12.143 5.97345 12.2278 5.91358 12.298 5.83848L11.75 5.32648ZM9.184 18.5485C7.734 17.3725 6.042 15.8295 4.718 14.1405C3.379 12.4335 2.5 10.6805 2.5 9.07048H1C1 11.1875 2.13 13.2725 3.537 15.0665C4.959 16.8795 6.747 18.5025 8.239 19.7135L9.184 18.5485ZM2.5 9.07048C2.5 6.16548 3.768 4.37048 5.336 3.75548C6.901 3.14248 9.09 3.58048 11.202 5.83848L12.298 4.81448C9.91 2.26048 7.099 1.45448 4.789 2.35848C2.482 3.26248 1 5.74448 1 9.07048H2.5ZM15.26 19.7125C16.753 18.5015 18.541 16.8785 19.963 15.0655C21.37 13.2715 22.5 11.1865 22.5 9.06848H21C21 10.6805 20.12 12.4325 18.782 14.1395C17.458 15.8285 15.766 17.3715 14.316 18.5475L15.26 19.7125ZM22.5 9.06848C22.5 5.74348 21.018 3.26148 18.71 2.35848C16.4 1.45348 13.59 2.25848 11.202 4.81348L12.298 5.83848C14.41 3.58048 16.599 3.14148 18.164 3.75448C19.732 4.36848 21 6.16448 21 9.06848H22.5ZM8.239 19.7135C9.509 20.7455 10.392 21.5025 11.75 21.5025V20.0025C11.027 20.0025 10.577 19.6785 9.184 18.5485L8.239 19.7135ZM14.316 18.5475C12.923 19.6775 12.473 20.0025 11.75 20.0025V21.5025C13.108 21.5025 13.991 20.7455 15.261 19.7135L14.316 18.5475Z"
                  fill="#588065"
                />
                <path
                  d="M18.25 8.75195H16.25M16.25 8.75195H14.25M16.25 8.75195V6.75195M16.25 8.75195V10.752"
                  stroke="#588065"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1907_7068">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          logoText={"Health"}
          title={"Health Services and Information"}
          description={
            "Discover comprehensive healthcare resources in Plateau State. Access downloadable documents, detailed reports, helpful articles, and essential information to stay informed and healthy."
          }
          button1text={"View Topic"}
        /> */}
      </div>
      {/* bottom */}
      <div className="w-full flex items-center justify-center lg:justify-end">
        <div className="flex items-center gap-4">
          {/* left arrow */}
          <div className="cursor-pointer flex items-center">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17L5 13L1 9L9 1"
                stroke="#0E3E40"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {/* numbers */}
          <div className="flex items-center gap-4">
            <span
              className={
                activePage === 1
                  ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                  : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
              }
              onClick={() => setActivePage(1)}
            >
              1
            </span>
            <span
              className={
                activePage === 2
                  ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                  : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
              }
              onClick={() => setActivePage(2)}
            >
              2
            </span>
            <span
              className={
                activePage === 3
                  ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                  : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
              }
              onClick={() => setActivePage(3)}
            >
              3
            </span>
            <span
              className={
                activePage === 4
                  ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                  : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
              }
              onClick={() => setActivePage(4)}
            >
              4
            </span>
            <span
              className={
                activePage === 5
                  ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                  : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
              }
              onClick={() => setActivePage(5)}
            >
              5
            </span>
          </div>
          {/* right arrow */}
          <div className="cursor-pointer flex items-center">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 9L1 17"
                stroke="#0E3E40"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
