import ButtonLight from "@/components/ButtonLight";
import Image from "next/image";
import React from "react";

const MdaDirector = ({ slug, director }: any) => {
  //   console.log("🚀 ~ MdaDirector ~ director:", director);
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-24  bg-brand-white">
      {/* content */}
      <div className="w-full flex items-center justify-between flex-col gap-8 md:justi-start lg:flex-row lg:gap-4 lg:items-center">
        {/* left */}
        <div className="w-full flex flex-col items-center gap-16 lg:w-[40%] lg:items-start lg:ml-24">
          <div className="flex flex-col items-center gap-10 w-full lg:w-[80%] lg:items-start">
            <span className="w-max font-normal text-base text-brand-dark font-geistmono px-2 py-1 border-[1px] border-brand-dark rounded">
              Director
            </span>
            <span className="font-medium text-4xl text-center font-geistsans text-brand-dark lg:text-left">
              From the {director?.position}
            </span>
            <span className="font-normal text-base text-center text-brand-dark font-geistsans  w-[90%] lg:w-full lg:text-left">
              {director?.message}
            </span>
          </div>
          <ButtonLight text={"About Us"} url={`mda/${slug}/about`} />
        </div>
        {/* right */}
        <div className="w-full lg:w-[50%]">
          <div className="relative mx-auto w-full xl:max-w-[680px]">
            <Image
              src={director?.image}
              width={680}
              height={690}
              alt="director"
              className="w-[680px] rounded-xl mx-auto"
            />
            <div className="glass-fx w-[90%] absolute bottom-4 left-4 flex flex-col gap-1 p-4 text-left md:w-[476px] md:gap-4 md:p-6 md:bottom-10 md:left-[3.4rem] lg:left-[2.9rem] lg:w-[75%] 2xl:w-[75%]">
              <span className="font-medium text-[24px] font-geistsans text-brand-white md:text-4xl">
                {director?.name}
              </span>
              <span className="font-normal text-base font-geistsans text-brand-white">
                {director?.position}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdaDirector;
