"use client";

import { Suspense } from "react";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ButtonLight from "@/components/ButtonLight";
import jos from "@/assets/imgs/landing/visit/jos_township.jpg";
import ganawari from "@/assets/imgs/landing/visit/ganawuri_road.jpg";
import rayfield from "@/assets/imgs/landing/visit/rayfield_resort.jpg";
import hawon_kibbo from "@/assets/imgs/landing/visit/riyom_hawon_kibbo.jpg";

// Define a type for the location keys
type LocationKeys = "jos" | "ganawari" | "rayfield" | "hawon_kibbo";

// Define an object to map location names to their respective images
const images: Record<LocationKeys, StaticImageData> = {
  jos,
  ganawari,
  rayfield,
  hawon_kibbo,
};

const Visit = () => {
  const [active, setActive] = useState<LocationKeys>("hawon_kibbo");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-brand-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
            <span className="font-light text-sm text-black font-geistmono">
              VISIT
            </span>
            <span className="font-medium text-4xl font-geistsans text-brand-main">
              Visiting The Beautiful Plateau State?{" "}
            </span>
            <span className="font-normal text-base text-[rgba(14, 62, 64, 0.8)] font-geistsans w-[75%]">
              Plateau State is a diverse and vibrant region in Nigeria, known
              for its stunning natural landscapes and rich cultural heritage.
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-20">
            {/* content */}
            <div className="flex flex-col items-center justify-between gap-8 w-full m-auto">
              <div className="hide-scrollbar flex flex-row gap-4 items-center justify-start w-full overflow-x-scroll">
                <span
                  onClick={() => setActive("hawon_kibbo")}
                  className={
                    active === "hawon_kibbo"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Hawon Kibbo
                </span>
                <span
                  onClick={() => setActive("jos")}
                  className={
                    active === "jos"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Jos City
                </span>
                <span
                  onClick={() => setActive("ganawari")}
                  className={
                    active === "ganawari"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Ganawari Road
                </span>
                <span
                  onClick={() => setActive("rayfield")}
                  className={
                    active === "rayfield"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Rayfield Resort
                </span>
                {/* <span
                  onClick={() => setActive("hawon_kibbo")}
                  className={
                    active === "hawon_kibbo"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Hawon Kibbo
                </span> */}
              </div>
              <div className="w-full h-[618px]">
                <Suspense
                  fallback={
                    <p className="text-xl font-medium text-brand-main p-12">
                      Loading image, please wait...
                    </p>
                  }
                >
                  <Image
                    src={images[active]}
                    alt="visit"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    // loading="lazy"
                  />
                </Suspense>
              </div>
            </div>
            <ButtonLight text={"Visit Plateau"} url={"tourism"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
