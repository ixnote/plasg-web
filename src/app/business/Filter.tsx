"use client";

import React, { useState } from "react";
import AssetCardLight from "@/components/AssetCardLight";

const Filter = () => {
  const [active, setActive] = useState("feed");
  const [activePage, setActivePage] = useState(1);

  //   const handleTabClick = ({ tabName }: any) => {
  //     setActive(tabName);
  //   };

  return (
    <div className="w-full flex flex-col gap-8 items-start -mt-12">
      {/* top */}
      <div className="flex justify-between items-center w-full">
        <div className="hidden lg:flex lg:gap-2 lg:items-center ">
          {/* tabs */}
          <div
            className={
              active === "feed"
                ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
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
                  d="M5.804 9.78059C6.5768 9.78059 7.204 10.4765 7.204 11.3359V14.4447C7.204 14.8572 7.0565 15.2528 6.79395 15.5445C6.5314 15.8361 6.1753 16 5.804 16H1.4C1.02884 16 0.672861 15.8363 0.410333 15.5448C0.147805 15.2533 0.000212094 14.8579 0 14.4456V11.3368C0 10.4774 0.6272 9.78148 1.4 9.78148L5.804 9.78059ZM14.6 9.78059C15.3728 9.78059 16 10.4765 16 11.3359V14.4447C16 14.8572 15.8525 15.2528 15.5899 15.5445C15.3274 15.8361 14.9713 16 14.6 16H10.196C9.8247 16 9.4686 15.8361 9.20605 15.5445C8.9435 15.2528 8.796 14.8572 8.796 14.4447V11.3359C8.796 10.4765 9.4232 9.78059 10.196 9.78059H14.6ZM5.804 11.1137H1.4C1.34696 11.1137 1.29609 11.1371 1.25858 11.1788C1.22107 11.2204 1.2 11.277 1.2 11.3359V14.4447C1.2 14.5682 1.2896 14.6669 1.4 14.6669H5.804C5.85704 14.6669 5.90791 14.6435 5.94542 14.6018C5.98293 14.5601 6.004 14.5036 6.004 14.4447V11.3359C6.004 11.277 5.98293 11.2204 5.94542 11.1788C5.90791 11.1371 5.85704 11.1137 5.804 11.1137ZM14.6 11.1137H10.196C10.143 11.1137 10.0921 11.1371 10.0546 11.1788C10.0171 11.2204 9.996 11.277 9.996 11.3359V14.4447C9.996 14.5682 10.0856 14.6669 10.196 14.6669H14.6C14.653 14.6669 14.7039 14.6435 14.7414 14.6018C14.7789 14.5601 14.8 14.5036 14.8 14.4447V11.3359C14.8 11.277 14.7789 11.2204 14.7414 11.1788C14.7039 11.1371 14.653 11.1137 14.6 11.1137ZM14.6 0C15.3728 0 16 0.696773 16 1.5553V6.44337C16 6.85586 15.8525 7.25146 15.5899 7.54313C15.3274 7.83481 14.9713 7.99867 14.6 7.99867H1.4C1.0287 7.99867 0.672602 7.83481 0.410051 7.54313C0.1475 7.25146 0 6.85586 0 6.44337V1.5553C1.31237e-05 1.16497 0.132137 0.788919 0.370144 0.501791C0.608151 0.214663 0.93464 0.0374507 1.2848 0.00533248L1.4 0H14.6ZM14.6 1.33311H1.4L1.3544 1.33933C1.31053 1.35075 1.27141 1.37828 1.24339 1.41748C1.21536 1.45668 1.20007 1.50524 1.2 1.5553V6.44337C1.2 6.56602 1.2896 6.66556 1.4 6.66556H14.6C14.653 6.66556 14.7039 6.64215 14.7414 6.60048C14.7789 6.55881 14.8 6.5023 14.8 6.44337V1.5553C14.8 1.49637 14.7789 1.43986 14.7414 1.39819C14.7039 1.35652 14.653 1.33311 14.6 1.33311Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                FEED
              </span>
              <span className="flex flex-col h-[22px] items-start font-normal font-geistsans text-xs">
                32
              </span>
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
          </div>
          <div
            className={
              active === "resources"
                ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() => setActive("resources")}
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
                  d="M2 0.5H5.5C6.32843 0.5 7 1.17157 7 2V5.5C7 6.32843 6.32843 7 5.5 7H2C1.17157 7 0.5 6.32843 0.5 5.5V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
                  stroke="#9CA3AF"
                />
                <path
                  d="M10.5 0.5H14C14.8284 0.5 15.5 1.17157 15.5 2V5.5C15.5 6.32843 14.8284 7 14 7H10.5C9.67157 7 9 6.32843 9 5.5V2C9 1.17157 9.67157 0.5 10.5 0.5Z"
                  stroke="#9CA3AF"
                />
                <path
                  d="M2 9H5.5C6.32843 9 7 9.67157 7 10.5V14C7 14.8284 6.32843 15.5 5.5 15.5H2C1.17157 15.5 0.5 14.8284 0.5 14V10.5C0.5 9.67157 1.17157 9 2 9Z"
                  stroke="#9CA3AF"
                />
                <path
                  d="M10.5 9H14C14.8284 9 15.5 9.67157 15.5 10.5V14C15.5 14.8284 14.8284 15.5 14 15.5H10.5C9.67157 15.5 9 14.8284 9 14V10.5C9 9.67157 9.67157 9 10.5 9Z"
                  stroke="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                RESOURCES
              </span>
              <span className="flex flex-col h-[22px] items-start font-normal font-geistsans text-xs">
                9
              </span>
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
          </div>
          <div
            className={
              active === "services"
                ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() => setActive("services")}
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
                  d="M15.1831 13.1417H14.0402V11.9989H14.6116V9.71316H12.326V10.2846H11.1831V9.14174C11.1831 8.99019 11.2433 8.84484 11.3505 8.73768C11.4576 8.63052 11.603 8.57031 11.7545 8.57031H15.1831C15.3346 8.57031 15.48 8.63052 15.5871 8.73768C15.6943 8.84484 15.7545 8.99019 15.7545 9.14174V12.5703C15.7545 12.7218 15.6943 12.8672 15.5871 12.9743C15.48 13.0815 15.3346 13.1417 15.1831 13.1417Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M12.3256 15.9984H8.89707C8.74552 15.9984 8.60018 15.9382 8.49302 15.831C8.38585 15.7238 8.32565 15.5785 8.32565 15.4269V11.9984C8.32565 11.8468 8.38585 11.7015 8.49302 11.5943C8.60018 11.4872 8.74552 11.427 8.89707 11.427H12.3256C12.4772 11.427 12.6225 11.4872 12.7297 11.5943C12.8368 11.7015 12.897 11.8468 12.897 11.9984V15.4269C12.897 15.5785 12.8368 15.7238 12.7297 15.831C12.6225 15.9382 12.4772 15.9984 12.3256 15.9984ZM9.4685 14.8555H11.7542V12.5698H9.4685V14.8555ZM7.1828 10.203C6.76991 10.0954 6.39547 9.87415 6.10199 9.56444C5.80851 9.25472 5.60776 8.86892 5.52252 8.45084C5.43729 8.03276 5.47099 7.59916 5.61979 7.19927C5.7686 6.79938 6.02656 6.44923 6.36437 6.18858C6.70217 5.92793 7.1063 5.76722 7.53086 5.7247C7.95541 5.68218 8.38338 5.75955 8.76617 5.94804C9.14896 6.13653 9.47123 6.42857 9.69638 6.791C9.92154 7.15344 10.0406 7.57175 10.0399 7.99843H11.1828C11.1834 7.34461 10.9971 6.70423 10.6458 6.1528C10.2945 5.60137 9.79289 5.16189 9.20005 4.88617C8.60721 4.61046 7.94789 4.51 7.29984 4.59665C6.65178 4.6833 6.04202 4.95345 5.54244 5.37524C5.04286 5.79702 4.6743 6.35286 4.48022 6.97721C4.28614 7.60156 4.27463 8.26839 4.44704 8.89907C4.61946 9.52975 4.96861 10.098 5.45333 10.5368C5.93805 10.9755 6.53813 11.2666 7.1828 11.3755V10.203Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M15.1207 6.59995L13.8008 7.75994L12.9893 6.94852L14.3665 5.7371L13.0179 3.40569L11.0522 4.06854C10.5916 3.68555 10.0701 3.38232 9.50936 3.1714L9.10365 1.14285H6.40653L6.00082 3.1714C5.43566 3.37656 4.91136 3.68031 4.45226 4.06854L2.49227 3.40569L1.14371 5.7371L2.69799 7.1028C2.59233 7.6943 2.59233 8.29985 2.69799 8.89136L1.14371 10.2628L2.49227 12.5942L4.45797 11.9313C4.91863 12.3143 5.44011 12.6176 6.00082 12.8285L6.40653 14.857H7.18366V15.9999H6.40653C6.14226 15.9997 5.88624 15.9079 5.68204 15.7401C5.47783 15.5724 5.33807 15.3391 5.28654 15.0799L4.99511 13.6399C4.73607 13.5143 4.48596 13.3712 4.24655 13.2113L2.85799 13.6799C2.74 13.7187 2.61647 13.738 2.49227 13.737C2.29151 13.7386 2.09398 13.6864 1.92016 13.586C1.74635 13.4855 1.60256 13.3404 1.50371 13.1656L0.15515 10.8342C0.021772 10.6051 -0.0277907 10.3367 0.0149505 10.075C0.0576916 9.81337 0.190077 9.57471 0.389434 9.39993L1.48657 8.43993C1.47514 8.29136 1.46943 8.14851 1.46943 7.99994C1.46943 7.85137 1.48085 7.70851 1.49228 7.56565L0.389434 6.59995C0.190077 6.42516 0.0576916 6.18651 0.0149505 5.92485C-0.0277907 5.66319 0.021772 5.39481 0.15515 5.16567L1.50371 2.83426C1.60256 2.65952 1.74635 2.51438 1.92016 2.41391C2.09398 2.31344 2.29151 2.26128 2.49227 2.26284C2.61647 2.26189 2.74 2.28119 2.85799 2.31998L4.24083 2.78855C4.48296 2.62992 4.73489 2.48677 4.99511 2.35998L5.28654 0.919993C5.33807 0.660801 5.47783 0.427478 5.68204 0.259739C5.88624 0.092 6.14226 0.000212285 6.40653 0H9.10365C9.36791 0.000212285 9.62394 0.092 9.82814 0.259739C10.0323 0.427478 10.1721 0.660801 10.2236 0.919993L10.5151 2.35998C10.7741 2.48553 11.0242 2.62872 11.2636 2.78855L12.6522 2.31998C12.7702 2.28119 12.8937 2.26189 13.0179 2.26284C13.2187 2.26128 13.4162 2.31344 13.59 2.41391C13.7638 2.51438 13.9076 2.65952 14.0065 2.83426L15.355 5.16567C15.4884 5.39481 15.538 5.66319 15.4952 5.92485C15.4525 6.18651 15.3201 6.42516 15.1207 6.59995Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                SERVICES
              </span>
              <span className="flex flex-col h-[22px] items-start font-normal font-geistsans text-xs">
                4
              </span>
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[29%] bottom-0"></span>
          </div>
          <div
            className={
              active === "documents"
                ? "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() => setActive("documents")}
          >
            <div className="w-[40%] relative">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2972 4.17143L7.29718 0.171429C7.1829 0.0571428 7.06861 0 6.89718 0H1.1829C0.554325 0 0.0400391 0.514286 0.0400391 1.14286V14.8571C0.0400391 15.4857 0.554325 16 1.1829 16H10.3258C10.9543 16 11.4686 15.4857 11.4686 14.8571V4.57143C11.4686 4.4 11.4115 4.28571 11.2972 4.17143ZM6.89718 1.37143L10.0972 4.57143H6.89718V1.37143ZM10.3258 14.8571H1.1829V1.14286H5.75432V4.57143C5.75432 5.2 6.26861 5.71429 6.89718 5.71429H10.3258V14.8571Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M2.32568 11.4286H9.18283V12.5714H2.32568V11.4286ZM2.32568 8H9.18283V9.14286H2.32568V8Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                DOCUMENTS
              </span>
              <span className="flex flex-col h-[22px] items-start font-normal font-geistsans text-xs">
                13
              </span>
            </div>
            {/* divider */}
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[25%] top-0"></span>
            <span className="bg-brand-grayish p-[0.5px] h-[8px] absolute left-[25%] bottom-0"></span>
          </div>
        </div>
        {/* right */}
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
          logoText={"Health"}
          title={"Health Services and Information"}
          description={
            "Discover comprehensive healthcare resources in Plateau State. Access downloadable documents, detailed reports, helpful articles, and essential information to stay informed and healthy."
          }
          button1text={"View Topic"}
        />
        <AssetCardLight
          logo={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2106 9.76152C21.8114 9.76152 22.3 9.26727 22.3 8.65954V7.31593C22.3 6.90954 22.0793 6.53613 21.7282 6.34575L12.6579 1.40326C12.1222 1.11037 11.4779 1.11037 10.9422 1.40326L1.87194 6.342C1.51724 6.53604 1.30005 6.90579 1.30005 7.31218V8.65579C1.30005 9.26354 1.78868 9.75777 2.3895 9.75777H2.79127V19.2618C1.96964 19.2691 1.30366 19.9464 1.30366 20.7811V22.0515C1.30366 22.2529 1.46654 22.4176 1.66561 22.4176H21.9346C22.1337 22.4176 22.2965 22.2529 22.2965 22.0515V20.7811C22.2965 19.95 21.6305 19.2728 20.8089 19.2618V9.75777H21.2107L21.2106 9.76152ZM2.02016 8.65954V7.31593C2.02016 7.18047 2.09255 7.05233 2.212 6.9901L11.286 2.0476C11.6081 1.87187 11.9918 1.87187 12.3139 2.0476L21.3842 6.98635C21.5037 7.05225 21.5761 7.17672 21.5761 7.31218V8.65579C21.5761 8.86081 21.4096 9.02555 21.2105 9.02555H2.38932C2.18663 9.02555 2.02376 8.85715 2.02376 8.65579L2.02016 8.65954ZM21.5724 20.785V21.6893H2.02735V20.785C2.02735 20.3493 2.37481 19.9978 2.80554 19.9978H13.1209C13.1209 19.9978 13.1463 20.0052 13.1571 20.0052V19.9978H20.7942C21.225 19.9978 21.5724 20.3493 21.5724 20.785ZM7.69895 19.2656H5.70824V12.5916C5.70824 12.0351 6.15344 11.5848 6.70359 11.5848C7.25375 11.5848 7.69895 12.0351 7.69895 12.5916V19.2656ZM12.7952 19.2656H10.8044V12.5916C10.8044 12.0351 11.2496 11.5848 11.7998 11.5848C12.35 11.5848 12.7952 12.0351 12.7952 12.5916V19.2656ZM17.8913 19.2656H15.9006V12.5916C15.9006 12.0351 16.3458 11.5848 16.896 11.5848C17.4461 11.5848 17.8913 12.0351 17.8913 12.5916V19.2656ZM20.0848 19.2656H18.6152V12.5916C18.6152 11.6324 17.8443 10.8526 16.896 10.8526C15.9477 10.8526 15.1767 11.6324 15.1767 12.5916V19.2656H13.519V12.5916C13.519 11.6324 12.7481 10.8526 11.7998 10.8526C10.8515 10.8526 10.0805 11.6324 10.0805 12.5916V19.2656H8.42284V12.5916C8.42284 11.6324 7.6519 10.8526 6.70359 10.8526C5.75528 10.8526 4.98435 11.6324 4.98435 12.5916V19.2656H3.51483V9.76515H20.0847L20.0848 19.2656ZM11.7997 4.1673C10.7935 4.1673 9.97552 4.99468 9.97552 6.01247C9.97552 7.03026 10.7935 7.85765 11.7997 7.85765C12.8059 7.85765 13.6239 7.03026 13.6239 6.01247C13.6239 4.99468 12.8059 4.1673 11.7997 4.1673ZM11.7997 7.12169C11.1953 7.12169 10.6994 6.62378 10.6994 6.00872C10.6994 5.39366 11.1917 4.89576 11.7997 4.89576C12.4078 4.89576 12.9 5.39366 12.9 6.00872C12.9 6.62378 12.4078 7.12169 11.7997 7.12169Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.5"
              />
            </svg>
          }
          logoText={"Governance"}
          title={"Governance and Public Administration"}
          description={
            "Stay informed about the governance of Plateau State. Access downloadable reports on government spending, debt management, budget performance, and more. Find all the essential information to understand how your state is managed and how decisions impact you."
          }
          button1text={"View Topic"}
        />
        <AssetCardLight
          logo={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.18538 19.1335C1.64794 19.1335 1.19955 18.9538 0.840216 18.5945C0.480882 18.2351 0.300827 17.7864 0.300049 17.2481V5.85213C0.300049 5.31469 0.480104 4.8663 0.840216 4.50697C1.20033 4.14763 1.64833 3.96758 2.18422 3.9668H7.30005V2.35097C7.30005 1.8143 7.4801 1.36591 7.84022 1.0058C8.20033 0.645688 8.64872 0.466022 9.18538 0.466799H12.4159C12.9525 0.466799 13.4009 0.646466 13.761 1.0058C14.1212 1.36513 14.3008 1.81352 14.3 2.35097V3.9668H19.4159C19.9525 3.9668 20.4005 4.14685 20.7599 4.50697C21.1192 4.86708 21.2993 5.31547 21.3 5.85213V17.2493C21.3 17.786 21.12 18.2344 20.7599 18.5945C20.3998 18.9546 19.9518 19.1342 19.4159 19.1335H2.18538ZM8.46671 3.9668H13.1334V2.35097C13.1334 2.17208 13.0587 2.00758 12.9094 1.85747C12.76 1.70735 12.5955 1.63269 12.4159 1.63347H9.18421C9.00533 1.63347 8.84083 1.70813 8.69072 1.85747C8.5406 2.0068 8.46594 2.1713 8.46671 2.35097V3.9668ZM20.1334 12.7168H13.1334V14.4668H8.46671V12.7168H1.46672V17.2493C1.46672 17.4282 1.54138 17.5927 1.69072 17.7428C1.84005 17.8929 2.00455 17.9676 2.18422 17.9668H19.4159C19.5948 17.9668 19.7593 17.8921 19.9094 17.7428C20.0595 17.5935 20.1342 17.4286 20.1334 17.2481V12.7168ZM9.63338 13.3001H11.9667V10.9668H9.63338V13.3001ZM1.46672 11.5501H8.46671V9.80013H13.1334V11.5501H20.1334V5.85213C20.1334 5.67247 20.0587 5.50758 19.9094 5.35747C19.76 5.20736 19.5955 5.13269 19.4159 5.13347H2.18422C2.00533 5.13347 1.84083 5.20813 1.69072 5.35747C1.5406 5.5068 1.46594 5.67169 1.46672 5.85213V11.5501Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.3"
              />
            </svg>
          }
          logoText={"Business"}
          title={"Business and Economic Development"}
          description={
            "Discover everything you need to know about doing business in Plateau State. Access downloadable business reports, economic policies, business incentives, and more. Get the latest information to help you grow and succeed in our thriving economic landscape."
          }
          button1text={"View Topic"}
        />
        <AssetCardLight
          logo={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9633 1.35788C11.868 1.28175 11.7321 1.28175 11.6368 1.35788L1.39923 9.49745C1.28567 9.58769 1.26696 9.75277 1.35694 9.86634C1.44717 9.97926 1.612 9.99861 1.72582 9.90838L3.24392 8.70138V22.0384C3.24392 22.1834 3.36132 22.3009 3.50642 22.3009H20.0939C20.239 22.3009 20.3564 22.1834 20.3564 22.0384V8.70159L21.8743 9.90838C21.9225 9.94683 21.9801 9.96541 22.0373 9.96541C22.1147 9.96541 22.1911 9.93145 22.2432 9.86634C22.3331 9.75277 22.3144 9.58769 22.2009 9.49745L11.9633 1.35788ZM19.8314 21.7759H3.76892V8.28398L11.8 1.89865L19.8314 8.28417V21.7759Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.8"
              />
              <path
                d="M8.71631 10.4785C8.71631 12.0796 10.0488 14.0025 11.4072 15.5467C10.1544 16.9133 8.96138 17.9191 8.93626 17.9403C8.825 18.0333 8.81039 18.1989 8.90344 18.31C8.95523 18.3721 9.02982 18.4041 9.10493 18.4041C9.16415 18.4041 9.22388 18.3841 9.2731 18.343C9.37615 18.2568 10.5333 17.2813 11.7633 15.9425C12.9932 17.2813 14.1504 18.2568 14.2534 18.343C14.3652 18.4364 14.5305 18.4209 14.6231 18.31C14.7161 18.1988 14.7015 18.0333 14.5903 17.9403C14.5651 17.9191 13.3718 16.9133 12.1191 15.5467C13.4775 14.0025 14.81 12.0796 14.81 10.4785C14.81 8.79849 13.4431 7.43164 11.7633 7.43164C10.0832 7.43164 8.71631 8.79849 8.71631 10.4785ZM14.285 10.4785C14.285 11.9057 13.0476 13.6862 11.7633 15.15C10.4787 13.6862 9.24131 11.9057 9.24131 10.4785C9.24131 9.08791 10.3726 7.95664 11.7633 7.95664C13.1537 7.95664 14.285 9.08791 14.285 10.4785Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.8"
              />
            </svg>
          }
          logoText={"Welfare"}
          title={"Community Welfare and Support"}
          description={
            "Explore resources dedicated to the welfare of Plateau State's residents. Find downloadable documents on policies, benefits, and reports aimed at enhancing community well-being. Stay informed and access the support you need for a better quality of life."
          }
          button1text={"View Topic"}
        />
        <AssetCardLight
          logo={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9633 1.35788C11.868 1.28175 11.7321 1.28175 11.6368 1.35788L1.39923 9.49745C1.28567 9.58769 1.26696 9.75277 1.35694 9.86634C1.44717 9.97926 1.612 9.99861 1.72582 9.90838L3.24392 8.70138V22.0384C3.24392 22.1834 3.36132 22.3009 3.50642 22.3009H20.0939C20.239 22.3009 20.3564 22.1834 20.3564 22.0384V8.70159L21.8743 9.90838C21.9225 9.94683 21.9801 9.96541 22.0373 9.96541C22.1147 9.96541 22.1911 9.93145 22.2432 9.86634C22.3331 9.75277 22.3144 9.58769 22.2009 9.49745L11.9633 1.35788ZM19.8314 21.7759H3.76892V8.28398L11.8 1.89865L19.8314 8.28417V21.7759Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.8"
              />
              <path
                d="M8.71631 10.4785C8.71631 12.0796 10.0488 14.0025 11.4072 15.5467C10.1544 16.9133 8.96138 17.9191 8.93626 17.9403C8.825 18.0333 8.81039 18.1989 8.90344 18.31C8.95523 18.3721 9.02982 18.4041 9.10493 18.4041C9.16415 18.4041 9.22388 18.3841 9.2731 18.343C9.37615 18.2568 10.5333 17.2813 11.7633 15.9425C12.9932 17.2813 14.1504 18.2568 14.2534 18.343C14.3652 18.4364 14.5305 18.4209 14.6231 18.31C14.7161 18.1988 14.7015 18.0333 14.5903 17.9403C14.5651 17.9191 13.3718 16.9133 12.1191 15.5467C13.4775 14.0025 14.81 12.0796 14.81 10.4785C14.81 8.79849 13.4431 7.43164 11.7633 7.43164C10.0832 7.43164 8.71631 8.79849 8.71631 10.4785ZM14.285 10.4785C14.285 11.9057 13.0476 13.6862 11.7633 15.15C10.4787 13.6862 9.24131 11.9057 9.24131 10.4785C9.24131 9.08791 10.3726 7.95664 11.7633 7.95664C13.1537 7.95664 14.285 9.08791 14.285 10.4785Z"
                fill="#588065"
                stroke="#588065"
                stroke-width="0.8"
              />
            </svg>
          }
          logoText={"Welfare"}
          title={"Community Welfare and Support"}
          description={
            "Explore resources dedicated to the welfare of Plateau State's residents. Find downloadable documents on policies, benefits, and reports aimed at enhancing community well-being. Stay informed and access the support you need for a better quality of life."
          }
          button1text={"View Topic"}
        />
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
