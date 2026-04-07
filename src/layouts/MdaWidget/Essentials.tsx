"use client";
import React, { useEffect, useState } from "react";
import miango from "@/assets/imgs/miango.jpg";
import teest from "@/assets/imgs/teest.jpg";
import PlaceCard from "@/components/PlaceCard";
import { cn } from "@/utils";
import { Divider } from "@mantine/core";

function Essentials() {
  const hotels = [
    {
      image:
        "https://images.trvl-media.com/lodging/35000000/34540000/34536000/34535926/f89651e3.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      name: "Valada Hotel",
      link: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a6/43/d0/our-suites-rooms-are.jpg?w=1200&h=-1&s=1",
      name: "Shartell Hotels",
      link: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/52/e8/73/my-room-was-always-tidy.jpg?w=1200&h=-1&s=1",
      name: "Novel Suites Resort LTD",
      link: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/db/b8/c5/caption.jpg?w=1200&h=-1&s=1",
      name: "Crispan Suites & Event Centre",
      link: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/62/00/silk-suites.jpg?w=1200&h=-1&s=1",
      name: "Silk Suites",
      link: "#",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/b4/fc/hbc-resort.jpg?w=1100&h=-1&s=1",
      name: "Healthy Body Clinic and Resort",
      link: "#",
    },
    {
      image: miango,
      name: "Miango Rest Home",
      link: "#",
    },
    {
      image: teest,
      name: "Teest Hotel and Suites",
      link: "https://www.instagram.com/teest_hotel?igsh=MW05Ynk2bGtxZzc0dQ==",
    },
  ];
  console.log("🚀 ~ Essentials ~ hotels:", hotels);
  const data = [
    { name: "Where to Stay", value: "stay" },
    // { name: "Where to Eat", value: "eat" },
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
          {/* {hotels.map(({ hotel, i }: any) => (
            <PlaceCard data={hotel} key={i} />
          ))} */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <PlaceCard data={hotels[index]} key={index} />
          ))}
        </span>
        <Divider />
      </span>
    </div>
  );
}

export default Essentials;
