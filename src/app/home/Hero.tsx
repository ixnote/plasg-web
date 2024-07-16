"use client";

import React, { useState } from "react";
import bg from "../../../public/landing/background.png";
import Image from "next/image";
import { IoArrowDownOutline } from "react-icons/io5";
import { handleScrollDown } from "@/utils/handleScrollDown";

const Hero = () => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="h-screen max-w-[2040px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        {/* hero content */}
        <div className="m-auto w-[92%] flex justify-between flex-col lg:flex-row">
          {/* left */}
          <div className="w-full flex flex-col gap-4 justify-between lg:w-[50%]">
            <div className="flex flex-col gap-4">
              {/* left top */}
              {!showSearchResult && (
                <div className="home-glass-fx h-[296px] flex flex-col gap-10 text-left p-8">
                  <div className="text-left flex flex-col gap-2">
                    <span className="stroke-fx font-medium text-3xl font-geistsans outline-2 md:text-5xl">
                      Welcome to{" "}
                    </span>
                    <span className="font-medium text-3xl font-geistsans w-[80%] text-wrap text-brand-white outline-2 md:text-5xl">
                      Plateau State
                    </span>
                  </div>
                  <span className="font-normal text-base text-brand-white font-geistsans w-full lg:w-[94%]">
                    Plateau.gov.ng is the official website of Plateau State.
                    Here, you&apos;ll find access to online services, valuable
                    resources, and essential information about our beautiful
                    state.
                  </span>
                </div>
              )}
              {/* bottom left */}
              <div className="relative w-full">
                {showSearchResult && (
                  // <div className="absolute -top-[248px] left-0 w-full bg-brand-lightYellow p-4 rounded-t-lg h-[250px] flex flex-col  justify-start">
                  <div className="w-full bg-brand-lightYellow p-4 rounded-t-lg flex flex-col  justify-start">
                    <span className="flex flex-row items-center justify-start gap-4 text-brand-dark cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-brand-lightYellow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search 1
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-brand-dark cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-brand-lightYellow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search 2
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-brand-dark cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-brand-lightYellow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-brand-dark cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-brand-lightYellow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-brand-dark cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-brand-lightYellow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    {/* <hr /> */}
                  </div>
                )}
                {/* Input holder */}
                <div
                  className={
                    showSearchResult
                      ? "h-[74px] flex flex-row items-center justify-between p-4 rounded-lg bg-brand-lightYellow shadow-none rounded-t-none"
                      : "home-glass-fx h-[74px] flex flex-row items-center justify-between p-4 rounded-lg duration-300 ease-in-out hover:bg-brand-lightYellow hover:shadow-none focus:bg-brand-lightYellow focus:rounded-t-none"
                  }
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <input
                    type="search"
                    name="search"
                    id="search"
                    onFocus={() => setShowSearchResult(true)}
                    onBlur={() => setShowSearchResult(false)}
                    placeholder="Looking for something? Search anything"
                    className={
                      showSearchResult
                        ? "flex items-center justify-center w-full p-4 bg-transparent text-brand-dark cursor:pointer outline-none border-t-[0.5px] border-brand-grayish/40 border-solid"
                        : "flex items-center justify-center w-full p-4 bg-transparent text-brand-dark cursor:pointer border-none outline-none"
                    }
                  />
                  {/* search Icon */}
                  {hovered ? (
                    <>
                      {!showSearchResult && (
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="50" height="50" rx="4" fill="black" />
                          <path
                            d="M30 30L34 34M16 24C16 26.1217 16.8429 28.1566 18.3431 29.6569C19.8434 31.1571 21.8783 32 24 32C26.1217 32 28.1566 31.1571 29.6569 29.6569C31.1571 28.1566 32 26.1217 32 24C32 21.8783 31.1571 19.8434 29.6569 18.3431C28.1566 16.8429 26.1217 16 24 16C21.8783 16 19.8434 16.8429 18.3431 18.3431C16.8429 19.8434 16 21.8783 16 24Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  ) : (
                    <>
                      {!showSearchResult && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-4"
                        >
                          <path
                            d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
                            stroke="white"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]"></div>
        </div>
        <div className="absolute bottom-5 right-0 flex items-center justify-center gap-4 px-[16px] py-[8px] font-geistsans text-base font-normal text-[#CDE399] md:right-10">
          <button
            onClick={() => handleScrollDown(true)}
            className="h-10 px-0 rounded-sm w-fit flex items-center justify-center gap-2 animate-bounce"
          >
            <IoArrowDownOutline size={32} />
          </button>
        </div>
        {/* <span
          className="glass-fx absolute bottom-5 right-10 flex items-center justify-center gap-4 border-[2px] border-brand-white/20 px-[16px] py-[8px] font-geistsans text-base font-normal text-[#CDE399]"
          onClick={() => handleScrollDown}
        >
          Scroll Down
          <button
            onClick={() => handleScrollDown}
            className="h-10 px-0 rounded-sm  w-fit flex items-center justify-center gap-2 animate-bounce"
          >
            <IoArrowDownOutline size={32} />
          </button>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path
              d="M3.49495 0H4.50505V6.06061L7.28283 3.28283L8 4L4 8L0 4L0.717172 3.28283L3.49495 6.06061V0Z"
              fill="#CDE399"
            />
          </svg>
        </span> */}
      </div>
    </>
  );
};

export default Hero;
