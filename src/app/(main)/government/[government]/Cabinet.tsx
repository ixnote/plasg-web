"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SubsectionHeader from "@/components/SubsectionHeader";

import ArticleImage from "@/assets/imgs/img.png";

const Cabinet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const profiles = [
    {
      // image: ArticleImage,
      image:
        "https://drive.google.com/file/d/1qlT7Fs-LQD1QcebYDSOYepcTT8Mifgbg/view?usp=drive_link",
      name: "Hannatu Joel",
      position: "Member House of Assembly.",
      action: "mail",
    },
    {
      image: ArticleImage,
      name: "Dasbak Rifkatu",
      position: "Member House of Assembly.",
      action: "mail",
    },
    {
      image: ArticleImage,
      name: "Josephine Gali",
      position: "Member House of Assembly.",
      action: "mail",
    },
    {
      image: ArticleImage,
      name: "Josephine Gali",
      position: "Member House of Assembly.",
      action: "mail",
    },
    {
      image: ArticleImage,
      name: "Josephine Gali",
      position: "Member House of Assembly.",
      action: "mail",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : Math.ceil(profiles.length / cardsToShow) - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.ceil(profiles.length / cardsToShow) - 1
        ? prevIndex + 1
        : 0
    );
  };

  return (
    <>
      <div className="flex flex-col gap-12 pb-12 lg:gap-20">
        <SubsectionHeader
          left={"GOVERNOR’S CABINET"}
          right={
            "Introducing the brilliant minds and dedicated professionals leading the charge within Plateau's ministries."
          }
        />
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-fx gap-6"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsToShow
                }%)`,
              }}
            >
              {profiles.map((profile, index) => (
                <div
                  className="flex-shrink-0 w-[95%] md:w-1/2 lg:w-1/4"
                  key={index}
                >
                  <ProfileCard {...profile} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 justify-end mt-4">
            <span
              className="transition-fx p-4 rounded-lg cursor-pointer hover:bg-brand-lightYellow"
              onClick={prevSlide}
            >
              <svg
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17.5234L5 13.5234L1 9.52344L9 1.52344"
                  stroke="#0E3E40"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span
              className="transition-fx p-4 rounded-lg cursor-pointer hover:bg-brand-lightYellow"
              onClick={nextSlide}
            >
              <svg
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.52344L5 5.52344L9 9.52344L1 17.5234"
                  stroke="#0E3E40"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabinet;
