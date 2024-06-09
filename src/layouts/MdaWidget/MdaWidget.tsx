import React from "react";
import { GoHome } from "react-icons/go";
import ArticleImage from "@/assets/imgs/img.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import LegislatureCard from "@/components/LegislatureCard";
import { Divider } from "@mantine/core";
import { FiSearch } from "react-icons/fi";

function MdaWidget() {
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
            <GoHome size={18} />/<p>GOVERNMENT</p>/
            <p>MINISTRIES, DEPARTMENTS & AGENCIES</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
              Ministries, Departments & Agencies
            </p>
            <span className="col-span-2 flex flex-col gap-6">
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
                Plateau State's Ministries, Departments, and Agencies (MDAs) are
                the driving force behind our community's progress. Discover the
                array of dedicated entities committed to serving you. Explore
                essential public services, strategic initiatives, and innovative
                solutions aimed at enhancing your well-being and prosperity
              </p>
              <button className="h-10 px-8 rounded-sm bg-white border w-fit border-gray-300 flex items-center justify-center gap-2">
                Scroll down <IoIosArrowRoundDown />
              </button>
            </span>
          </span>
        </span>
        <span className="flex flex-col gap-8 my-16">
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <span className="lg:col-span-3 col-span-2">
              <p className="text-[40px] text-brand-main font-medium max-w-[800px] leading-[48px]">
                Name of MDA
              </p>
            </span>
            <span className="flex border-b-[1px] border-b-[#ffffff70] col-span-2">
              <input
                type="text"
                placeholder="Find MDA..."
                className="w-full flex-grow-0 bg-transparent py-2 text-[28px] outline-none"
              />
              <button className="border border-gray-200 bg-brand-lightYellow text-brand-main w-12 h-12 rounded flex justify-center items-center">
                <FiSearch size={24} />
              </button>
            </span>
          </span>
          <Divider />
        </span>
      </span>
    </div>
  );
}

export default MdaWidget;
