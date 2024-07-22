"use client";
import React, { useEffect, useState } from "react";
import ArticleImage from "@/assets/imgs/img.png";
import PlaceCard from "@/components/PlaceCard";
import { cn } from "@/utils";
import { Divider } from "@mantine/core";

function Essentials() {
  const article = {
    image: ArticleImage,
    name: "Hon. Gabriel Dewan",
    position: "Speaker ",
  };
  const data = [
    { name: "Where to Stay", value: "stay" },
    { name: "Where to Eat", value: "eat" },
  ];
  const [active, setActive] = useState<any>([data[0]]);
  useEffect(() => {
    setActive(data[0]);
  }, []);

  return (
    // <div className="py-12 bg-white px-4">
    //   <span className="max-w-[1520px] mx-auto flex flex-col">
    <div className="min-h-screen bg-brand-white py-12 max-w-[2040px] pb-[96px] relative flex items-center justify-center">
      <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
        <span className="flex flex-col gap-8 mb-10">
          <span className="text-[#0000000] opacity-80 font-light flex items-center gap-2 text-[14px] uppercase">
            <p>Essentials</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[1000px] leading-[56px] lg:col-span-4 col-span-2 ">
              Where to Stay, Where to Eat in Plateau State
            </p>
            <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
              Find the best places to stay and eat in Plateau State for a
              memorable visit.
            </p>
          </span>
        </span>
        <span className="flex gap-4 cursor-pointer mt-12">
          {data.map((item: any, index: number) => (
            <span
              key={index}
              className={cn(
                "pb-3 whitespace-nowrap text-[32px] text-gray-400",
                {
                  "border-b-[3px] border-b-brand-main text-brand-main":
                    active?.value === item?.value,
                }
              )}
              onClick={() => setActive(item)}
            >
              {item?.name}
            </span>
          ))}
        </span>
        <span className="grid lg:grid-cols-3 grid-cols-1 gap-5 gap-y-16 my-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((item, index) => (
            <PlaceCard data={article} key={index} />
          ))}
        </span>
        <Divider />
      </span>
    </div>
  );
}

export default Essentials;
