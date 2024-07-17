"use client";

import SectionHeader from "@/components/SectionHeader";
import React from "react";
import Filter from "./Filter";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import { useGeneralContext } from "../../../../context/GenralContext";

// import { allResources } from "@/server/actions/resources";
// import { allTags } from "@/server/actions/tags";

const Page = () => {
  // const result = await Promise.all([allResources(), allTags()]);

  // const data = {
  //   resources: result[0],
  //   tags: result[1],
  // };

  const { resources, oneTopicTag }: any = useGeneralContext();

  return (
    <>
      {/* <Header /> */}
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
          {/* <Filter data={data} /> */}
          <Filter />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
