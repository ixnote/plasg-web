"use client";

import SubsectionHeader from "@/components/SubsectionHeader";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// import governance from "@/assets/imgs/government/three-points/governance.jpg";
import governance from "@/assets/imgs/government/three-points/economy3.jpg";
// import infrastructure from "@/assets/imgs/government/three-points/infrastructure.jpg";
import infrastructure from "@/assets/imgs/government/three-points/Infrastructure__.jpg";
// import economy from "@/assets/imgs/government/three-points/image 20.png";
import economy from "@/assets/imgs/government/three-points/economy2.jpg";

const ThreePointAgenda = () => {
  const [active, setActive] = useState("governance");

  const governanceRef = useRef(null);
  const infrastructureRef = useRef(null);
  const economyRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    if (governanceRef.current) observer.observe(governanceRef.current);
    if (infrastructureRef.current) observer.observe(infrastructureRef.current);
    if (economyRef.current) observer.observe(economyRef.current);

    return () => {
      if (governanceRef.current) observer.unobserve(governanceRef.current);
      if (infrastructureRef.current)
        observer.unobserve(infrastructureRef.current);
      if (economyRef.current) observer.unobserve(economyRef.current);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 pb-12 lg:gap-20">
        <SubsectionHeader
          left={"3 POINT AGENDA"}
          right={
            "We are Charting the Course: Unveiling the Three-Point Policy for Plateau State's Prosperity"
          }
        />
        <div className="flex items-start justify-between">
          <div className="hidden font-geistmono lg:hide-scrollbar lg:w-[20%] lg:flex-col lg:gap-4 lg:items-start lg:justify-start lg:flex">
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
          <div className="w-full text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px] lg:w-[80%]">
            <div className="w-full hidden flex-col gap-4 lg:gap-8 lg:flex">
              {active === "governance" && (
                // <div className="relative h-[463px] w-full">
                //   <Image
                //     src={governance}
                //     alt="governance"
                //     className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                //     loading="lazy"
                //   />
                //   <div className="absolute top-5 left-5 flex items-center gap-12">
                //     <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                //       01
                //     </div>
                //     <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                //       Peace, Security and Good Governance{" "}
                //     </span>
                //   </div>
                //   <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                //     This prioritizes strategic investments in promoting peace,
                //     security, and good governance on the Plateau, aiming to
                //     ensure stability, prosperity, and enhanced well-being for
                //     all residents.
                //   </div>
                // </div>
                <div className="relative h-[463px] w-full">
                  <Image
                    src={governance}
                    alt="governance"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                  {/* Gray overlay */}
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      01
                    </div>
                    <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                      Peace, Security and Good Governance{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    This prioritizes strategic investments in promoting peace,
                    security, and good governance on the Plateau, aiming to
                    ensure stability, prosperity, and enhanced well-being for
                    all residents.
                  </div>
                </div>
              )}
              {active === "infrastructure" && (
                // <div className="relative h-[463px] w-full">
                //   <Image
                //     src={infrastructure}
                //     alt="infrastructure"
                //     className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                //     loading="lazy"
                //   />
                //   <div className="absolute top-5 left-5 flex items-center gap-12">
                //     <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                //       02
                //     </div>
                //     <span className=" font-medium text-2xl text-brand-white font-geistsans px-2">
                //       Physical Infrastructural Development{" "}
                //     </span>
                //   </div>
                //   <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                //     This prioritizes strategic investments in public
                //     infrastructure on the Plateau with aim to drive economic
                //     progress, foster social cohesion, and improve residents'
                //     overall quality of life through improved infrastructure.
                //   </div>
                // </div>
                <div className="relative h-[463px] w-full">
                  <Image
                    src={infrastructure}
                    alt="infrastructure"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                  {/* Gray overlay */}
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      02
                    </div>
                    <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                      Physical Infrastructural Development{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    This prioritizes strategic investments in public
                    infrastructure on the Plateau with aim to drive economic
                    progress, foster social cohesion, and improve residents'
                    overall quality of life through improved infrastructure.
                  </div>
                </div>
              )}
              {active === "economy" && (
                // <div className="relative h-[463px] w-full">
                //   <Image
                //     src={economy}
                //     alt="economy"
                //     className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                //     loading="lazy"
                //   />
                //   <div className="absolute top-5 left-5 flex items-center gap-12">
                //     <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                //       03
                //     </div>
                //     <span className=" font-medium text-2xl text-brand-white font-geistsans px-2">
                //       Sustainable Economic Rebirth{" "}
                //     </span>
                //   </div>
                //   <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                //     The "Sustainable Economic Rebirth" initiative focuses on
                //     strategic investments in public infrastructure across
                //     Plateau State. Its aim is to propel economic growth, promote
                //     sustainable economic practices
                //   </div>
                // </div>
                <div className="relative h-[463px] w-full">
                  <Image
                    src={economy}
                    alt="economy"
                    className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                  {/* Gray overlay */}
                  <div className="absolute top-5 left-5 flex items-center gap-12">
                    <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                      03
                    </div>
                    <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                      Sustainable Economic Rebirth{" "}
                    </span>
                  </div>
                  <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                    The "Sustainable Economic Rebirth" initiative focuses on
                    strategic investments in public infrastructure across
                    Plateau State. Its aim is to propel economic growth, promote
                    sustainable economic practices
                  </div>
                </div>
              )}
            </div>
            {/* mobile stuff */}
            <div className="w-full flex flex-col gap-4 lg:gap-8 lg:hidden">
              <div className="relative h-[463px] w-full">
                <Image
                  src={governance}
                  alt="governance"
                  className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                {/* Gray overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-12">
                  <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                    01
                  </div>
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Peace, Security and Good Governance{" "}
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in promoting peace,
                  security, and good governance on the Plateau, aiming to ensure
                  stability, prosperity, and enhanced well-being for all
                  residents.
                </div>
              </div>
              <div className="relative h-[463px] w-full">
                <Image
                  src={infrastructure}
                  alt="infrastructure"
                  className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                {/* Gray overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-12">
                  <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                    02
                  </div>
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Physical Infrastructural Development{" "}
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in public
                  infrastructure on the Plateau with aim to drive economic
                  progress, foster social cohesion, and improve residents'
                  overall quality of life through improved infrastructure.
                </div>
              </div>
              <div className="relative h-[463px] w-full">
                <Image
                  src={economy}
                  alt="economy"
                  className="w-[1360px] h-full object-cover rounded-xl xl:w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 rounded-xl"></div>{" "}
                {/* Gray overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-12">
                  <div className="glass-fx p-2 text-brand-white font-normal text-sm font-geistmono">
                    03
                  </div>
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Sustainable Economic Rebirth{" "}
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-4 w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  The "Sustainable Economic Rebirth" initiative focuses on
                  strategic investments in public infrastructure across Plateau
                  State. Its aim is to propel economic growth, promote
                  sustainable economic practices
                </div>
              </div>
            </div>

            {/* <div className="w-full flex flex-col gap-4 lg:gap-8 lg:hidden">
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
                <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in promoting peace,
                  security, and good governance on the Plateau, aiming to ensure
                  stability, prosperity, and enhanced well-being for all
                  residents.
                </div>
              </div>
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
                <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in public
                  infrastructure on the Plateau with aim to drive economic
                  progress, foster social cohesion, and improve residents'
                  overall quality of life through improved infrastructure.
                </div>
              </div>
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
                <div className="glass-fx absolute bottom-5 left-4  w-[92%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  The "Sustainable Economic Rebirth" initiative focuses on
                  strategic investments in public infrastructure across Plateau
                  State. Its aim is to propel economic growth, promote
                  sustainable economic practices
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* <div className="flex items-start justify-between relative">
          <div className="hidden lg:flex lg:flex-col lg:gap-4 lg:items-start lg:justify-start lg:w-[20%] lg:absolute">
            <span
              onClick={() =>
                governanceRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className={
                active === "governance"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Governance
            </span>
            <span
              onClick={() =>
                infrastructureRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className={
                active === "infrastructure"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Infrastructure
            </span>
            <span
              onClick={() =>
                economyRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className={
                active === "economy"
                  ? "transition-fx flex items-center justify-center font-geistsans font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] text-nowrap text-brand-main border-b-brand-main"
                  : "visit-hover-fx transition-fx flex items-center justify-center font-geistsans text-brand-grayish font-medium text-3xl text-left py-2 pb-1 cursor-pointer border-b-[3px] border-b-transparent text-nowrap hover:text-brand-main"
              }
            >
              Economy
            </span>
          </div>
          <div className="w-full text-brand-main font-medium text-[40px] flex items-start font-geistsans leading-[48px] mt-[-5px] lg:w-[80%] lg:ml-[20%] lg:h-[600px] lg:overflow-y-scroll lg:pb-8">
            <div className="w-full flex flex-col gap-4 lg:gap-8">
              <div
                id="governance"
                ref={governanceRef}
                className="relative h-[463px] w-full"
              >
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
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Peace, Security and Good Governance
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-16 w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in promoting peace,
                  security, and good governance on the Plateau, aiming to ensure
                  stability, prosperity, and enhanced well-being for all
                  residents.
                </div>
              </div>
              <div
                id="infrastructure"
                ref={infrastructureRef}
                className="relative h-[463px] w-full"
              >
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
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Physical Infrastructural Development
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-16 w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  This prioritizes strategic investments in public
                  infrastructure on the Plateau with aim to drive economic
                  progress, foster social cohesion, and improve residents'
                  overall quality of life through improved infrastructure.
                </div>
              </div>
              <div
                id="economy"
                ref={economyRef}
                className="relative h-[463px] w-full"
              >
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
                  <span className="font-medium text-2xl text-brand-white font-geistsans px-2">
                    Sustainable Economic Rebirth
                  </span>
                </div>
                <div className="glass-fx absolute bottom-5 left-16 w-[60%] text-brand-white font-normal text-base font-geistsans p-4 lg:left-[104px] lg:w-[500px]">
                  The "Sustainable Economic Rebirth" initiative focuses on
                  strategic investments in public infrastructure across Plateau
                  State. Its aim is to propel economic growth, promote
                  sustainable economic practices.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ThreePointAgenda;
