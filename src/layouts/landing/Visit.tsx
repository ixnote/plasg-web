"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ButtonLight from "@/components/ButtonLight";
import jos from "../../../public/landing/visit/jos.jpg";
import shere from "../../../public/landing/visit/shere.jpg";
import kurra from "../../../public/landing/visit/kurra.jpg";
import kurang from "../../../public/landing/visit/kurang.jpg";
import pandam from "../../../public/landing/visit/pandam.jpg";

// Define a type for the location keys
type LocationKeys = "jos" | "shere" | "kurra" | "kurang" | "pandam";

// Define an object to map location names to their respective images
const images: Record<LocationKeys, StaticImageData> = {
  jos,
  shere,
  kurra,
  kurang,
  pandam,
};

const Visit = () => {
  const [active, setActive] = useState<LocationKeys>("jos");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-white">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
            <span className="font-light text-sm text-black font-geistmono">
              VISIT
            </span>
            <span className="font-medium text-4xl font-geistsans text-[#0E3E40]">
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
                  onClick={() => setActive("shere")}
                  className={
                    active === "shere"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Shere Hills
                </span>
                <span
                  onClick={() => setActive("kurra")}
                  className={
                    active === "kurra"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Kurra Falls
                </span>
                <span
                  onClick={() => setActive("kurang")}
                  className={
                    active === "kurang"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Kurang Volcanic Mountain
                </span>
                <span
                  onClick={() => setActive("pandam")}
                  className={
                    active === "pandam"
                      ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                      : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl p-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
                  }
                >
                  Pandam Game Reserve
                </span>
              </div>
              <div className="w-full h-[618px]">
                <Image
                  src={images[active]}
                  alt="visit"
                  className="w-[1360px] h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
            <ButtonLight text={"Visit Plateau"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
