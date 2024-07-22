"use client";
import React, { useState } from "react";
import { Divider } from "@mantine/core";
import { AiOutlineMinus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Faqs() {
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
    <>
      {/* <div className="py-12 bg-white px-4 pb-4">
        <span className="max-w-[1520px] mx-auto flex flex-col"> */}
      <div className="min-h-screen bg-brand-white py-12 max-w-[2040px] pb-[96px] relative flex items-center justify-center">
        <span className="m-auto w-[92%] flex justify-between flex-col gap-8">
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
                className="border-b-[1px] border-b-gray-300 flex flex-col gap-8  group"
                onClick={() => handleOpen(index)}
              >
                <span className="flex justify-between gap-4 items-center cursor-pointer py-6 px-0 group-hover:px-8  group-hover:bg-brand-lightYellow group-hover:border-none group-hover:rounded-lg">
                  <p className="text-[40px] text-gray-700 font-medium max-w-[800px] py-0 ">
                    {item.question}
                  </p>
                  {active === index ? (
                    <FiChevronUp
                      size={40}
                      className="text-gray-300 group-hover:text-gray-700"
                    />
                  ) : (
                    <FiChevronDown
                      size={40}
                      className="text-gray-300 group-hover:text-gray-700"
                    />
                  )}
                </span>
                {active === index ? (
                  <span>
                    <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[800px] px-8 pb-12">
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
    </>
  );
}

export default Faqs;
