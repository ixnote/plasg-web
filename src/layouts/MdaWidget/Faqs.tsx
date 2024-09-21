"use client";
import React, { useState } from "react";
import { Divider } from "@mantine/core";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Faqs() {
  const data = [
    {
      question: "Where to Stay in Plateau State?",
      answer:
        "Plateau State offers a wide range of accommodations, from budget-friendly hotels to luxury resorts. Popular areas include Jos, where you'll find various hotels like Hill Station Hotel and Rayfield Resort, providing a comfortable stay with beautiful views of the surrounding landscape.",
    },
    {
      question: "What are the Best Attractions in Plateau State?",
      answer:
        "Some must-see attractions in Plateau State include the scenic Shere Hills, Wase Rock, Jos Wildlife Park, and Riyom Rock. The state is also home to stunning waterfalls like Kurra Falls and the beautiful Jos Museum, which houses a variety of historical and cultural artifacts.",
    },
    {
      question: "When is the Best Time to Visit Jos?",
      answer:
        "The best time to visit Jos and Plateau State is during the dry season, from November to February. During this time, the weather is cool and pleasant, making it ideal for sightseeing and outdoor activities. However, the rainy season (April to October) is also beautiful with lush green landscapes.",
    },
    {
      question: "What Outdoor Activities Can I Do in Plateau State?",
      answer:
        "Plateau State offers a variety of outdoor activities including hiking the Shere Hills, bird watching at Pandam Wildlife Park, and boating at Rayfield Resort. You can also explore the wildlife at Jos Wildlife Park or enjoy a peaceful walk through the rock formations at Riyom Rock.",
    },
    {
      question: "What is the Best Way to Travel Around Plateau State?",
      answer:
        "The best way to travel around Plateau State is by road. You can hire a car or use local taxis and buses to get around. Roads are fairly accessible to most tourist destinations, though some remote areas might require more rugged vehicles.",
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
                className="border-b-[1px] border-b-gray-300 flex flex-col gap-8 group"
                onClick={() => handleOpen(index)}
              >
                <span className="flex justify-between gap-4 items-center cursor-pointer py-6 px-0 group-hover:px-8 group-hover:bg-brand-lightYellow group-hover:border-none group-hover:rounded-lg">
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
