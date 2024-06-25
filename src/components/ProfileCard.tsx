"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({
  name,
  position,
  action,
  image,
  executive,
  link,
  email,
}: any) => {
  const router = useRouter();

  const handleClick = () => {
    if (action === "page") {
      router.push(`/government/${link}`);
    } else if (action === "mail") {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div
      className="flex flex-col items-start gap-2 w-full py-4"
      onClick={handleClick}
    >
      {/* top part */}
      <div className="relative h-[463px] w-full group cursor-pointer">
        {/* image */}
        <div className="w-full h-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt="profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-[#588065]/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
        {/* hover icon */}
        <div className="absolute top-4 right-4 p-4 bg-brand-lightYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          {action === "mail" && (
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-dark transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5974 3.24533L12.1801 10.216C11.9409 10.4142 11.64 10.5226 11.3294 10.5226C11.0188 10.5226 10.7179 10.4142 10.4787 10.216L2.0654 3.24533C2.02025 3.38122 1.99729 3.52348 1.9974 3.66667L1.9974 14.3333C1.9974 14.687 2.13787 15.0261 2.38792 15.2761C2.63797 15.5262 2.97711 15.6667 3.33073 15.6667L19.3307 15.6667C19.6844 15.6667 20.0235 15.5262 20.2735 15.2761C20.5236 15.0261 20.6641 14.687 20.6641 14.3333V3.66667C20.6646 3.52355 20.6421 3.38129 20.5974 3.24533ZM3.33073 1L19.3307 1C20.038 1 20.7162 1.28095 21.2163 1.78105C21.7164 2.28115 21.9974 2.95942 21.9974 3.66667V14.3333C21.9974 15.0406 21.7164 15.7189 21.2163 16.219C20.7162 16.719 20.038 17 19.3307 17H3.33073C2.62349 17 1.94521 16.719 1.44511 16.219C0.945014 15.7189 0.664063 15.0406 0.664063 14.3333L0.664063 3.66667C0.664063 2.95942 0.945014 2.28115 1.44511 1.78105C1.94521 1.28095 2.62349 1 3.33073 1ZM3.05073 2.33333L10.4854 8.47067C10.7235 8.66734 11.0225 8.77526 11.3313 8.77599C11.6402 8.77671 11.9397 8.67021 12.1787 8.47467L19.6881 2.33333L3.05073 2.33333Z"
                fill="black"
                stroke="black"
                strokeWidth="0.25"
              />
            </svg>
          )}
          {action === "page" && (
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-dark transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300"
            >
              <path
                d="M0.330078 11.1364L0.330078 8.86364L13.9664 8.86364L7.71644 2.61364L9.33008 1L18.3301 10L9.33008 19L7.71644 17.3864L13.9664 11.1364L0.330078 11.1364Z"
                fill="black"
                stroke="#FCFF5B"
                strokeWidth="0.25"
              />
            </svg>
          )}
        </div>
      </div>
      {/* bottom part */}
      {executive ? (
        <span className="font-medium text-2xl text-brand-dark font-geistsans lg:text-4xl">
          {name}
        </span>
      ) : (
        <span className="font-medium text-2xl text-brand-dark font-geistsans">
          {name}
        </span>
      )}
      <span className="font-normal text-lg text-brand-grayish font-geistsans">
        {position}
      </span>
    </div>
  );
};

export default ProfileCard;
