"use client";

import SubsectionHeader from "@/components/SubsectionHeader";
import Image from "next/image";
import React, { useState } from "react";

import economy from "../../../public/government/harvest.jpg";
import infrastructure from "../../../public/government/infrastructure.jpg";
import governance from "../../../public/government/hands.jpg";
// import governance from "../../../public/landing/visit/jos.jpg";
// import infrastructure from "../../../public/landing/visit/kurang.jpg";
// import economy from "../../../public/landing/visit/kurra.jpg";

const ThreePointAgenda = () => {
  const [active, setActive] = useState("governance");

  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-20 pb-12">
        <SubsectionHeader
          left={"3 POINT AGENDA"}
          right={
            "We are Charting the Course: Unveiling the Three-Point Policy for Plateau State's Prosperity"
          }
        />
        <div className="flex items-start justify-between">
          <div className="hide-scrollbar w-[20%] flex flex-col gap-4 items-start justify-start font-geistmono">
            <span
              onClick={() => setActive("governance")}
              className={
                active === "governance"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Governance
            </span>
            <span
              onClick={() => setActive("infrastructure")}
              className={
                active === "infrastructure"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Infrastructure
            </span>
            <span
              onClick={() => setActive("economy")}
              className={
                active === "economy"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap  text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Economy
            </span>
          </div>
          <div className="w-[80%] text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px]">
            <div className="w-full h-[463px]">
              {active === "governance" && (
                <div className="relative h-[463px] w-full">
                  <Image
                    src={governance}
                    alt="governance"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      01
                    </div>
                    <span className=" font-medium text-2xl text-brand-white font-geistsans px-2">
                      Peace, Security and Good Governance{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-16  w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    This prioritizes strategic investments in promoting peace,
                    security, and good governance on the Plateau, aiming to
                    ensure stability, prosperity, and enhanced well-being for
                    all residents.
                  </div>
                </div>
              )}
              {active === "infrastructure" && (
                <div className="relative h-[463px] w-full">
                  <Image
                    src={infrastructure}
                    alt="infrastructure"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      02
                    </div>
                    <span className=" font-medium text-2xl text-brand-white font-geistsans px-2">
                      Physical Infrastructural Development{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-16  w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    This prioritizes strategic investments in public
                    infrastructure on the Plateau with aim to drive economic
                    progress, foster social cohesion, and improve residents'
                    overall quality of life through improved infrastructure.
                  </div>
                </div>
              )}
              {active === "economy" && (
                <div className="relative h-[463px] w-full">
                  <Image
                    src={economy}
                    alt="economy"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      03
                    </div>
                    <span className=" font-medium text-2xl text-brand-white font-geistsans px-2">
                      Sustainable Economic Rebirth{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-16  w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    The "Sustainable Economic Rebirth" initiative focuses on
                    strategic investments in public infrastructure across
                    Plateau State. Its aim is to propel economic growth, promote
                    sustainable economic practices
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePointAgenda;
