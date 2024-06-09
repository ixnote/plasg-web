import React from "react";
import { GoHome } from "react-icons/go";
import { articleData } from "@/utils/mockArticle";
import ArticleImage from "@/assets/imgs/img.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import LegislatureCard from "@/components/LegislatureCard";

function Legislative() {
  const data = articleData;
  const article = {
    image: ArticleImage,
    name: "Hon. Gabriel Dewan",
    position: "Speaker ",
  };
  return (
    <div className="pt-[200px]">
      <span className="max-w-[1200px] mx-auto flex flex-col">
        <span className="flex flex-col gap-8 mb-10">
          <span className="uppercase text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px]">
            <GoHome size={18} />/<p>GOVERNMENT</p>/<p>LEGISLATIVE</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
              {data?.title}
            </p>
            <span className="col-span-2 flex flex-col gap-6">
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
                Meet the esteemed legislators who champion the interests of our
                community, shaping policies and laws that impact our lives.
              </p>
              <button className="h-10 px-8 rounded-sm bg-white border w-fit border-gray-300 flex items-center justify-center gap-2">
                Scroll down <IoIosArrowRoundDown />
              </button>
            </span>
          </span>
        </span>
        <span className="grid lg:grid-cols-3 grid-cols-1 gap-5 gap-y-16 my-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((item, index) => (
            <LegislatureCard data={article} key={index} />
          ))}
        </span>
      </span>
    </div>
  );
}

export default Legislative;
