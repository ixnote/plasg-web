"use client";
import React, { useEffect, useState } from "react";
import { Divider } from "@mantine/core";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { cn } from "@/utils";
import { useMediaQuery } from "@mantine/hooks";
import { MdOutlineArrowOutward } from "react-icons/md";

function Discover({ destinations }: any) {
  const tabs = [
    { text: "landmark", name: "Landmarks", value: "stay" },
    { text: "parks", name: "Parks", value: "eat" },
    { text: "gallery", name: "Gallery", value: "food" },
  ];
  const [activeTab, setActiveTab] = useState<any>(tabs[0]);

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, []);

  const matches = useMediaQuery("(max-width: 768px)");

  const filterDestinations = (value: string) => {
    return places.filter((item: any) => item.type === value);
  };

  const places = [
    {
      name: "Wase Rock",
      description:
        "This massive dome-shaped rocky inselberg is found near Wase town in Wase Local Government Area of Plateau State, Nigeria.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wase_Rock.JPG/1280px-Wase_Rock.JPG",
      // "https://64.media.tumblr.com/6401c819ea781861479ee271504c2b0e/tumblr_na8k9xzDtF1sv7o1do1_400.jpg",
      type: "landmark",
    },
    {
      name: "Shere Hills",
      description:
        "The Shere Hills are a range of undulating hills and rock formations located in Plateau State, offering scenic views and hiking opportunities.",
      image:
        "https://emc3nigeria.com/wp-content/uploads/2016/09/Shere-Hills-Jos-Plateau-State.jpg",
      type: "landmark",
    },
    {
      name: "Jos Wildlife Park",
      description:
        "Jos Wildlife Park offers a scenic and wildlife-rich area where you can explore Plateau's biodiversity. A must-visit for nature lovers.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPWy_4dGLVklVOFuJxCZJuTlFncVEhWFD9o8jk=s680-w680-h510",
      type: "parks",
    },
    {
      name: "Assop Falls",
      description:
        "Located along the Jos-Kagoro road, Assop Falls is a beautiful waterfall known for its cascading waters and serene environment.",
      image:
        "https://www.hlimg.com/images/things2do/738X538/ttd_1520680241m3.jpg?w=1880&dpr=1.0",
      type: "landmark",
    },
    {
      name: "National Museum Jos",
      description:
        "The National Museum in Jos is home to a rich collection of Nigerian artifacts, especially known for its pottery and archaeological exhibits.",
      image:
        "https://www.bmitpglobalnetwork.org/wp-content/uploads/2023/12/national-museum-jos.jpg",
      type: "gallery",
    },
    {
      name: "Riyom Rock",
      description:
        "Riyom Rock, an iconic rock formation, is located near Riyom town in Plateau State. It stands as a natural sculpture, showcasing the beauty of the region's geology.",
      image: "https://cimages.timbu.com/guides/2017/07/Riyom-Rock-2.jpg",
      type: "landmark",
    },
    {
      name: "Kurra Falls",
      description:
        "Kurra Falls, located near Barkin Ladi, is a man-made water body used to generate hydroelectric power, and it's a stunning place for sightseeing and picnics.",
      image:
        "https://www.researchgate.net/profile/Nathaniel-Goki/publication/327405748/figure/fig6/AS:675093973852173@1537966354497/Kurra-Falls-in-Riyom-south-east-of-Jos-central-Nigeria.jpg",
      type: "landmark",
    },
    {
      name: "Pandam Wildlife Park",
      description:
        "Located in Qua’an Pan Local Government Area, Pandam Wildlife Park is a natural sanctuary for a variety of animals and plant species.",
      image:
        "https://www.icirnigeria.org/wp-content/uploads/2016/04/Pandam-Wildlife-Park.jpg",
      type: "parks",
    },
    {
      name: "Rayfield Resort",
      description:
        "Rayfield Resort is a popular recreational area in Jos, featuring serene lakes for boating and relaxation, ideal for family outings.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOnS9mh1Dj3C6GcMLUe9VU-UtRzRfuKDzyAJWAi=s680-w680-h510",
      type: "parks",
    },
    {
      name: "Jos Museum of Traditional Nigerian Architecture (MOTNA)",
      description:
        "A specialized museum showcasing indigenous Nigerian architectural styles, with life-sized models and detailed displays.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNs5BqjGuxv9WlgHpEp8aF-i2ADX1YOjHV28KeI=s680-w680-h510",
      type: "gallery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredPlaces = filterDestinations(activeTab.text);

  const nextSlide = () => {
    if (currentIndex < filteredPlaces.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredPlaces.length - 1);
    }
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
            <span className="flex flex-row gap-4 cursor-pointer mt-12 pb-10">
              {" "}
              {/* Changed to flex-row */}
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
              {filteredPlaces.length > 0 && (
                <span className="flex flex-col gap-8 pb-14">
                  <p className="text-[24px] text-brand-main font-medium max-w-[800px]">
                    {filteredPlaces[currentIndex]?.name}
                  </p>
                  <p className="text-[18px] font-normal text-brand-main m-0 lg:col-span-4  max-w-[700px]">
                    {filteredPlaces[currentIndex]?.description}
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
                  {filteredPlaces.map((item, index) => (
                    <span
                      key={index}
                      className="w-full h-auto rounded-2xl aspect-[9/7] object-cover bg-[#588065] image-container relative carousel-image"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1200}
                        height={1200}
                        className="w-full h-full rounded-2xl aspect-[9/7] object-cover bg-[#588065]"
                      />
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
