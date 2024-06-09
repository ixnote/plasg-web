"use client";
import React, { useEffect, useState } from "react";
import ArticleImage from "@/assets/imgs/img.png";
import { cn } from "@/utils";
import { Divider } from "@mantine/core";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

function Faqs() {
  const article = {
    image: ArticleImage,
    name: "Hon. Gabriel Dewan",
    position: "Speaker ",
  };
  const data = [
    {
      question: "Where to Stay",
      answer:
        "Plateau State's Ministries, Departments, and Agencies (MDAs) are the driving force behind our community's progress. Discover the array of dedicated entities committed to serving                  you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
    },
    {
      question: "When is the cheapest time to visit Jos?",
      answer:
        "Plateau State's Ministries, Departments, and Agencies (MDAs) are the driving force behind our community's progress. Discover the array of dedicated entities committed to serving                  you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
    },
    {
      question: "Where should I stay in Jos?",
      answer:
        "Plateau State's Ministries, Departments, and Agencies (MDAs) are the driving force behind our community's progress. Discover the array of dedicated entities committed to serving                  you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
    },
  ];
  const [active, setActive] = useState<any>(null);

  const handleOpen = (value: any) => {
    if (value === active) {
      setActive(null);
    } else {
      setActive(value);
    }
  };

  return (
    <div className="py-12">
      <span className="max-w-[1200px] mx-auto flex flex-col">
        <span className="flex flex-col gap-8 mb-10">
          <span className="text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px]">
            <p>FAQ</p>
          </span>
          <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-4 col-span-2 ">
              Frequently Asked Questions about Visiting Plateau State
            </p>
            <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[700px]">
              Find answers to common questions about visiting and enjoying
              Plateau State.
            </p>
          </span>
        </span>
        <span>
          {data.map((item, index) => (
            <span
              key={index}
              className="border-b-[1px] border-b-gray-300 flex flex-col gap-8 py-12"
              onClick={() => handleOpen(index)}
            >
              <span className="flex justify-between gap-4 items-center cursor-pointer ">
                <p className="text-[40px] text-gray-700 font-medium max-w-[800px] py-0 ">
                  {item.question}
                </p>
                {active === index ? (
                  <AiOutlineMinus size={40} className="text-gray-700" />
                ) : (
                  <GoPlus size={40} className="text-gray-700" />
                )}
              </span>
              {active === index ? (
                <span>
                  <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px]">
                    {item.answer}
                  </p>
                </span>
              ) : (
                ""
              )}
            </span>
          ))}
        </span>
        <Divider />
      </span>
    </div>
  );
}

export default Faqs;
