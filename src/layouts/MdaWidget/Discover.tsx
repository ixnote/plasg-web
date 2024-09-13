"use client";
import React, { useEffect, useState } from "react";
import { Divider } from "@mantine/core";
import { GoPlus } from "react-icons/go";
import ArticleImage from "@/assets/imgs/img.png";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "@/utils";
import { useMediaQuery } from "@mantine/hooks";
import { MdOutlineArrowOutward } from "react-icons/md";

function Discover({ destinations }: any) {
  const article = {
    image: ArticleImage,
    name: "Hon. Gabriel Dewan",
    position: "Speaker ",
  };
  const data = [
    {
      question: "Where to Stay",
      answer:
        "Plateau State&apos;s Ministries, Departments, and Agencies (MDAs) are the driving force behind our community&apos;s progress. Discover the array of dedicated entities committed to serving you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
    },
    {
      question: "When is the cheapest time to visit Jos?",
      answer:
        "Plateau State&apos;s Ministries, Departments, and Agencies (MDAs) are the driving force behind our community&apos;s progress. Discover the array of dedicated entities committed to serving you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
    },
    {
      question: "Where should I stay in Jos?",
      answer:
        "Plateau State&apos;s Ministries, Departments, and Agencies (MDAs) are the driving force behind our community&apos;s progress. Discover the array of dedicated entities committed to serving you. Explore essential public services, strategic initiatives, and innovative solutions aimed at enhancing your well-being and prosperity",
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

  const [show, setShow] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [1, 2, 3, 7, 4, 5];
  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const tabs = [
    { text: "landmark", name: "Landmarks", value: "stay" },
    { text: "parks", name: "Parks", value: "eat" },
    { text: "gallery", name: "Gallery", value: "food" },
  ];
  const [activeTab, setActiveTab] = useState<any>([tabs[0]]);
  useEffect(() => {
    tabs;
    setActiveTab(tabs[0]);
  }, []);

  const matches = useMediaQuery("(max-width: 768px)");

  const filterDestinations = (value: string) => {
    console.log("value :>> ", value);
    const newList = destinations.filter((item: any) => item.type === value);
    return newList;
  };

  return (
    <div className="py-12 bg-white">
      <span className="lg:pl-[60px] pl-5 mx-auto flex flex-col">
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-6 pr-5">
          <span className="flex flex-col gap-8 mb-10 lg:col-span-6 col-span-1">
            <span className="text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px]">
              <p>DISCOVER</p>
            </span>
            <span className="grid lg:grid-cols-5 grid-cols-2 gap-8">
              <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px] lg:col-span-4 col-span-2 ">
                Discover Must-See Destinations on the Plateau
              </p>
              <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1 max-w-[700px]">
                Explore the top attractions and must-see destinations in Plateau
                State.
              </p>
            </span>
          </span>
          <span className="col-span-3">
            <span className="flex flex-col gap-4 cursor-pointer mt-12 pb-10">
              {tabs.map((item: any, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "pb-3 whitespace-nowrap text-[32px] text-gray-400",
                    {
                      "border-b-[3px] border-b-brand-main text-brand-main w-fit":
                        activeTab?.value === item?.value,
                    }
                  )}
                  onClick={() => setActiveTab(item)}
                >
                  {item?.name}
                </span>
              ))}
            </span>
          </span>
        </div>
        <span>
          <span className="grid lg:grid-cols-10 grid-cols-3 gap-10">
            <span className="col-span-3 flex flex-col justify-end">
              {destinations && (
                <span className="flex flex-col gap-8 pb-14">
                  <p className="text-[24px] text-brand-main font-medium max-w-[800px]">
                    {filterDestinations(activeTab?.text)[0]?.name}
                  </p>
                  <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4  max-w-[700px]">
                    {destinations[0]?.description}
                  </p>
                </span>
              )}
            </span>
            <span className="lg:col-span-7 col-span-3 flex">
              <span className="carousel flex w-full flex-col gap-4">
                <div
                  className="carousel-track flex w-full gap-6"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (matches ? 101 : 72.67)
                    }%)`,
                  }}
                >
                  {images.map((item, index) => (
                    <span
                      key={index}
                      className="w-full h-auto rounded-2xl aspect-[9/7] object-cover bg-[#588065] image-container relative carousel-image relative"
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
                    >
                      <Image
                        // src={ArticleImage}
                        src={
                          "https://images.trvl-media.com/lodging/35000000/34540000/34536000/34535926/f89651e3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                        }
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-full h-full rounded-2xl aspect-[9/7] object-cover bg-[#588065] zoom-out-image"
                      />
                      {show && (
                        <span className="absolute z-30 w-full h-full aspect-[9/7] bg-[#39441f35] top-0 flex flex-col justify-end p-8">
                          <span className="flex justify-between items-center">
                            <h1 className="text-[28px] text-white font-semibold">
                              More Details
                            </h1>
                            <button className="bg-brand-lightYellow text-brand-main w-16 h-16 flex justify-center items-center absolute top-6 right-6 rounded-full">
                              <MdOutlineArrowOutward size={28} />
                            </button>
                          </span>
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="flex gap-4 justify-end w-full lg:pr-[60px] pr-0">
                  <button
                    className="hover:border border-gray-200 hover:bg-gray-100 text-brand-main w-12 h-12 rounded flex justify-center items-center"
                    onClick={prevSlide}
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    className="hover:border border-gray-200 hover:bg-gray-100 text-brand-main w-12 h-12 rounded flex justify-center items-center"
                    onClick={nextSlide}
                  >
                    <FiChevronRight size={24} />
                  </button>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <Divider className="max-w-[1520px] mx-auto my-10" />
    </div>
  );
}

export default Discover;
