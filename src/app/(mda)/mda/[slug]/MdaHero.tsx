import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "@/assets/imgs/layouts/PICDA.svg";
import Hero_image from "@/assets/imgs/hero_img.svg";

const MdaHero = ({ slug, hero }: any) => {
  // console.log("🚀 ~ MdaHero ~ MdaHero:", hero);
  const router = useRouter();

  return (
    <div className="flex flex-col py-24 pt-[120px] gap-4 lg:gap-16">
      <span className="flex flex-col gap-8 mb-10">
        <span className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-start gap-8">
            <p className="text-[52px] text-brand-main font-medium font-geistsans max-w-[800px] leading-[56px] lg:col-span-3 col-span-2">
              {hero?.title}
            </p>
            <div className="w-[50%] font-geistsans font-normal text-lg text-brand-dark/70">
              {hero?.description}
            </div>
            <div className="flex items-center justify-start">
              <div
                className={
                  "group transition-fx border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-white cursor-pointer bg-brand-main hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow"
                }
                onClick={() => router.push(`/mda/${slug}/library`)}
              >
                View Library
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="svg-path group-hover:fill-brand-dark/80"
                    d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span className="col-span-2 flex flex-col gap-6">
            <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px] font-geistsans">
              <Image
                src={hero?.logo}
                width={220}
                height={209}
                alt="LOGO"
                className="w-[220px] h-[209px]"
              />
            </p>
          </span>
        </span>
      </span>
      <div className="w-full">
        <Image
          src={hero?.image}
          width={1360}
          height={420}
          alt="mda_hero_image"
          className="w-[1360px] h-[580px] object-cover rounded-xl xl:w-full"
          // loading="lazy"
        />
      </div>
    </div>
  );
};

export default MdaHero;
