"use client";

import React, { useEffect, useState } from "react";
import AssetCardLight from "@/components/AssetCardLight";
import { Loader } from "@mantine/core";
import { useGeneralContext } from "../../../../context/GenralContext";

const Filter = ({ name }: any) => {
  const [active, setActive] = useState("feed");
  const [activePage, setActivePage] = useState(1);
  const [activeTag, setActiveTag] = useState({
    name: "",
    id: "",
  });
  const {
    typeTags,
    resources,
    allResources,
    loadingResource,
    setTypeTagId,
    setTagTopicName,
  }: any = useGeneralContext();

  // Notification counts for tabs
  const [notifications, setNotifications] = useState({
    feed: 1,
    resource: 2,
    document: 3,
    service: 4,
  });

  const handleTabSwitch = async () => {
    if (activeTag.name === "feed") {
      setActive("feed");
      setTypeTagId(null);
      await allResources();
      return;
    }

    setActive(activeTag.name);
    setTypeTagId(activeTag.id);
  };

  useEffect(() => {
    handleTabSwitch();
  }, [activeTag]);

  return (
    <div className="w-full flex flex-col gap-8 items-start -mt-12 bg-brand-white  ">
      {/* top */}
      <div className="flex justify-between items-center w-full ">
        <div className="hidden lg:flex lg:gap-2 lg:items-center">
          {/* Feed Tab */}
          <div
            className={
              active === "feed"
                ? "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx text-brand-dark relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() =>
              setActiveTag({
                id: "#",
                name: "feed",
              })
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
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                FEED
              </span>
              {notifications.feed > 0 && (
                <div className="absolute top-0 right-0 w-4 h-4  text-black text-xs  flex items-center justify-center">
                  {notifications.feed}
                </div>
              )}
            </div>
          </div>

          {/* Resource Tab */}
          <div
            className={
              active === "resource"
                ? "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer text-brand-dark hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() =>
              setActiveTag({
                id: "#",
                name: "resource",
              })
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
                  d="M0 4C0 2.34315 1.34315 1 3 1H13C14.6569 1 16 2.34315 16 4V12C16 13.6569 14.6569 15 13 15H3C1.34315 15 0 13.6569 0 12V4ZM3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V3C14 2.44772 13.5523 2 13 2H3ZM5 5.5C5 5.22386 5.22386 5 5.5 5H10.5C10.7761 5 11 5.22386 11 5.5V6.5C11 6.77614 10.7761 7 10.5 7H5.5C5.22386 7 5 6.77614 5 6.5V5.5ZM5 8.5C5 8.22386 5.22386 8 5.5 8H10.5C10.7761 8 11 8.22386 11 8.5V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V8.5Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                RESOURCE
              </span>
              {notifications.resource > 0 && (
                <div className="absolute top-0 right-0 w-4 h-4  text-black text-xs  flex items-center justify-center">
                  {notifications.resource}
                </div>
              )}
            </div>
          </div>

          {/* Document Tab */}
          <div
            className={
              active === "document"
                ? "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer text-brand-dark hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() =>
              setActiveTag({
                id: "#",
                name: "document",
              })
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
                  d="M2 4.5C2 4.22386 2.22386 4 2.5 4H5V1.5C5 1.22386 5.22386 1 5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V4H13.5C13.7761 4 14 4.22386 14 4.5V15.5C14 15.7761 13.7761 16 13.5 16H2.5C2.22386 16 2 15.7761 2 15.5V4.5ZM5.5 2H10.5V4H5.5V2ZM3 5V14H13V5H3ZM5.5 6H10.5V12H5.5V6Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                DOCUMENT
              </span>
              {notifications.document > 0 && (
                <div className="absolute top-0 right-0 w-4 h-4  text-black text-xs flex items-center justify-center">
                  {notifications.document}
                </div>
              )}
            </div>
          </div>

          {/* Service Tab */}
          <div
            className={
              active === "service"
                ? "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
                : "transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer text-brand-dark hover:bg-brand-main hover:text-brand-white"
            }
            onClick={() =>
              setActiveTag({
                id: "#",
                name: "service",
              })
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
                  d="M8 2C8 2 9.33333 2 9.33333 3.33333V6.66667C9.33333 8 8 8 8 8H7.33333C7.33333 8 6 8 6 6.66667V3.33333C6 2 7.33333 2 7.33333 2H8ZM12.6667 3.33333V6.66667C12.6667 8 11.3333 8 11.3333 8H10.6667C10.6667 8 9.33333 8 9.33333 6.66667V3.33333C9.33333 2 10.6667 2 10.6667 2H12.6667C13.3333 2 14 2.66667 14 3.33333V5.33333H13.3333V3.33333H12.6667ZM5.33333 6.66667V12.6667C5.33333 13.3333 5.66667 14 6.33333 14H11.6667C12.3333 14 12.6667 13.3333 12.6667 12.6667V6.66667H11.3333V12H6.66667V6.66667H5.33333Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="w-[60%] flex items-center justify-end gap-1 mx-6 ">
              <span className="flex flex-col h-[22px] items-center justify-center font-medium font-geistsans text-xs">
                SERVICE
              </span>
              {notifications.service > 0 && (
                <div className="absolute top-0 right-0 w-4 h-4  text-black text-xs flex items-center justify-center">
                  {notifications.service}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* right : FILTER */}
        <div className="w-full flex justify-end">
          <div
            className="transition-fx relative flex items-center gap-2 py-1 px-2 rounded-lg border-[1px] border-brand-grayish cursor-pointer bg-brand-main text-brand-white"
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
    </div>
  );
};

export default Filter;
