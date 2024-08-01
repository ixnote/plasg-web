"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SubsectionHeader from "@/components/SubsectionHeader";

import ArticleImage from "@/assets/imgs/img.png";
import ChiefJudge from "@/assets/imgs/government/cabinet/1000065214.jpg";
import ChiefRegistrar from "@/assets/imgs/government/cabinet/1000065231.jpg";
import CommissionerWomenAffairs from "@/assets/imgs/government/cabinet/1000070808.jpg";
import ChieftaincyAffairs from "@/assets/imgs/government/cabinet/1000070786.jpg";
import InformationCommunication from "@/assets/imgs/government/cabinet/1000070789.jpg";
import HigherEducation from "@/assets/imgs/government/cabinet/1000070631.jpg";
import CommissionerHealth from "@/assets/imgs/government/cabinet/1000070623.jpg";
import WaterResource from "@/assets/imgs/government/cabinet/1000070620.jpg";
import YouthSport from "@/assets/imgs/government/cabinet/1000070617.jpg";
import BudgetPlanning from "@/assets/imgs/government/cabinet/1000071098.jpg";
import ChiefOfStaff from "@/assets/imgs/government/cabinet/1000071138.jpg";
import AttorneyGeneral from "@/assets/imgs/government/cabinet/1000071164.jpg";
import Transportation from "@/assets/imgs/government/cabinet/1000070791.jpg";
import Agriculture from "@/assets/imgs/government/cabinet/1000070629.jpg";
import Works from "@/assets/imgs/government/cabinet/1000071096.jpg";

const Cabinet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const profiles = [
    {
      image: ChiefJudge,
      name: "Hon. Justice D.G. Mann",
      position: "Chief Judge",
      action: "mail",
    },
    {
      image: ChiefRegistrar,
      name: "Hon Andrawus Maikai",
      position: "Chief Registrar High Court of Justice",
      action: "mail",
    },
    {
      image: CommissionerWomenAffairs,
      name: "Mrs. Caroline Pangjang",
      position: "Commissioner Women Affairs",
      action: "mail",
    },
    {
      image: ChieftaincyAffairs,
      name: "Hon. Ephraim Ujemson",
      position: "Comm. Local Govt & Chieftaincy Affairs",
      action: "mail",
    },
    {
      image: InformationCommunication,
      name: "Hon. Musa Ibrahim Ashoms",
      position: "Comm. Information & Communication",
      action: "mail",
    },
    {
      image: HigherEducation,
      name: "Hon. Dr. Hachollom Pyam Gang",
      position: "Comm. Higher Education",
      action: "mail",
    },
    {
      image: CommissionerHealth,
      name: "Hon. Dr. Cletus Bako Shurkuk",
      position: "Comm. for Health",
      action: "mail",
    },
    {
      image: WaterResource,
      name: "Hon. Noel Naanniap Nkup",
      position: "Comm. Water Resource & Energy",
      action: "mail",
    },
    {
      image: YouthSport,
      name: "Hon. Basir Lawandi Datti",
      position: "Youth & Sport Development",
      action: "mail",
    },
    {
      image: BudgetPlanning,
      name: "Hon. Chryenthus Dawan",
      position: "Comm. Budget & Planning",
      action: "mail",
    },
    {
      image: ChiefOfStaff,
      name: "Engr. Jerry Satmak",
      position: "Chief of Staff to the Governor",
      action: "mail",
    },
    {
      image: AttorneyGeneral,
      name: "Hon. Barr. Philomon Daffi",
      position: "Attorney General & Comm. for Justice",
      action: "mail",
    },
    {
      image: Transportation,
      name: "Hon. Jatau Davou Gyang",
      position: "Comm. for Transportation",
      action: "mail",
    },
    {
      image: Agriculture,
      name: "Hon. Samson Ishaku Bugama",
      position: "Comm. of Agriculture & Natural Resources",
      action: "mail",
    },
    {
      image: Works,
      name: "Hon. Adams Bulus Laksak",
      position: "Comm. of Works",
      action: "mail",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
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
