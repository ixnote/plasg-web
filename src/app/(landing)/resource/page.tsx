"use client";

import SectionHeader from "@/components/SectionHeader";
import React from "react";
import Filter from "./Filter";
import { useGeneralContext } from "../../../../context/GenralContext";

const Page = () => {
  const { resources, oneTopicTag }: any = useGeneralContext();

  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-brand-white">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8 -mt-12">
          <SectionHeader
            title={
              resources?.resources?.[0]?.title ||
              oneTopicTag?.title ||
              "Find Useful Resources"
            }
            description={
              resources?.resources?.[0]?.description ||
              oneTopicTag?.description ||
              "This page helps you find and filter resources based on your preference. You can select a resource from the navigation menu to get started."
            }
            baseURL={
              resources?.resources?.[0]?.main_topic_tag?.name ||
              oneTopicTag?.name ||
              "resource"
            }
            baseText={
              resources?.resources?.[0]?.main_topic_tag?.name ||
              oneTopicTag?.name ||
              "resource"
            }
          />
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Page;
