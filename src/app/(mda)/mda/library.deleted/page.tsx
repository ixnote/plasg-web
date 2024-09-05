"use client";

import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { useGeneralContext } from "../../../../../context/GenralContext";
import ResourceFilter from "@/components/Resources/ResourceFilter";

import Nav from "../nav";
import Image from "next/image";
import AssetCardLight from "@/components/AssetCardLight";
import { LibraryItemList } from "../data";
import Footer from "@/layouts/Footer";
import Filter from "../libraryFilter";

const Library = () => {
  const { resources, oneTopicTag }: any = useGeneralContext();

  return (
    <>
      <div className="w-full mx-auto bg-brand-white 2xl:max-w-7xl">
        <div className="">
          <div>
            <Nav />
          </div>

          <div className=" mt-20 h-[144px] w-full flex flex-col justify-between items-center   mb-14 ">
            <div className="w-[800px] h-[56px] flex justify-center  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
              <p>Library</p>
            </div>
            <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
              <p>
                Welcome to our comprehensive Library, the ultimate hub for all
                services, resources, and documents provided by PICTDA{" "}
              </p>
            </div>
          </div>
        </div>
        <ResourceFilter />
        {/* <div className="">
          <div className="h-[3670] pb-48 w-[92%] mx-auto ">
            <Filter />
            <div className="w-[1160px] mx-auto">
              <hr className=" border-[1px] border-[#D4D4D4] my-8" />
            </div>
            <div className="h-[3320px]">
              <div className="flex items-center justify-between flex-wrap gap-4 w-full h-full m-auto my-4">
                {LibraryItemList.map((item) => (
                  <AssetCardLight
                    key={item.id}
                    icon={item.icon}
                    logoText={item.logoText}
                    updated={item.updated}
                    title={item.title}
                    description={item.description}
                    button1text={item.button1text}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Library;
