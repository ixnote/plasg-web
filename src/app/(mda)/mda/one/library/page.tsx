"use client";

import SectionHeader from "@/components/SectionHeader";
import React, { Suspense } from "react";
import { useGeneralContext } from "../../../../../../context/GenralContext";
import ResourceFilter from "@/components/Resources/ResourceFilter";

// import Nav from "../../nav";
// import Image from "next/image";
// import AssetCardLight from "@/components/AssetCardLight";
// import { LibraryItemList } from "../../data";
// import Footer from "@/layouts/Footer";
// import Filter from "../../libraryFilter";

import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { useSearchParams } from "next/navigation";

const Library = () => {
  const { resources, oneTopicTag }: any = useGeneralContext();

  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] mt-[140px] bg-brand-white relative flex items-center justify-center lg:pt-12">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-12">
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <p className="text-brand-main font-medium text-3xl font-geistsans">
              Library
            </p>
            <p className="text-brand-grayish font-geistsans font-normal text-xl w-[80%] lg:w-[60%] text-center">
              Welcome to our comprehensive Library, the ultimate hub for all
              services, resources, and documents we provide{" "}
            </p>
          </div>
          <div className="w-full border-b-[0.1px] border-brand-grayish/20 my-12"></div>
          {/* <Filter /> */}
          <ResourceFilter />
        </div>
      </div>
    </>
  );
};

// export default Library;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Library />
    </Suspense>
  );
}
