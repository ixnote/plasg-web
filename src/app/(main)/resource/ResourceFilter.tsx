"use client";

import React, { useEffect, useState } from "react";
import { useGeneralContext } from "../../../../context/GenralContext";
import ResourceCard from "@/components/ResourceCard";
import moment from "moment";
import { Loader } from "@mantine/core";

const ResourceFilter = () => {
  const [active, setActive] = useState("all");
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
    totalPages,
    setTotalPages,
    activePage,
    setActivePage,
  }: any = useGeneralContext();

  const handleTabSwitch = async () => {
    setActive(activeTag.name);
    setTypeTagId(activeTag.id);
  };

  const handleShowAllTab = async () => {
    setActive("all");
    setTypeTagId("");
    return;
  };

  useEffect(() => {
    handleTabSwitch();
  }, [activeTag]);

  useEffect(() => {
    allResources(activePage);
  }, [activePage]);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  const handleNextPage = () => {
    // setActivePage(activePage + 1);
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  useEffect(() => {
    setActive("all");
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-8 items-start -mt-12">
      <div className="flex flex-col items-start justify-between w-full lg:flex-row">
        {/* left */}
        <div className="flex gap-4 mb-8 pb-2 font-geistmono w-full overflow-x-scroll lg:overflow-hidden lg:w-[20%] lg:flex-col lg:gap-4 lg:items-start lg:justify-start">
          <span
            onClick={() => handleShowAllTab()}
            className={
              active === "all"
                ? "transition-fx flex items-center justify-center font-geistsans font-medium text-lg text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main capitalize lg:text-2xl"
                : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-lg text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main capitalize lg:text-2xl"
            }
          >
            Show All
          </span>
          {/* tabs */}
          {typeTags &&
            typeTags.map((tag: any, i: number) => (
              <span
                key={i}
                onClick={() =>
                  setActiveTag({
                    id: tag.id ? tag.id : "",
                    name: tag.name ? tag.name : "",
                  })
                }
                className={
                  active === tag.name
                    ? "transition-fx flex items-center justify-center font-geistsans font-medium text-lg text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main capitalize lg:text-2xl"
                    : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-lg text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main capitalize lg:text-2xl"
                }
              >
                {tag.name}
              </span>
            ))}
          {/* <span
            onClick={() => setActive("services")}
            className={
              active === "services"
                ? "transition-fx flex items-center justify-center font-geistsans font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main capitalize"
                : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main capitalize"
            }
          >
            services
          </span>
          <span
            onClick={() => setActive("documents")}
            className={
              active === "documents"
                ? "transition-fx flex items-center justify-center font-geistsans font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main capitalize"
                : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main capitalize"
            }
          >
            documents
          </span>
          <span
            onClick={() => setActive("articles")}
            className={
              active === "articles"
                ? "transition-fx flex items-center justify-center font-geistsans font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main capitalize"
                : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-2xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main capitalize"
            }
          >
            articles
          </span> */}
        </div>
        {/* right */}
        <div className="w-full text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px] lg:w-[80%]">
          <div className="w-full flex flex-col max-h-[720px] overflow-y-scroll lg:overflow-hidden lg:h-max">
            {/* Cards */}
            {resources?.resources?.length > 0 ? (
              <>
                {loadingResource ? (
                  <span className="flex items-center justify-center w-full py-8 px-5">
                    <Loader color="black" />
                  </span>
                ) : (
                  resources.resources.map((resource: any, i: number) => (
                    <ResourceCard
                      key={i}
                      mda={"Ministry of Agriculture"}
                      type={resource.main_topic_tag.name}
                      title={resource.name}
                      description={resource.description}
                      url={resource.link}
                      id={resource.id}
                      updated={moment(resource.updatedAt).fromNow()}
                    />
                  ))
                )}
              </>
            ) : (
              <>
                <div className="mx-auto p-4 bg-brand-secondary/40 rounded-lg text-base font-semibold font-geistsans lg:mt-8">
                  No available resource.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full flex items-center justify-center lg:justify-end">
        <div className="flex items-center gap-4">
          {/* left arrow */}
          <div
            className={`cursor-pointer flex items-center ${
              activePage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviousPage}
          >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* numbers */}
          <div className="flex items-center gap-4">
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                className={
                  activePage === index + 1
                    ? "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-white font-geistsans font-normal text-sm bg-brand-main"
                    : "transition-fx cursor-pointer flex items-center justify-center p-2 w-[40px] h-[36px] rounded-lg text-brand-main font-geistsans font-normal text-sm hover:bg-brand-main hover:text-brand-white"
                }
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          {/* right arrow */}
          <div
            className={`cursor-pointer flex items-center ${
              activePage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextPage}
          >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceFilter;
