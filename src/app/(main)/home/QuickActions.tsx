"use client";

import React from "react";
import AssetCardLight from "@/components/AssetCardLight";
import ButtonLight from "@/components/ButtonLight";
import { useGeneralContext } from "../../../../context/GenralContext";
import moment from "moment";

const QuickActions = () => {
  const { homeResources }: any = useGeneralContext();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-brand-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          {/* top */}
          <div className="w-full flex flex-col gap-4 lg:w-[65%]">
            <span className="font-light text-[10px] text-brand-dark font-geistmono md:text-xs lg:text-sm">
              QUICK ACTIONS
            </span>
            <span className="font-medium text-[28px] font-geistsans text-brand-main md:text-4xl">
              Easily Access Essential Information on Topics of Interest{" "}
            </span>
            <span className="w-full font-normal text-[14px] text-brand-main font-geistsans md:text-base lg:w-[75%]">
              Find key information quickly on a variety of important topics
              right here on the Plateau Government website.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-20">
            {/* content */}
            <div className="flex items-center justify-between flex-wrap gap-4 w-full m-auto">
              {/* Cards */}
              {homeResources?.length > 0 &&
                homeResources.map((resource: any, i: number) => (
                  <AssetCardLight
                    key={i}
                    logo={
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1907_7068)">
                          <path
                            d="M11.75 5.32648L11.202 5.83848C11.2722 5.91358 11.357 5.97345 11.4513 6.01438C11.5456 6.05531 11.6472 6.07643 11.75 6.07643C11.8528 6.07643 11.9544 6.05531 12.0487 6.01438C12.143 5.97345 12.2278 5.91358 12.298 5.83848L11.75 5.32648ZM9.184 18.5485C7.734 17.3725 6.042 15.8295 4.718 14.1405C3.379 12.4335 2.5 10.6805 2.5 9.07048H1C1 11.1875 2.13 13.2725 3.537 15.0665C4.959 16.8795 6.747 18.5025 8.239 19.7135L9.184 18.5485ZM2.5 9.07048C2.5 6.16548 3.768 4.37048 5.336 3.75548C6.901 3.14248 9.09 3.58048 11.202 5.83848L12.298 4.81448C9.91 2.26048 7.099 1.45448 4.789 2.35848C2.482 3.26248 1 5.74448 1 9.07048H2.5ZM15.26 19.7125C16.753 18.5015 18.541 16.8785 19.963 15.0655C21.37 13.2715 22.5 11.1865 22.5 9.06848H21C21 10.6805 20.12 12.4325 18.782 14.1395C17.458 15.8285 15.766 17.3715 14.316 18.5475L15.26 19.7125ZM22.5 9.06848C22.5 5.74348 21.018 3.26148 18.71 2.35848C16.4 1.45348 13.59 2.25848 11.202 4.81348L12.298 5.83848C14.41 3.58048 16.599 3.14148 18.164 3.75448C19.732 4.36848 21 6.16448 21 9.06848H22.5ZM8.239 19.7135C9.509 20.7455 10.392 21.5025 11.75 21.5025V20.0025C11.027 20.0025 10.577 19.6785 9.184 18.5485L8.239 19.7135ZM14.316 18.5475C12.923 19.6775 12.473 20.0025 11.75 20.0025V21.5025C13.108 21.5025 13.991 20.7455 15.261 19.7135L14.316 18.5475Z"
                            fill="#588065"
                          />
                          <path
                            d="M18.25 8.75195H16.25M16.25 8.75195H14.25M16.25 8.75195V6.75195M16.25 8.75195V10.752"
                            stroke="#588065"
                            strokeWidth="1.5"
                            strokeLinecap="round"
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
                    id={resource._id}
                    created={moment(resource.createdAt).fromNow()}
                    updated={moment(resource.updatedAt).fromNow()}
                    button1text={"View Topic"}
                    byText={resource.mda?.name}
                  />
                ))}
            </div>
            <ButtonLight text={"See All Topics"} url={"search"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
