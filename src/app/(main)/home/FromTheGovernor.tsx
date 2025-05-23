import React from "react";
import governor from "@/assets/imgs/landing/BCM_homepage.webp";
import Image from "next/image";
import ButtonDark from "@/components/ButtonDark";
import ButtonLight from "@/components/ButtonLight";

const FromTheGovernor = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24  bg-brand-white">
        {/* content */}
        <div className="flex items-center justify-between flex-col gap-8 w-[92%] md:justi-start lg:flex-row lg:gap-4 lg:items-center">
          {/* left */}
          <div className="w-full lg:w-[50%]">
            <div className="relative mx-auto w-full xl:max-w-[680px]">
              <Image
                src={governor}
                alt="His excellency"
                className="w-[680px] rounded-xl mx-auto"
              />
              <div className="glass-fx w-[90%] absolute bottom-4 left-4 flex flex-col gap-1 p-4 text-left md:w-[476px] md:gap-4 md:p-6 md:bottom-10 md:left-[3.4rem] lg:left-[2.9rem] lg:w-[75%] 2xl:w-[75%]">
                <span className="font-medium text-[24px] font-geistsans text-brand-white md:text-4xl">
                  Barr. Caleb Mutfwang
                </span>
                <span className="font-normal text-base font-geistsans text-brand-white">
                  Executive Governor, Plateau State
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full flex flex-col items-center gap-24 lg:w-[45%] lg:items-start">
            <div className="flex flex-col items-center gap-8 w-full lg:w-[80%] lg:items-start">
              <span className="font-normal text-base text-brand-main font-geistmono">
                FROM THE GOVERNOR
              </span>
              <span className="font-medium text-4xl text-center font-geistsans text-brand-main lg:text-left">
                &quot;No matter your origin or language, if you reside on or
                cherish the Plateau, you&apos;re family to me.&quot;
              </span>
              <span className="font-normal text-base text-center text-brand-dark font-geistsans  w-[90%] lg:w-full lg:text-left">
                Plateau State&apos;s values are not just a badge of honor; they
                are the cornerstone of our history and our journey ahead. We
                stand at the forefront of progress, championing bold reforms
                that echo our deeply-held principles. It&apos;s this spirit of
                innovation that fuels our diversity, propels our economy, and
                positions us as a beacon of growth and opportunity.
              </span>
            </div>
            {/* <ButtonDark
              text={"Learn More About the Governor"}
              url={"government/governor"}
            /> */}
            <div className="w-full flex items-center justify-start">
              <div className="w-full flex items-center justify-center lg:w-[334px]">
                <ButtonLight
                  text={"Learn More About the Governor"}
                  url={"government/governor"}
                />
                {/* <ButtonDark
                  text={"Learn More About the Governor"}
                  url={"government/governor"}
                /> */}
              </div>
              <div className="hidden lg:w-[40%] lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FromTheGovernor;
